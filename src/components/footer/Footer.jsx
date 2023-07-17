import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footerBlock'>
      <div className='footerLogo'>
        <span className='footerLogoBigText'>DubaiRealty</span>
        <span className='footerLogoSmallText'>Real Estate</span>
      </div>
      <div className='footerMapBlock'>
        <div className="footerMapInfo footerBuyBlock">
          <div className='footerInfoHeader'>Buy</div>
          <div className="footerInfoList">Apartment in Dubai</div>
          <div className="footerInfoList">House in Dubai</div>
          <div className="footerInfoList">Apartments in Dubai</div>
          <div className="footerInfoList">Loft in Dubai</div>
          <div className="footerInfoList">Penthouse in Dubai</div>
          <div className="footerInfoList">Villa in Dubai</div>
        </div>
        <div className="footerMapInfo footerServicesBlock">
          <div className='footerInfoHeader'>Services</div>
          <div className="footerInfoList">Property management in Dubai, UAE</div>
          <div className="footerInfoList">Sell ​​property in Dubai, UAE</div>
          <div className="footerInfoList">Rent property in Dubai, UAE</div>
          <div className="footerInfoList">Investments in Dubai, UAE</div>
          <div className="footerInfoList">Real estate for cryptocurrency in Dubai</div>
          <div className="footerInfoList">Moving to Dubai, UAE </div>
        </div>
        <div className="footerMapInfo footerInformationBlock">
          <div className='footerInfoHeader'>Information</div>
          <div className="footerInfoList">Video</div>
          <div className="footerInfoList">Podcasts</div>
          <div className="footerInfoList">Laws</div>
          <div className="footerInfoList">Questions and answers</div>
          <div className="footerInfoList">Books</div>
          <div className="footerInfoList">Articles</div>
        </div>
        <div className="footerMapInfo footerAboutBlock">
          <div className='footerInfoHeader'>About company</div>
          <div className="footerInfoList">Jobs</div>
          <div className="footerInfoList">Story</div>
          <div className="footerInfoList">Licenses</div>
          <div className="footerInfoList">Why are we</div>
          <div className="footerInfoList">Real estate agency</div>
        </div>
        <div className="footerMapInfo footerContactBlock">
          <div className='footerInfoHeader'>Contact</div>
          <div className="footerInfoList">964 Worthington Drive Dubai, UAE</div>
          <div className="footerInfoList">dubairealty@mail.com</div>
          <button className='footerConsultButton'>Book a consultation</button>
        </div>
      </div>
      <div className='footerCopyrightBlock'>
        <div className='footerCopyrightText'>Copyright © 2022 Dubai Realty</div>
        <div className='footerCopyrightSocialBtn'>
          <div className="copySocialsBtn facebook"></div>
          <div className="copySocialsBtn twitter"></div>
          <div className="copySocialsBtn youtube"></div>
          <div className="copySocialsBtn instagram"></div>
          <div className="copySocialsBtn linkedIn"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer