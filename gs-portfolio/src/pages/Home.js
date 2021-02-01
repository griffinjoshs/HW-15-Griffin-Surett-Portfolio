import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection/HeroSection'
import FourIconSec from '../components/FourIconSec/FourIconSec'
import HomeCardSec from '../components/HomeCardSec/HomeCardSec'
import TestimonialCard from '../components/HomeTestSec/HomeTestSec' 
import Footer from '../components/Footer/Footer'
import hero from '../../src/components/HeroSection/hero.json'


export const Home = () => {
    return (
        <>
          <HeroSection 
          Title={hero[0].heroTitle}
          Paragraph={hero[0].heroSubPost}
          PrimaryBtn={hero[0].heroPrimary}
          OutlineBtn={hero[0].heroOutline}
          />
          <FourIconSec />
          <HomeCardSec />
          <TestimonialCard/>
          <Footer/>
        </>
    )
}
