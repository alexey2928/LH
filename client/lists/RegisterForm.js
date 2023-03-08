import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "../slices/usersSlice";

const RegisterForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
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
		dispatch(
			addUserAsync({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			})
		);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Hello, Please Register</h1>
			<input
				placeholder="first name"
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			></input>
			<input
				placeholder="last name"
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			></input>
			<input
				placeholder="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			></input>
			<input
				placeholder="password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			></input>
			<input
				placeholder="confirm password"
				type="password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			></input>

			{error && <p style={{ color: "red" }}>{error}</p>}
			<button type="submit">Submit</button>
		</form>
	);
};

export default RegisterForm;
