import React from 'react';
import './Hemisphere.css';
import northernPic from './image/northern-hemisphere.png'
import southernPic from './image/southern-hemisphere.png'

const hemisphereConfig = {
    Northern: {
        picture: northernPic
    },
    Southern: {
        picture: southernPic
    }
}

const HemiSphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {picture} = hemisphereConfig[hemisphere];

    return (
        <div className={ hemisphere }>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img style={{width: '100%'}} src={picture} alt={ hemisphere } />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1 style={{ textAlign: 'center' }}>Hey You are in { hemisphere } hemisphere!</h1>
                </div>
            </div>
        </div>
    )
}

export default HemiSphereDisplay;