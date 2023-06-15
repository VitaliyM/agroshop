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
      <div className='presentSwitchBlock'>
        <div className='presentSwitchNextPrev'>
          <div className='presentSwitchBtn presentPrev'>Prev</div>
          <div className='switchBtnLine'></div>
          <div className='presentSwitchBtn presentNext'>Next</div>
        </div>
        <div className='presentSwitchPagesBlock'>
          <div className='presentSwitchPage'>
            <span className='pageNumber presentPage1'>01</span>
            <span className='pageText'>Lorem ipsum Dolorem apset </span>
          </div>
          <div className='presentSwitchPage'>
            <span className='pageNumber presentPage2'>02</span>
            <span className='pageText'>Lorem ipsum Dolorem apset</span>
          </div>
          <div className='presentSwitchPage'>
            <span className='pageNumber presentPage3'>03</span>
            <span className='pageText'>Lorem ipsum Dolorem apset</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation