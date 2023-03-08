import React from "react";
import { Route, Routes } from "react-router-dom";

import FullPage from "./Fullpage";
import RegisterForm from "../lists/RegisterForm";
import Dashboard from "./Dashboard";
import Login from "../lists/Login";

const Main = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<FullPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
};

export default Main;
