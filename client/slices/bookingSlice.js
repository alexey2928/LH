import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAllApps = createAsyncThunk("apps", async () => {
	try {
		const { data } = await axios.get("/api/booking");
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const fetchOneAppAsync = createAsyncThunk(
	'apps/fetchOne',
	async (id) => {
	  try {
		const { data } = await axios.get(`/api/booking/${id}`)
		return data
	  } catch (e) {
		console.log(e)
	  }
	}
)

export const addAppAsync = createAsyncThunk(
	"addApp",
	async ({ UserId,ServiceId, name, email, phoneNumber, start_time}) => {
		try {
			const { data } = await axios.post("/api/booking", {
				UserId,
				ServiceId,
				name,
				email,
				phoneNumber,
				start_time,
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);


const bookingSlice = createSlice({
	name: "app",
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllApps.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(fetchOneAppAsync.fulfilled, (state, action) => {
			return action.payload
		})
		builder.addCase(addAppAsync.fulfilled, (state, action) => {
			state.push(action.payload);
		});
	},
});

export const selectApp = (state) => {
	return state.app;
};

export default bookingSlice.reducer;