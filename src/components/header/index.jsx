import React from 'react';
import '../header/style.css';
import logo from '../../images/logo.png';
import banner from '../../images/banner.png';
import tierra from '../../images/tierra.png';

export const Header = () => {
    return (
        <>
            <div className='header' >
                <img className='logo_image' src={logo} />
                <img className='banner_image' src={banner} />
                <img className='tierra_image' src={tierra} />
            </div>
        </>
    )
}
