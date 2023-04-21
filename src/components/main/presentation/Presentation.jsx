import React from 'react';
import './presentation.css';

const Presentation = () => {
  return (
    <div className='presentBlock'>
        <div className='presentText'>
          <div className='presentTextHeader'>Lorem ipsum</div>
          <div className='presentTextDescribe'>Welcome Home <span>To</span> Luxury</div>
          <div className='presentTextConsult'>Book a consultation</div>
        </div>
        <div className='presentSocials'>
          <div className="presentSocialsBtn facebook"></div>
          <div className="presentSocialsBtn twitter"></div>
          <div className="presentSocialsBtn youtube"></div>
          <div className="presentSocialsBtn instagram"></div>
          <div className="presentSocialsBtn linkedIn"></div>
        </div>
        <div>Switch</div>
    </div>
  )
}

export default Presentation