import React from 'react';
import './contactUs.css';

const ContactUs = () => {
  return (
    <div className='contactUsBlock'>
      <div className='contactUsSmallText'>Do you have any questions?</div>
      <div className='contactUsBigText'>Contact us</div>

      <form action="" method="post" className='contactUsForm'>
        <input type="text"
          placeholder='Enter your mail'
          className='contactUsInput'
        />
        <input type="button"
          value='Send'
          className='contactUsButton'
        />
      </form>
      
    </div>
  )
}

export default ContactUs