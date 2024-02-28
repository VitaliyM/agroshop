import React from 'react';
import './main.css';
import Home from './home/Home';
import ServicesPage from './servicesPage/ServicesPage';


const Main = () => {
  return (
    <main className='mainBlock'>
        {/* <Home /> */}
        <ServicesPage />
    </main>
  )
}

export default Main