import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
// import Button from '../Button/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./FourIconBox/FourIconBox";
import "./FourIconSec.css";
import SkillContent from "./FourIconContent";
// import { CgWebsite } from "react-icons/cg";
// import { HiOutlinePencilAlt } from "react-icons/hi";
// import { AiFillLike } from "react-icons/ai";
// import { RiAdvertisementFill } from "react-icons/ri";
// import { useEffect, useState } from 'react';

export const FourIconSec = () => {
  const [boxContent, setBoxContent] = useState(SkillContent);
  useEffect(() => {
    setBoxContent(SkillContent);
  }, []);
  return (
    <div id="iconContainer">
      <Container>
        <Row>
          {boxContent.map((box, i) => (
            <Col md={12} lg={3} key={box.id} className='iconBox'>
              <Box Icon={box.icon} Skill={box.skill} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FourIconSec;
