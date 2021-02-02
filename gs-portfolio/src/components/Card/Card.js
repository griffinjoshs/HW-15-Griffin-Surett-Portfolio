import React from "react";
import "./Card.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { BiRightArrowCircle } from "react-icons/bi";
const Card = (props) => {
    const { Title, Description, Icon } = props
  return (
    <>
      <Container>
        <Row id='cardRow'>
          <Col>
            <div className="card" id='serviceCard'>
              <br></br>
            <h2>{Icon}</h2>
              <br></br>
              <h3 className="boxHeader">
              {Title}​</h3>
              <br></br>
              <p>{Description}
              </p>
              <br></br>
              <Button
                className='btn' buttonStyle='btn--card'
                buttonSize='btn--medium'
                href="https://www.patreon.com/griffinjoshs"
              >
                Learn More <BiRightArrowCircle />{" "}
              </Button>{" "}
              <br></br>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
