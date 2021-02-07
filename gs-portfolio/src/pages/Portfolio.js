import React from 'react'
import OtherHero from '../components/HeroSection/OtherHero/OtherHero'
import Hero from '../components/HeroSection/OtherHero/OtherHero.json'
import FlipBoxesSec from '../components/Portfolio/FlipBoxes/FlipBoxesSec'


export const Portfolio = () => {
    return (
        <div className='contactPage'>
          <OtherHero
          Header={Hero[1].Header}
          SubHeader={Hero[1].SubHeader}/>
          <br></br>
          <FlipBoxesSec/>
        </div>
    )
}

export default Portfolio
