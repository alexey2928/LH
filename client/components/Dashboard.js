import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import AdminProfile from "./AdminProfile";

const Dashboard = () => {
	const { role } = useSelector((state) => state.auth);
	return (
	<div>  
        {role === "admin" ? <AdminProfile /> : <UserProfile />}
	</div>)
};

export default Dashboard;
