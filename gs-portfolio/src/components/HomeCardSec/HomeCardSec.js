import React from "react";
import CardBox from "../Card/Card";
import { Container, Col, Row } from "react-bootstrap";
import CardContent from "../HomeCardSec/HomeCardContent.json";
import { CgWebsite } from "react-icons/cg";
import { AiFillLike } from "react-icons/ai";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaPhotoVideo, FaSearchengin } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import "./HomeCardSec.css";

const HomeCardSec = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="cardHead">
        {" "}
        <h2 className="homeH2">{CardContent[6].Header}</h2>
        <h5 id="cardH5">{CardContent[6].SubHeader}</h5>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <Col md={12} lg={4} className="iconCard">
            <CardBox
              Icon={<CgWebsite />}
              Title={CardContent[0].Title}
              Description={CardContent[0].Description}
            />
          </Col>
          <Col md={12} lg={4} className="iconCard">
            <CardBox
              Icon={<AiFillLike />}
              Title={CardContent[1].Title}
              Description={CardContent[1].Description}
            />
          </Col>
          <Col md={12} lg={4}>
            <CardBox
              Icon={<FaSearchengin />}
              Title={CardContent[2].Title}
              Description={CardContent[2].Description}
            />
          </Col>
        </Row>
        <div className="boxRowSpace"></div>
        <Row>
          <Col md={12} lg={4}>
            <CardBox
              Icon={<FaPhotoVideo />}
              Title={CardContent[3].Title}
              Description={CardContent[3].Description}
            />
          </Col>
          <Col md={12} lg={4}>
            <CardBox
              Icon={<RiAdvertisementFill />}
              Title={CardContent[4].Title}
              Description={CardContent[4].Description}
            />
          </Col>
          <Col md={12} lg={4}>
            <CardBox
              Icon={<HiOutlineSparkles />}
              Title={CardContent[5].Title}
              Description={CardContent[5].Description}
            />
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default HomeCardSec;
