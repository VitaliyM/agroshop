import React from 'react';
import './header.css';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <header className='headerBlock'>
        
        <Navbar />

        <div className='headerImageBlock'></div>

    </header>
  )
}

export default Header