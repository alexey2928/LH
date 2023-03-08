import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const [error, setError] = useState("");
	const [user, setUser] = useState(localStorage.getItem("user") || "");

	const handleLogin = (token, user) => {
		localStorage.setItem("token", token);
		setToken(token);
		localStorage.setItem("user", user);
		setUser(user);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		setToken("");
		localStorage.removeItem("user");
		setUser("");
	};

	useEffect(() => {
		const fetchProtectedData = async () => {
			try {
				const response = await axios.get("/api/dashboard", {
					headers: { Authorization: `Bearer ${token}` },
				});
				console.log(response);
			} catch (err) {
				setError(err.response.data.message);
			}
		};

		if (token && user) {
			fetchProtectedData();
		}
	}, [token, user]);

	return (
		<div>
			{token ? (
				<>
					<p>{user}, You are logged in </p>
					<button onClick={handleLogout}>Logout</button>
					{error && <p>{error}</p>}
				</>
			) : (
				<LoginForm onLogin={handleLogin} />
			)}
		</div>
	);
}

function LoginForm({ onLogin }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("/api/login", { email, password });
			const token = response.data.token;
			const user = response.data.user;
			console.log(user);
			onLogin(token, JSON.stringify(user.fullName));
		} catch (err) {
			setError(err.response.data.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email:</label>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button type="submit">Login</button>
			{error && <p>{error}</p>}
		</form>
	);
}

export default Login;
