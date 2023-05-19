import React from 'react';
import './usefulArticles.css';

const UsefulArticles = () => {
    return (
        <div className='usefulArtBlock'>
            <div className='usefulArtHeader'>
                <div className='usefulArtBigText'>Useful articles</div>
                <div className='usefulArtViewAll'>View all articles</div>
            </div>

            <div className='usefulArtWrapper'>
                <div className='usefulArticle article1'>
                    <div className='usefulArticleInfo'>
                        <div className='articleInfoDate'>Jule 03, 2022</div>
                        <div className='articleInfoHeader'>Discover Architecture</div>
                        <div className='articleInfoText'>Projects for many large domestic and
                            foreign corporations, enterprises in many elds such</div>
                        <div className='articleInfoLearnMore'>Learn more</div>
                    </div>
                </div>
                <div className='usefulArticle article2'>
                    <div className='usefulArticleInfo'>
                        <div className='articleInfoDate'>Jule 03, 2022</div>
                        <div className='articleInfoHeader'>Discover Architecture</div>
                        <div className='articleInfoText'>Projects for many large domestic and
                            foreign corporations, enterprises in many elds such</div>
                        <div className='articleInfoLearnMore'>Learn more</div>
                    </div>
                </div>
                <div className='usefulArticle article3'>
                    <div className='usefulArticleInfo'>
                        <div className='articleInfoDate'>Jule 03, 2022</div>
                        <div className='articleInfoHeader'>Discover Architecture</div>
                        <div className='articleInfoText'>Projects for many large domestic and
                            foreign corporations, enterprises in many elds such</div>
                        <div className='articleInfoLearnMore'>Learn more</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UsefulArticles