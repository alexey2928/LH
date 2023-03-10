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
    <Navbar bg="light" expand="xxl" sticky="top">
      {isLoggedIn ? (
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/" className="justify-content-center">LH STUDIO</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Button href="/" onClick={() => dispatch(logout())}>Log Out</Button>
          </Nav>
          <Nav justify variant="tabs" className="justify-content-end" activeKey="/home">
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      ) :(

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/" className="justify-content-center">LH STUDIO</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          <Nav justify variant="tabs" className="justify-content-end" activeKey="/home">
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      )}
    </Navbar>
  );
}

export default NavBar;

