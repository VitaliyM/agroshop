import React from 'react';
import './main.css';
import Presentation from './presentation/Presentation'
import LatestProjects from './latestProjects/LatestProjects';

const Main = () => {
  return (
    <main className='mainBlock'>
        <Presentation />
        <LatestProjects />
    </main>
  )
}

export default Main