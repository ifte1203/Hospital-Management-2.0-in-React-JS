import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginHandle = createAsyncThunk(
    "auth/Handle",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          "http://13.127.113.130:3005/api/auth/login",
          data
        );
  
        if (response.data.code === 2000) {
        //   alert('Login successful');
        sessionStorage.setItem('token',response.data.data.access_token);
         console.log(response.data.data.token);
          return response.data.data;

        } else {
            // alert('Login failed');
            if(response.data.code === 3000){
                console.error("error:", response.data.error);
                return rejectWithValue(response.data.error);
            }
            console.error("error:", response.data.error);
            // return rejectWithValue(response.data.error.message);
        }
      } catch (error) {
        console.error("An error occurred during login:", error.message);
        return rejectWithValue(error.message);
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
  reducers: {},
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
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default authSlice.reducer;