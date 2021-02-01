import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import ContactHero from '../components/HeroSection/ContactHero.json'
import ContactBody from '../components/ContactBody/ContactBody'

export const Contact = () => {
    return (
        <>
          <HeroSection 
          Title={ContactHero[0].Header}
          Paragraph={ContactHero[0].heroSubPost}
          />
          <ContactBody/>
          <Footer/>
        </>
    )
}

export default Contact
