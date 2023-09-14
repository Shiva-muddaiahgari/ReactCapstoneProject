import React, { useState } from 'react';

const BookingForm = (props) =>{
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) =>{
        setDate(e)
        props.dispatch(e);
    }
    return(
        <div>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor='book-date'>Choose date:</label>
                                <input id='book-date' value={date} type='date' onChange={(e)=>handleChange(e.target.value)}
                                required/>
                            </div>
                            <div>
                                <label htmlFor='book-time'>Choose Time:</label>
                                <select id='book-time' value={times} onChange={(e)=>setTimes(e.target.value)}>
                                    <option value="">Select A time</option>
                                    {props.availableTimes.availableTimes.map(availableTimes => {
                                        return<option key={availableTimes}>{availableTimes}</option>})}
                                </select>
                            </div>
                            <div>
                                <label htmlFor='book-guests'>Number of guests:</label>
                                <input id='book-guests' value={guests} min='1' onChange={(e)=>setGuests(e.target.value)}
                                required/>
                            </div>
                            <div>
                                <label htmlFor='book-occasion'>Occasion:</label>
                                <select id='book-occasion' value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                                    <option value="">Birthday</option>
                                    <option value="">Anniversary</option>
                                </select>
                            </div>
                            <div className='btnReceive'>
                                <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>
        </div>
    )
}

export default BookingForm