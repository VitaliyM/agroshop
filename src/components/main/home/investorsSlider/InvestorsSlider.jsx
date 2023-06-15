import React from 'react';
import './investorsSlider.css';
import Image1 from '../../../../images/investor1.png';
import Image2 from '../../../../images/investor2.png';

const InvestorsSlider = () => {
    return (
        <div className='investorsBlock'>
            <div className="investorsSliderWrap">
                <div className="investorSlide">
                    <img src={Image2} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName">Robert</div>
                    <div className="investorCompany">Founder in <a href='##' className='investorLink'> Apple inc.</a></div>
                    <div className="investorText">Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing
                    </div>
                </div>

                <div className="investorSlide">
                    <img src={Image1} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName">Paul</div>
                    <div className="investorCompany">Owner in <a href='##'                      className='investorLink'>Paul.com</a></div>
                    <div className="investorText">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.
                    </div>
                </div>

                <div className="investorSlide">
                    <img src={Image2} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName">Robert</div>
                    <div className="investorCompany">Founder in <a href='##' className='investorLink'>Apple inc.</a></div>
                    <div className="investorText">Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing
                    </div>
                </div>

                <div className="investorSlide">
                    <img src={Image1} alt="investor1" className='investor investor1' />
                    <div className="quotes"></div>
                    <div className="investorName">Paul</div>
                    <div className="investorCompany">Owner in <a href='##' className='investorLink'>Paul.com</a></div>
                    <div className="investorText">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.
                    </div>
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