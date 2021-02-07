import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./FlipBoxesSec.css";
import ButtonComp from '../../Button/Button'
import Tipster from '../../../image/Tipster.png'
import Radicalz from '../../../image/Radicalz.png'
import CPATutoring from '../../../image/i75.png';

const imagesDb = [
  {
    id: 1,
    url: CPATutoring,
    backColor: 'teal',
    buttonUrl: 'https://cpaexamtutoring.com/'
  },
  {
    id: 2,
    url: Tipster,
    backColor: 'black',
    buttonUrl: ''
  },
  {
    id: 3,
    url: Radicalz,
    backColor: 'blue',
    buttonUrl: 'https://radicalgamezzz.herokuapp.com/'
  }
]

const FlipBoxes = () => {
  const [ images, setImages ] = useState([])

  useEffect(() => {
    setImages(imagesDb)
  },[])

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <Container fluid className='portfolioContainer'>
        <Row>
          {
            images.map((image, i) => (
              <Col md="4" sm="12" key={image.id}>
          <div>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div style={{background: `url(${image.url})`}} class="flip-box-front" id='cpaFront'>
                </div>
                <div class="flip-box-back" id='cpaBack'>   
                <br></br>
                <br></br>               
                <br></br>
                <br></br>
                  <h2>i-75 CPA Review</h2>
                  <ButtonComp href={image.buttonUrl}>i-75 CPA Review</ButtonComp>
                </div>
              </div>
            </div>
        </div>
          </Col>
            ))}
          
        {/* // //   <Col md="4" sm="12">
        // //   <div>
        // //     <div class="flip-box">
        // //       <div class="flip-box-inner">
        // //         <div class="flip-box-front" id='radFront'>
        // //         <br></br>
        // //         <br></br>
        // //         </div>
        // //         <div class="flip-box-back" id='radBack'>
        // //         <br></br>
        // //         <br></br>
        // //         <br></br>
        // //         <br></br>
        // //         <h2>Radical Gamez</h2>
        // //           <ButtonComp href='#'>Gamez</ButtonComp>                
        // //           </div>
        // //       </div>
        // //     </div>
        // // </div>
        // //   </Col>
        // //   <Col md="4" sm="12">
        // //   <div>
        // //     <div class="flip-box">
        // //       <div class="flip-box-inner">
        // //         <div class="flip-box-front" id='tipFront'>
        // //         </div>
        // //         <div class="flip-box-back" id='tipBack'>
        // //         <br></br>
        // //         <br></br>
        // //         <br></br>
        // //         <br></br>
        // //         <h2>Get Tipsy with Tipster</h2>
        // //           <ButtonComp href='https://radicalgamezzz.herokuapp.com/'>Tipster</ButtonComp>                
        // //         </div>
        // //       </div>
        // //     </div>
        // // </div>
        // //   </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default FlipBoxes;
