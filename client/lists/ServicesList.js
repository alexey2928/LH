import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectServices, fetchAllServices } from "../slices/servicesSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
		<Container>
      		<Row s={2} lg={{span:3, offset: 3 }}>
			{services.map((service) => (
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>{service.name}</Card.Title>
						<Card.Img variant="top" src={service.image} />
						<Card.Text>${service.price}.00</Card.Text>
						{isLoggedIn ? (
							<Button variant="primary" 
								onClick={() => navigate("/booking")}>
								Book
							</Button>

						) : (
							<Link
								to="/login">
								Login to Book
							</Link>
						)}
					</Card.Body>
				</Card>
			))}
		 	</Row>
    	</Container>
	);
};

export default ServicesList;
