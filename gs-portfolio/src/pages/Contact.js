import React from 'react'
import '../App.css'
import './styles/Contact.css'
import OtherHero from '../components/HeroSection/OtherHero/OtherHero'
import ContactBody from '../components/Contact/ContactBody/ContactBody'
import Hero from '../components/HeroSection/OtherHero/OtherHero.json'


export const Contact = () => {
    return (
        <div className='contactPage'>
          <OtherHero
          Header={Hero[0].Header}/>
          <br></br>
          <ContactBody/>
          <br></br>
        </div>
    )
}

export default Contact
