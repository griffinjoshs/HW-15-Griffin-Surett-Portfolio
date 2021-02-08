import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import './ContactInfo.css'
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div>
            <Container fluid className='contactInfo'>
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h2 className='homeH2'>Contact Me</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            </Container>
            <Container fluid className='contactCards'>
            <Row>
            <Col md={12} lg={1} ></Col>
            <Col md={12} lg={4} className='contactBox' onClick='/contact'>
            <div className='callIcon'><BsPhone/></div> 
            <br></br>
            <div className='contactContent'>
            <h2>Text Me</h2>
            <br></br>
            <p>‪(732) 455-9509‬</p>
            </div>
            </Col>
            <Col md={12} lg={2} ></Col>
            <Col md={12} lg={4} className='contactBox' onClick='/contact'>
            <div className='callIcon'><MdEmail/></div> 
            <br></br>
            <div className='contactContent'>
            <h2>Email Me</h2>
            <br></br>
            <p>griffinjoshs99@gmail.com</p>
            </div>
            </Col>
            <Col md={12} lg={1} ></Col>
            </Row>
            <br></br>
        <br></br>
        <br></br>
        <br></br>
            </Container>
        </div>
    )
}

export default ContactInfo
