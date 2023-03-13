import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addAppAsync } from '../slices/bookingSlice';
import { selectServices, fetchAllServices } from '../slices/servicesSlice';
import { fetchOneUserAsync, selectUser } from '../slices/usersSlice';

function BookingForm() {
    const {id} = useSelector((state) => state.auth);
    const user = useSelector(selectUser);
  
    const [start_time, setStartTime] = useState('');
    const [ServiceId, setServiceId] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const services = useSelector(selectServices)

    useEffect(() => {
        dispatch(fetchAllServices());
        dispatch(fetchOneUserAsync(id))
    }, [dispatch, id]);

    const today = new Date();
    const currentHour = today.getHours();

    const availableHours = [];
    for (let i = 9; i < 17; i++) {
    if (i > currentHour) {
        availableHours.push(i);
    }
    }

    if (!services.length) return "Loading. Please wait";
    if (!user) return "Loading. Please wait";

    const handleSubmit = (e) => {
        e.preventDefault();
		dispatch(addAppAsync({UserId:user.id, ServiceId:ServiceId, name:user.fullName, email:user.email, phoneNumber:user.phoneNumber, start_time:start_time}));
        navigate("/dashboard")
		setName("");
		setEmail("");
        setPhoneNumber("")
		setStartTime("");
		setServiceInfo("");
    };



    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center">
		    <Card style={{width: "50%"}} id="loginRegister">
			<Card.Body>
				<Card.Title className="title">Register</Card.Title>
        <Form onSubmit={handleSubmit} size="sm">
        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={user.fullName} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={user.email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" value={user.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="datetime">
            <Form.Label>We work from 9am to 5pm</Form.Label>
            <Form.Control type="datetime-local" min={`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T09:00`} max={`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T17:00`} value={start_time} onChange={(e) => setStartTime(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="service">
            <Form.Label>Service</Form.Label>
            <Form.Control as="select" value={ServiceId} onChange={(e) => setServiceId(e.target.value)}>
            <option value="">Select a service</option>
            {services.map((service) => (
            <option key={service.id} value={service.id}> {service.name} ${service.price}.00 {service.duration}min</option>
            ))}
            </Form.Control>
        </Form.Group>
        <br></br>
        <Button type="submit" onClick={handleSubmit} >Book Now</Button>
        </Form>
        </Card.Body>
		</Card>
		</div>
        </Container>
    );
}

export default BookingForm;
//disabled={ !availableHours.includes(parseInt(datetime.slice(11, 13), 10))}