import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateLogin } from "../slices/authSlice";

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
		<form onSubmit={handleSubmit} name="login">
			<div>
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			{formError && <p style={{ color: "red" }}>{formError}</p>}
			<button type="submit">Login</button>
			{error && error.response && <div> {error.response.data} </div>}
		</form>
	);
}

export default Login;
