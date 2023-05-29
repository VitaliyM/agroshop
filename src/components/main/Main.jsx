import React from 'react';
import './main.css';
import Presentation from './presentation/Presentation'
import LatestProjects from './latestProjects/LatestProjects';
import VideoApartments from './videoApartments/VideoApartments';
import DontLimit from './dontLimit/DontLimit';
import ContactUs from './contactUs/ContactUs';
import UsefulArticles from './usefulArticles/UsefulArticles';
import InvestorsSlider from './investorsSlider/InvestorsSlider';

const Main = () => {
  return (
    <main className='mainBlock'>
        <Presentation />
        <LatestProjects />
        <VideoApartments />
        <DontLimit />
        <ContactUs />
        <UsefulArticles />
        <InvestorsSlider />
    </main>
  )
}

export default Main