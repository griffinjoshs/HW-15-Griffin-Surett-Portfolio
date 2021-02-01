import React from 'react'
import Button from '../Button/Button'
import { FiSend } from "react-icons/fi";
import './HeroSection.css'
import '../../App.css'

// import Video from '../../videos/video-2.mp4'

function HeroSection(props) {
  const { Title, Paragraph, PrimaryBtn, OutlineBtn} = props
    return (
      <div className='hero-container'>
        {/* <video src='/videos/video-1.mp 4' autoPlay loop muted /> */}
        <h1>{Title}</h1>
        <p>{Paragraph}</p>
        <div className='hero-btns'>
          <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            {PrimaryBtn}
           </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
              {OutlineBtn}
            <FiSend/>
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  