import React from "react";
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
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LH STUDIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;