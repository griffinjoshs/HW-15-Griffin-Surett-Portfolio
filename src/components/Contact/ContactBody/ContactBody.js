import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "../ContForm";
import SideForm from "./SideForm/SideForm";

const ContactBody = () => {
  return (
    <>
      <Container>
        <Row>
            <br></br>
            <br></br>
            <Col md='12' lg='5'>
            <SideForm/>
            </Col>
            <Col lg='1'></Col>
            <Col md='12' lg='6'>
            <ContactForm/>
            </Col>
            <br></br>
            <br></br>
        </Row>
      </Container>
    </>
  );
};

export default ContactBody;
