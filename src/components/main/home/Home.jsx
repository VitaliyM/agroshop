import React from 'react';
import LatestProjects from './latestProjects/LatestProjects';
import VideoApartments from './videoApartments/VideoApartments';
import DontLimit from './dontLimit/DontLimit';
import ContactUs from './contactUs/ContactUs';
import UsefulArticles from './usefulArticles/UsefulArticles';
import InvestorsSlider from './investorsSlider/InvestorsSlider';
import Presentation from './presentation/Presentation';
import Faq from './faq/Faq';

const Home = () => {
  return (
    <div>
        <Presentation />
        <LatestProjects />
        <VideoApartments />
        <DontLimit />
        <ContactUs />
        <UsefulArticles />
        <InvestorsSlider />
        <Faq />
    </div>
  )
}

export default Home