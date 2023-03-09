import React, { useEffect }  from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import FullPage from "./Fullpage";
import RegisterForm from "../lists/RegisterForm";
import Dashboard from "./Dashboard";
import Login from "../lists/Login";
import { me } from "../slices/authSlice";
import Portfolio from "./Portfolio";

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
					<Route path="portfolio" element={Portfolio} />
					<Route path="/about" element={Portfolio} />
				</Routes>
			)}
		</div>
	);
};

export default Main;
