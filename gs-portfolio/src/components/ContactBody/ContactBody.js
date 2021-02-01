import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ContactForm from './ContactForm/ContactForm';

const ContactBody = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <ContactForm/>
                    </Col>
                    <Col>
                    <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactBody
