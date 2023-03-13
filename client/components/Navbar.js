import React from "react";
import { useDispatch, useSelector} from "react-redux";

import { logout } from "../slices/authSlice";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";


function NavBar() {
	const isLoggedIn = useSelector((state) => !!state.auth.id)
  const dispatch = useDispatch()

  return (
    <Navbar id="navbar" sticky="top">
      {isLoggedIn ? (
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/" className="justify-content-center" className="link">LH STUDIO</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard" className="link">Dashboard</Nav.Link>
            <Button href="/" onClick={() => dispatch(logout())}>Log Out</Button>
          </Nav>
          <Nav justify variant="tabs" className="justify-content-end" activeKey="/home">
            <Nav.Link href="/services" className="link">Services</Nav.Link>
            <Nav.Link href="/portfolio" className="link">Portfolio</Nav.Link>
            <Nav.Link href="/about" className="link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      ) :(

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/" className="justify-content-center" className="link">LH STUDIO</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login" className="link">Login</Nav.Link>
            <Nav.Link href="/register" className="link">Register</Nav.Link>
          </Nav>
          <Nav justify variant="tabs" className="justify-content-end" activeKey="/home">
            <Nav.Link href="/services" className="link">Services</Nav.Link>
            <Nav.Link href="/portfolio" className="link">Portfolio</Nav.Link>
            <Nav.Link href="/about" className="link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      )}
    </Navbar>
  );
}

export default NavBar;

