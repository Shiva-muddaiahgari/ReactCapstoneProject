import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../images/restaurantfood.jpg';


function Header() {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>India</h3>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>
            <div className='banner-img'>
                <img src={bannerImage}></img>
            </div>
        </section>
    </header>
  )
}

export default Header