import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-light bg-light"
				id="navbar"
			>
				<div className="container-fluid">
					<div id="account">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/register">
									Register
								</Link>
							</li>
						</ul>
					</div>

					<div id="brand">
						<a href="#home" className="navbar-brand">
							LH Studio
						</a>
					</div>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#services">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#portfolio">
									Portfolio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
