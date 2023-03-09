import React, { useEffect }  from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import FullPage from "./Fullpage";
import RegisterForm from "../lists/RegisterForm";
import Dashboard from "./Dashboard";
import Login from "../lists/Login";
import { me } from "../slices/authSlice";
import Portfolio from "./Portfolio";
import About from "./About";
import Services from "./Services";

const Main = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.id)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(me())
	  }, [])
	console.log(isLoggedIn)
	return (
		<div>
			{isLoggedIn ? (
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/" element={<FullPage />} />
				</Routes>
				) : (
				<Routes>
					<Route path="/" element={<FullPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<RegisterForm />} />
					<Route path="/services" element={<Services />} />
					<Route path="portfolio" element={<Portfolio/>} />
					<Route path="/about" element={<About />} />
				</Routes>
			)}
		</div>
	);
};

export default Main;
