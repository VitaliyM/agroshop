import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navBlock'>
        <div className='navLogo'>
            <span className='navLogoBigText'>DubaiRealty</span>
            <span className='navLogoSmallText'>Real Estate</span>
        </div>

        <div className='navListItems'>
            <a href="##" target="_blank" className='navList'>Buy</a>
            <a href="##" target="_blank" className='navList'>Blog</a>
            <a href="##" target="_blank" className='navList'>About</a>
            <a href="##" target="_blank" className='navList'>Contact</a>
        </div>

        <div className='navConsultation'>
            <button className='navConsultButton'>Book a consultation</button>
            <a href="tel:+971001112233" className='navConsultNumber'>+971 00 111 2233</a>
        </div>
    </nav>
  )
}

export default Navbar