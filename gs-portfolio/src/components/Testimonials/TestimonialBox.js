import React from "react";
import "./TestimonialBox.css";
import { BiBoltCircle } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";

const TestimonialBox = (props) => {
  return (
      <>
    <div className='testCard'>
    <p>
        {props.Paragraph}
      </p>
        <Row>
            <Col sm={1}>
            <h2><BiBoltCircle/></h2>
            </Col>
            <Col sm={11}>
            <h3>{props.Title}</h3>
            <h6>{props.subTitle}</h6>
            </Col>
        </Row>
    </div>
    </>
  );
};

export default TestimonialBox;
