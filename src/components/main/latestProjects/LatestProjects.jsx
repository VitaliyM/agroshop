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

        <div className='projectsSliderBlock'></div>
        <div className='projectsExpertiseBlock'></div>
    </div>
  )
}

export default LatestProjects