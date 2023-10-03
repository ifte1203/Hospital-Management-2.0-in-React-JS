import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { persistor } from "../store";

export const loginHandle = createAsyncThunk(
  "auth/Handle",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://13.127.113.130:3005/api/auth/login",
        data
      );
      console.log(response);
      sessionStorage.setItem("token", response.data.data.access_token);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
      throw error;
    }
  }
);
const initialState = {
  user: {},
  loading: false,
  error: null,
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginHandle.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginHandle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(loginHandle.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;