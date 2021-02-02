import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection/ContactHero/ContactHero'
import Footer from '../components/Footer/Footer'
// import ContactHero from '../components/HeroSection/ContactHero.json'
import ContactBody from '../components/Contact/ContactBody/ContactBody'
// import ContactForm from '../components/Contact/ContForm'

export const Contact = () => {
    return (
        <>
          <HeroSection/>
          <br></br>
          <ContactBody/>
          <br></br>
          <Footer/>
        </>
    )
}

export default Contact
