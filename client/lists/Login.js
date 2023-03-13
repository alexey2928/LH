import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateLogin } from "../slices/authSlice";
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [formError, setFormError] = useState("");
	const { error } = useSelector((state) => state.auth);

	const dispatch = useDispatch()


	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (email === "") {
			setFormError("Email must be filled out");
			return;
		}
		if (password === "") {
			setFormError("Password must be filled out");
			return;
		}
		dispatch(authenticateLogin(email, password));
		setEmail("");
		setPassword("");
	  };

	return (
		<Container>
		<div className="d-flex align-items-center justify-content-center">
		<Card style={{width: "50%"}} id="loginRegister">
			<Card.Body>
			<Card.Title className="title">Login</Card.Title>
		<Form onSubmit={handleSubmit} name="login" className="form">
			<Form.Group controlId="email">
			<Form.Label>Email</Form.Label>
				<Form.Control
					className="formInput"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId="password">
			<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>
			{formError && <p style={{ color: "red" }}>{formError}</p>}
			<br></br>
			<Button variant="primary" type="submit" className="btn">
        		Login
      		</Button>
			{error && error.response && <div> {error.response.data} </div>}
		</Form>
		</Card.Body>
		</Card>
		</div>
		</Container>
	);
}

export default Login;
