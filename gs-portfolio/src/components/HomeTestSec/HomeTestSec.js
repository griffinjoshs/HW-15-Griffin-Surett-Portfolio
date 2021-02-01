import React from 'react'
import TestimonialCard from '../Testimonials/TestimonialBox'
import { Container, Row, Col } from "react-bootstrap";
import './HomeTestSec.css';
import Testimonial from './HomeTestSec.json'

const HomeTestSec = () => {
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Container>
        <h2 className='homeH2'>Testimonials</h2>
        <br></br>
        <br></br>

            <Row>
                <Col md={12} lg={6}>
                <TestimonialCard
                Paragraph = {Testimonial[0].Paragraph}
                Title = {Testimonial[0].Title}
                SubTitle = {Testimonial[0].SubTitle}
                />
                </Col>
                <Col md={12} lg={6}>
                <TestimonialCard
                Paragraph = {Testimonial[1].Paragraph}
                Title = {Testimonial[1].Title}
                SubTitle = {Testimonial[1].SubTitle}
                />
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </Container>
        </>
    )
}

export default HomeTestSec
