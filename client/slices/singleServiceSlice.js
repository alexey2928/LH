import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchOneServiceAsync = createAsyncThunk(
	'services/fetchOne',
	async (id) => {
	  try {
		const { data } = await axios.get(`/api/services/${id}`)
		return data
	  } catch (e) {
		console.log(e)
	  }
	}
)

const singleServiceSlice = createSlice({
	name: "service",
	initialState: {},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchOneServiceAsync.fulfilled, (state, action) => {
			return action.payload
		})
	},
});



export const selectSingleService = (state) => {
	return state.service;
};

export default singleServiceSlice.reducer;