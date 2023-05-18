import React from 'react';
import './usefulArticles.css';

const UsefulArticles = () => {
  return (
    <div className='UsefulArtBlock'>
        <div className='UsefulArtHeader'>
            <div className='UsefulArtBigText'>Useful articles</div>
            <div className='UsefulArtViewAll'>View all articles</div>
        </div>
        <div className='UsefulArtWrapper'>
            <div className='UsefulArticle article1'>
                <div className='articleDate'></div>
                <div className='articleHeader'></div>
                <div className='articleText'></div>
                <div className='articleLearnMore'>Learn more</div>
            </div>
            <div className='UsefulArticle article2'>
                <div className='articleDate'></div>
                <div className='articleHeader'></div>
                <div className='articleText'></div>
                <div className='articleLearnMore'>Learn more</div>
            </div>
            <div className='UsefulArticle article3'>
                <div className='articleDate'></div>
                <div className='articleHeader'></div>
                <div className='articleText'></div>
                <div className='articleLearnMore'>Learn more</div>
            </div>
        </div>
    </div>
  )
}

export default UsefulArticles