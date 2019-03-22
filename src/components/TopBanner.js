import './TopBanner.css';
import React from 'react';

const TopBanner = ()=> {
    return(
        <div className="top-banner">
            <img src={process.env.PUBLIC_URL + '/logo.png'} />
        </div>
    );
}

export default TopBanner;