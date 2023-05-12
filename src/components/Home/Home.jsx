import React, { useEffect } from 'react'

import waveLine from '../../assets/img/wave_line.svg';
import starIcon from '../../assets/img/star.svg';

const Home = () => {

  useEffect(() => {
    const home_button = document.querySelector('.home-button');
    home_button.classList.add('lg:hidden');

  })

  return (
    <div className='portfolio-home'>
        <div className="home-container">
          <div className="home-container-title">
            <h1>Andrés</h1>
            <img className='hidden md:flex' src={starIcon}/>
            <h1>Marín</h1>
          </div>
          <div className="home-container-subtitle">
            <div className="subtitle-line" style={{ backgroundImage: 'url(' + waveLine + ')' }}></div>
            <h2>Web Developer</h2>
          </div>
        </div>
    </div>
  )
}

export default Home