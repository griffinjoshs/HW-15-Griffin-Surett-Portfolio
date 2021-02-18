import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css";
import Content from './nav.json'
import Button from '../Button/Button'
import Logo from '../../image/wpgriff.png'

const NavBar = () => {
    const NameCaps = Content[0].name.toUpperCase()
    return (
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className='Navbar fixed-top'>
          <img src={Logo} href='/' className='Navbar-logo' alt='logo' height='60px' width='60px'></img>
        <Navbar.Brand href="/" className='navbar-name'>{NameCaps}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav-menu">
          <Nav.Link className='nav-link' to="/">Home</Nav.Link>
            <div className='navSpace'></div>
            <Link className='nav-link' to="/contact">Contact</Link>
            <div className='navSpace'></div>
            <Link className='nav-link' to="/portfolio">Portfolio</Link>
            <div className='navSpace'></div>
          </Nav>
          <Nav>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--small'
            onClick={console.log('hey')}
          >
           Learn More 
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;
