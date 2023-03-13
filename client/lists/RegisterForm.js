import React, { useState } from "react";
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { authenticateRegister } from "../slices/authSlice";
import { addUserAsync } from "../slices/usersSlice";

const RegisterForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName === "") {
			setError("First name must be filled out");
			return;
		}
		if (lastName === "") {
			setError("Last name must be filled out");
			return;
		}
		if (phoneNumber === "") {
			setError("Last name must be filled out");
			return;
		}
		if (password === "") {
			setError("Password must be filled out");
			return;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		if (email === "") {
			setError("Email must be filled out");
			return;
		}
		dispatch(authenticateRegister(firstName,lastName,email,phoneNumber,password));
		setFirstName("");
		setLastName("");
		setEmail("");
		setPhoneNumber("")
		setPassword("");
		setConfirmPassword("");//
	};

	return (
		<Container>
		<div className="d-flex align-items-center justify-content-center">
		<Card style={{width: "50%"}} id="loginRegister">
			<Card.Body>
				<Card.Title className="title">Register</Card.Title>
		<Form onSubmit={handleSubmit}>
			{/* <Form.Header>Hello, Please Register</Form.Header> */}
			<Form.Group controlId="firstName">
			<Form.Label>First Name</Form.Label>
			<Form.Control
				//placeholder="first name"
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			</Form.Group>
			<Form.Group controlId="lastName">
			<Form.Label>Last Name</Form.Label>
			<Form.Control
				//placeholder="last name"
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			</Form.Group>
			<Form.Group controlId="email">
			<Form.Label>Email address</Form.Label>
			<Form.Control
				//placeholder="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			</Form.Group>
			<Form.Group controlId="phoneNumber">
			<Form.Label>Phone Number</Form.Label>
			<Form.Control
				placeholder="10 digit phone number"
				type="tel"
				value={phoneNumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>
			</Form.Group>
			<Form.Group controlId="password">
			<Form.Label>Password</Form.Label>
			<Form.Control
				//placeholder="password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			</Form.Group>
			<Form.Group controlId="confirmPassword">
			<Form.Label>Confirm Password</Form.Label>
			<Form.Control
				//placeholder="confirm password"
				type="password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			</Form.Group>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<br></br>
			<Button type="submit">
        		Register
      		</Button>
			<Link to="/login" className="link">Don't have an account?</Link>
		</Form>
		</Card.Body>
		</Card>
		</div>
		</Container>
	);
};

export default RegisterForm;
