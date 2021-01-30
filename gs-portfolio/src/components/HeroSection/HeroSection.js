import React from 'react'
import Button from '../Button/Button'
import { FiSend } from "react-icons/fi";
import './HeroSection.css'
import '../../App.css'
// import Video from '../../videos/video-2.mp4'

function HeroSection() {
    return (
      <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Hi, I am Griffin Surett</h1>
        <p>Welcome To my digital home!!</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Learn More
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
           Contact <FiSend/>
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  