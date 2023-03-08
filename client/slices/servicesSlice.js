import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllServices = createAsyncThunk("services", async () => {
	try {
		const { data } = await axios.get("/api/services");
		return data;
	} catch (error) {
		console.log(error);
	}
});

const servicesSlice = createSlice({
	name: "services",
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllServices.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const selectServices = (state) => {
	return state.services;
};

export default servicesSlice.reducer;
