import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectServices, fetchAllServices } from "../slices/servicesSlice";

import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


const ServicesList = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.id)
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const services = useSelector(selectServices);

	useEffect(() => {
		dispatch(fetchAllServices());
	}, [dispatch]);

	if (!services.length) return "Loading. Please wait";

	return (
		<Container fluid>
			<Row>
			{services.map((service) => (
				<Col xs={3} className="mb-5" key={service.id}>
				<Card style={{ width: '25rem', height: "33rem" }} className="text-center" id="services" spacing={3}>
					<Card.Img variant="top" src={service.image} style={{ width: "100%", height: "25rem", objectFit: "cover" }} />
					<Card.Body className="text-align-center">
						<Card.Title size="xxl">{service.name}</Card.Title>
						<Card.Text>${service.price}.00</Card.Text>
						{isLoggedIn ? (
							<Button className="btn"
								onClick={() => navigate("/booking")}>
								Book
							</Button>

						) : (
							<Link
								className="linkService"
								to="/login">
								Login to Book
							</Link>
						)}
					</Card.Body>
				</Card>
				</Col>
			))}
			</Row>
			</Container>
	);
};

export default ServicesList;
