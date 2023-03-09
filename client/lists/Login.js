import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../slices/authSlice";

function Login() {
	const { error } = useSelector((state) => state.auth);

	const dispatch = useDispatch()


	const handleSubmit = (evt) => {
		evt.preventDefault();
		const method = evt.target.name;
		const email = evt.target.email.value;
    	const password = evt.target.password.value;
		console.log('COMPONENT', method, email, password)
		dispatch(authenticate(email, password, method));
	  };

	return (
		<form onSubmit={handleSubmit} name="login">
			<div>
				<label>Email:</label>
				<input
					type="text"
					name="email"
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					name="password"
				/>
			</div>
			<button type="submit">Login</button>
			{error && error.response && <div> {error.response.data} </div>}
		</form>
	);
}

export default Login;
