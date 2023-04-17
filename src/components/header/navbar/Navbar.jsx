import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navBlock'>
      <a href="##" className='navList navListBuy'>Buy
        <div className='menuArrow'></div>
        <div className='navListBuyCategory'>
          <a href="##" className='categoryList'>Category number one</a>
          <a href="##" className='categoryList'>Apartments in Dubai</a>
          <a href="##" className='categoryList'>Category number twenty five</a>
        </div>
      </a>
      <a href="##" className='navList'>Blog</a>
      <a href="##" className='navList'>About</a>
      <a href="##" className='navList'>Contact</a>
    </nav>
  )
}

export default Navbar