import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
// import { Home } from "../../pages/Home";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
// import Button from "../Button/Button";

export const NavBar = () => {
    return (
        <Navbar className='navbar fixed-top' collapseOnSelect expand="lg" bg="" variant="dark">
        <Navbar.Brand href="#home" className='navbar-logo'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='nav-link' href="#features">Features</Nav.Link>
            <Nav.Link className='nav-link' href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
          <Button
            className='btn'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
           WATCH TRAILER 
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
