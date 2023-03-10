import React, { useEffect }  from "react";
import { Route, Routes, Redirect, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import FullPage from "./Fullpage";
import RegisterForm from "../lists/RegisterForm";
import Dashboard from "./Dashboard";
import Login from "../lists/Login";
import PageNotFound from "./PageNotFound";
import { me } from "../slices/authSlice";
import Portfolio from "./Portfolio";
import About from "./About";
import Services from "./Services";
import BookingList from "../lists/bookingList";
import MyComponent from "./Date";
import BookingForm from "../lists/BookingForm";
import NewBooking from "../lists/newBooking";
import UpdateUser from "../lists/updateUserForm";
import ChangePass from "../lists/changePassForm";

const Main = () => {
	const isLoggedIn = useSelector((state) => !!state.auth.id)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(me())
	  }, [])
	return (
		<div>
			{isLoggedIn ? (
				<Routes>
					<Route path="/login" element={<Navigate to="/dashboard"/>} />
					<Route path="/register" element={<Navigate to="/dashboard"/>} />
					<Route path="/services" element={<Services />} />
					<Route path="portfolio" element={<Portfolio/>} />
					<Route path="/about" element={<About />} />
					<Route path="/*" element={<PageNotFound />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/" element={<FullPage />} />	
					<Route path="/booking" element={<BookingForm />} />	
					<Route path="/newbooking" element={< NewBooking />} />	
					<Route path="/update" element={< UpdateUser />} />	
					<Route path="/change_password" element={< ChangePass />} />	
				</Routes>
				) : (
				<Routes>
					<Route path="/" element={<FullPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<RegisterForm />} />
					<Route path="/services" element={<Services />} />
					<Route path="portfolio" element={<Portfolio/>} />
					<Route path="/about" element={<About />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			)}
		</div>
	);
};

export default Main;
