import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import TabsNav from "./TabsNav";

// const Navbar = () => {
// 	return (
// 		<div>
// 			<nav
// 				className="navbar navbar-expand-lg navbar-light bg-light"
// 				id="navbar"
// 			>
// 				<div className="container-fluid">
// 					<div id="account">
// 						<ul className="navbar-nav">
// 							<li className="nav-item">
// 								<Link className="nav-link" to="/login">
// 									Login
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link className="nav-link" to="/register">
// 									Register
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>

// 					<div id="brand">
// 						<a href="#home" className="navbar-brand">
// 							LH Studio
// 						</a>
// 					</div>

// 					<button
// 						className="navbar-toggler"
// 						type="button"
// 						data-bs-toggle="collapse"
// 						data-bs-target="#navbarNav"
// 						aria-controls="navbarNav"
// 						aria-expanded="false"
// 						aria-label="Toggle navigation"
// 					>
// 						<span className="navbar-toggler-icon"></span>
// 					</button>
// 					<div id="navbarNav">
// 						{/* <ul className="navbar-nav">
// 							<li className="nav-item">
// 								<a className="nav-link" href="#services">
// 									Services
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link" href="#portfolio">
// 									Portfolio
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link" href="#about">
// 									About
// 								</a>
// 							</li>
// 						</ul> */}
// 						<TabsNav />
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };

// export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="light" expand="xxl" fixed="top">
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
    </Navbar>
  );
}

export default NavBar;

