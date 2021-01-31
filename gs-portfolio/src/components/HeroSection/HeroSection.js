import React from 'react'
import Button from '../Button/Button'
import { FiSend } from "react-icons/fi";
import './HeroSection.css'
import '../../App.css'
import hero from './hero.json'

// import Video from '../../videos/video-2.mp4'

function HeroSection() {
    return (
      <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>{hero[0].heroTitle}</h1>
        <p>{hero[0].heroSubPost}</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            {hero[0].heroPrimary}
           </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
              {hero[0].heroOutline}
            <FiSend/>
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  