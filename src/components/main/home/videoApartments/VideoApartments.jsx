import React from 'react';
import './videoApartment.css';

const VideoApartments = () => {
    return (
        <iframe
            className='videoApartmentBlock'
            src="https://www.youtube.com/embed/AydOGMIogQo" title="Two Bedroom Apartment in Fountain Views 3 | Downtown Dubai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
    )
}

export default VideoApartments