import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
// import Button from '../Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export const FourIconSec = () => {
    return (
        <>
        <Container>
            <Row>
                <Col sm={12} md={3}>
                <div className="card" onClick="https://www.patreon.com/griffinjoshs">
                        <br></br>
                        <i className="boxIcon"></i>
                            <br></br>
                            <h3 className="boxHeader">Patreon</h3>
                            <br></br>
                            <p>For those who really support me, if you would like to get the best from me possible, join my Patreon Community. You will get free Merchandise as well as access to unposted and removed videos!</p>
                            <br></br>
                            {/* <div className="cardBtn" href="https://www.patreon.com/griffinjoshs">Learn More </Button>                            <br></br> */}
                        </div>
                </Col>
                <Col sm={12} md={3}>
                    
                </Col>
                <Col sm={12} md={3}>

                </Col>
                <Col sm={12} md={3}>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FourIconSec;
