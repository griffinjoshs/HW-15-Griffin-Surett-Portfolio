import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
// import Button from '../Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './FourIconBox/FourIconBox'
import './FourIconSec.css'
import SkillContent from './FourIcon.json'
import { CgWebsite } from "react-icons/cg";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { RiAdvertisementFill } from "react-icons/ri";

export const FourIconSec = () => {
    return (
        <div id="iconContainer">
        <Container>
            <Row>
                <Col sm={12} md={3}>
                    <Box
                    icon={<CgWebsite/>}
                    skill={SkillContent[0].skill}/>
                </Col>
                <Col sm={12} md={3}>
                    <Box
                    icon={<HiOutlinePencilAlt/>}
                    skill={SkillContent[1].skill}/>
                </Col>
                <Col sm={12} md={3}>
                    <Box
                    icon={<AiFillLike/>}
                    skill={SkillContent[2].skill}/>
                </Col>
                <Col sm={12} md={3}>
                    <Box
                    icon={<RiAdvertisementFill/>}
                    skill={SkillContent[3].skill}/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default FourIconSec;
