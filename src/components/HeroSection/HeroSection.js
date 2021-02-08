import React from 'react'
import Button from '../Button/Button'
import { FiSend } from "react-icons/fi";
import './HeroSection.css'
import '../../App.css'
import { Link } from 'react-router-dom';


function HeroSection(props) {
  const { Title, Paragraph, PrimaryBtn, OutlineBtn} = props
    return (
      <div className='hero-container'>
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
          >
              {OutlineBtn}
            <FiSend/>
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  