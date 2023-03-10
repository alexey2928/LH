import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./client/slices/authSlice";
import bookingSlice from "./client/slices/bookingSlice";
import servicesSlice from "./client/slices/servicesSlice";
import singleServiceSlice from "./client/slices/singleServiceSlice";
import usersSlice from "./client/slices/usersSlice";

const store = configureStore({
	reducer: {
		service: singleServiceSlice,
		services: servicesSlice,
		user: usersSlice,
		auth: authSlice,
		app: bookingSlice
	},
});

export default store;
export * from "./client/slices/authSlice";