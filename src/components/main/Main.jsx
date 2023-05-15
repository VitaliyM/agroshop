import React from 'react';
import './main.css';
import Presentation from './presentation/Presentation'
import LatestProjects from './latestProjects/LatestProjects';
import VideoApartments from './videoApartments/VideoApartments';
import DontLimit from './dontLimit/DontLimit';

const Main = () => {
  return (
    <main className='mainBlock'>
        <Presentation />
        <LatestProjects />
        <VideoApartments />
        <DontLimit />
    </main>
  )
}

export default Main