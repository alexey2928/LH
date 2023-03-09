import React from "react";
import { logout } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";

const Dashboard = () => {
	const { firstName, } = useSelector((state) => state.auth);
	const dispatch = useDispatch()
	return (
	<div>
		<h1>Hello, {firstName} </h1>
		<Button href="/" onClick={() => dispatch(logout())}>
              Log Out
        </Button>
	</div>)
};

export default Dashboard;
