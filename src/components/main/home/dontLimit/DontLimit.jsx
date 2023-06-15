import React from 'react';
import './dontLimit.css';
import articleImage1 from '../../../../images/articleImg1.png';
import articleImage2 from '../../../../images/articleImg2.png';

const DontLimit = () => {
    return (
        <div className='dontLimitBlock'>
            <div className='dontLimitHeaderText'>
                “Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” <a href='##' className='maryKayLink'>- Mary Kay Ash</a>
            </div>
            <div className='dontLimitArticlesBlock'>
                <div className='dontLimitArticle'>
                    <img src={articleImage1} alt="articleImage1" className='articleImage' />
                    <div className='articleText'>
                        Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
                    </div>
                </div>
                <div className='dontLimitArticle'>
                    <img src={articleImage2} alt="articleImage2" className='articleImage' />
                    <div className='articleText'>
                        Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut ullamcorper dapibus ante, eu tincidunt orci feugiat vel. Curabitur eget lectus lectus. Pellentesque malesuada, felis at accumsan interdum, nisl mi fermentum est, eu suscipit dui lorem a dui. Aliquam rhoncus risus in leo vestibulum efficitur. Suspendisse tortor quam, faucibus a lacinia a, bibendum vitae quam. Suspen disse et metus et orci rutrum dictum eu eu nibh. Suspendisse blandit in diam in rhoncus. Nam volutpat hendrerit enim, sed aliquet quam gravida at. Nullam dictum sagittis nisi, eu porta sem mollis eu. Nulla faucibus sed ipsum sed sodales. Curabitur varius iaculis felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum elementum, nulla magna tincidunt urna, a venenatis dolor arcu sed leo.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DontLimit