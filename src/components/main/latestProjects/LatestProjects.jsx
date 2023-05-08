import React from 'react';
import './latestProjects.css'

const LatestProjects = () => {
  return (
    <div className='latestProjectsBlock'>
      <div className='projectsNav'>
        <h2 className='projectsHeader'>Latest projects</h2>
        <div className='projectsMenuBlock'>
          <div className='projectsMenuList'>All</div>
          <div className='projectsMenuList'>Building</div>
          <div className='projectsMenuList'>Interior</div>
          <div className='projectsMenuList'>View all projects</div>
        </div>
      </div>

      <div className='projectsSliderBlock'>
        <div className='rpojectListWrapper'>
          <div className="projectList project1">
            <div className="projectDescribe">
              <div className='projectDescribeHeader'>Villas</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
          <div className="projectList project2">
            <div className="projectDescribe">
              <div className='projectDescribeHeader'>Dubai</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
          <div className="projectList project3">
            <div className="projectDescribe">
              <div className='projectDescribeHeader'>Houses</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
          <div className="projectList project4">
            <div className="projectDescribe">
              <div className='projectDescribeHeader'>Villas</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
        </div>
        <div className='switchSliderBlock'>
          <div className="switchSlide"></div>
          <div className="switchSlide"></div>
          <div className="switchSlide"></div>
        </div>
      </div>

      <div className='projectsExpertiseBlock'>
        <div className='projectsExpertiseSmallHeader'>Our expertises</div>
        <div className='projectsExpertiseBigHeader'>"The best appartment in Dubai" we will find your dream</div>
        <div className='projectsExpertiseText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>
  )
}

export default LatestProjects