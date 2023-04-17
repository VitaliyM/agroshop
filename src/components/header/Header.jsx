import React from 'react';
import './header.css';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <header className='headerBlock'>

      <div className='headerLogo'>
        <span className='headerLogoBigText'>DubaiRealty</span>
        <span className='headerLogoSmallText'>Real Estate</span>
      </div>

      <Navbar />

      <div className='headerConsultation'>
        <button className='headerConsultButton'>Book a consultation</button>
        <a href="tel:+971001112233" className='headerConsultNumber'>+971 00 111 2233</a>
      </div>

    </header>
  )
}

export default Header