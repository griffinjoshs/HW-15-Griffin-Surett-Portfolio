import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./HomeParallax.css";
import { FaPatreon } from "react-icons/fa";
import Button from "../Button/Button";

const HomeParallax = () => {
  return (
    <div>
      <section className="parallax">
        <Container>
          <br></br>
          <Row className="parallaxRow">
            <Col lg={2}></Col>
            <br></br>
            <br></br>
            <Col md={12} lg={8}>
              <h2 id="paraTitle">
                <strong>What Can I Do For You?</strong>
              </h2>
              <br></br>
              <p className="parallaxGraph">
                My Goal Is To Help You Expand Your Business And Help You Use
                This New Online Marketplace For Your Business's Gain!
              </p>
              <br></br>
              <Button
                type="button"
                id="paraButton"
                href="#"
                className="btn"
              >
                Learn More
              </Button>
              <br></br>
              <br></br>
              {/* <img src={Me} alt="star" text-align="center" id="Image"></img> */}
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomeParallax;
