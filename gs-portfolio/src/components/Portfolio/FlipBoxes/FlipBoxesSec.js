import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./FlipBoxesSec.css";
import ButtonComp from '../../Button/Button'
// import Tipster from '../../../image/Tipster.png'
// import Radicalz from '../../../image/Radicalz.png'
// import CPATutoring from '../../../image/i-75-new-logo.png';


const FlipBoxes = () => {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <Container fluid className='portfolioContainer'>
        <Row>
          <Col md="4" sm="12">
          <div>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front" id='cpaFront'>
                </div>
                <div class="flip-box-back" id='cpaBack'>   
                <br></br>
                <br></br>               
                <br></br>
                <br></br>
                  <h2>i-75 CPA Review</h2>
                  <ButtonComp href='https://cpaexamtutoring.com/'>i-75 CPA Review</ButtonComp>
                </div>
              </div>
            </div>
        </div>
          </Col>
          <Col md="4" sm="12">
          <div>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front" id='radFront'>
                <br></br>
                <br></br>
                </div>
                <div class="flip-box-back" id='radBack'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Radical Gamez</h2>
                  <ButtonComp href='https://radicalgamezzz.herokuapp.com/'>Gamez</ButtonComp>                
                  </div>
              </div>
            </div>
        </div>
          </Col>
          <Col md="4" sm="12">
          <div>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front" id='tipFront'>
                </div>
                <div class="flip-box-back" id='tipBack'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Get Tipsy with Tipster</h2>
                  <ButtonComp href='https://radicalgamezzz.herokuapp.com/'>Tipster</ButtonComp>                
                </div>
              </div>
            </div>
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlipBoxes;
