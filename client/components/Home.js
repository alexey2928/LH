import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row, Container } from "react-bootstrap";

const Home = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.id)
	const navigate = useNavigate()
	return (
		<Container fluid id="home">
			<Row>
				<Col>
					<h1 className="header">Welcome to LH Studio</h1>
						{isLoggedIn ? (
							<div>
							<Button className="btn"
							onClick={() => navigate("/booking")}>
							BOOK NOW
							</Button>
							<Button>
								<Link to="https://www.instagram.com/makeup_lilgri" className="link">FOLLOW ME</Link>
							</Button>
							</div>
						) : (
							<Button>
								<Link to="https://www.instagram.com/makeup_lilgri" className="link">FOLLOW ME</Link>
							</Button>
						)}
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
