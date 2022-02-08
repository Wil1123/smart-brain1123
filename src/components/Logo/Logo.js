import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './Brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt'>
                <div style={{
                    height: '160px', width: '150px'
                }}>
                    <img alt='logo' src={brain} />
                </div>
            </Tilt >
        </div>
    );
}
export default Logo;