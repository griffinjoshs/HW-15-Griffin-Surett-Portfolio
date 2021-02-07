import React from 'react'
import '../HeroSection.css'
// import Hero from './OtherHero.json'

const ContactHero = (props) => {
    const { Header, SubHeader } = props
    return (
        <div>
            <div className='hero-container otherHero'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h1>{Header}</h1> 
    <h5>{SubHeader}</h5> 
    <br></br>
    <br></br>
    <br></br>   
      </div>
        </div>
    )
}

export default ContactHero
