import React from 'react';
// import Tilt from 'react-parallax-tilt';
import Tilt from 'react-parallax-tilt';
import hologram from './hologram.gif';
import './Hologram.css';

const Hologram = () => {
  return (
    <div className='ma4 mt0'>
        <div className="Tilt-inner pa1 center w-30">
          <img alt='hologram' src={hologram}/>
        </div>
    </div>
  );
}

export default Hologram;