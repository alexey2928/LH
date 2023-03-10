import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { fetchAllApps, selectApp } from "../slices/bookingSlice";


const BookingList = () => {
	const dispatch = useDispatch();

	const apps = useSelector(selectApp);

	useEffect(() => {
		dispatch(fetchAllApps());
	}, [dispatch]);

	if (!apps.length) return "Loading. Please wait";

	return (
		<Container>
      		<Row s={2} lg={{span:3, offset: 3 }}>
			{apps.map((app) => (
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>{app.Service.name}</Card.Title>
						<Card.Img variant="top" src={app.Service.image} />
						<Card.Text>${app.Service.price}.00</Card.Text>
					</Card.Body>
				</Card>
			))}
		 	</Row>
    	</Container>
	);
};

export default BookingList;