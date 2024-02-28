import React from 'react';
import './servicesPage.css';
import FurnishedApartments from './furnishedApartmentsBlock/FurnishedApartments';
import ContactUs from '../contactUs/ContactUs';
import RentText from './rentText/RentText';

const ServicesPage = () => {
  return (
    <div className='servicesPage'>
        <FurnishedApartments />
        <RentText />
        <ContactUs />
    </div>
  )
}

export default ServicesPage