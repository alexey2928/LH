import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./client/slices/authSlice";
import servicesSlice from "./client/slices/servicesSlice";
import usersSlice from "./client/slices/usersSlice";

const store = configureStore({
	reducer: {
		services: servicesSlice,
		users: usersSlice,
		auth: authSlice
	},
});

export default store;
export * from "./client/slices/authSlice";