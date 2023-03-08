import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./client/slices/servicesSlice";
import usersSlice from "./client/slices/usersSlice";

const store = configureStore({
	reducer: {
		services: servicesSlice,
		users: usersSlice,
	},
});

export default store;
