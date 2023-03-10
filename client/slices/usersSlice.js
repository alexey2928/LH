import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk("users", async () => {
	try {
		const { data } = await axios.get("/api/users");
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const fetchOneUserAsync = createAsyncThunk(
	'users/fetchOne',
	async (id) => {
	  try {
		const { data } = await axios.get(`/api/users/${id}`)
		return data
	  } catch (e) {
		console.log(e)
	  }
	}
  )

export const addUserAsync = createAsyncThunk(
	"addUser",
	async ({ firstName, lastName, email, password }) => {
		try {
			const { data } = await axios.post("/api/users", {
				firstName,
				lastName,
				email,
				password,
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

const usersSlice = createSlice({
	name: "users",
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(fetchOneUserAsync.fulfilled, (state, action) => {
			return action.payload
		  })
		builder.addCase(addUserAsync.fulfilled, (state, action) => {
			state.push(action.payload);
		});
	},
});

export const selectUser = (state) => {
	return state.user;
};

export default usersSlice.reducer;
