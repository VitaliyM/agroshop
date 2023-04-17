import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navBlock'>
        <div className='navListItems'>
            <a href="##" className='navList navListBuy'>Buy
              <div className='navListBuyCategory'>
                <a href="##" className='categoryList'>Category number one</a>
                <a href="##" className='categoryList'>Apartments in Dubai</a>
                <a href="##" className='categoryList'>Category number twenty five</a>
              </div>
            </a>
            <a href="##" className='navList'>Blog</a>
            <a href="##" className='navList'>About</a>
            <a href="##" className='navList'>Contact</a>
        </div>
    </nav>
  )
}

export default Navbar