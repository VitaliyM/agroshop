import React from 'react';
import './investorsSlider.css';
import Image1 from '../../../images/investor1.png';
import Image2 from '../../../images/investor2.png';

const InvestorsSlider = () => {
    return (
        <div className='investorsBlock'>
            <div className="investorsSliderWrap">
                <div className="investorSlide">
                    <img src={Image2} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName"></div>
                    <div className="investorCompany"></div>
                    <div className="investorText"></div>
                </div>

                <div className="investorSlide">
                    <img src={Image1} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName"></div>
                    <div className="investorCompany"></div>
                    <div className="investorText"></div>
                </div>

                <div className="investorSlide">
                    <img src={Image2} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName"></div>
                    <div className="investorCompany"></div>
                    <div className="investorText"></div>
                </div>

                <div className="investorSlide">
                    <img src={Image1} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName"></div>
                    <div className="investorCompany"></div>
                    <div className="investorText"></div>
                </div>
            </div>
            <div className='investorSlideSwitcher'>
                <div className="investorSwitch investorSwitchBtn1"></div>
                <div className="investorSwitch investorSwitchBtn1"></div>
                <div className="investorSwitch investorSwitchBtn1"></div>
            </div>
        </div>
    )
}

export default InvestorsSlider