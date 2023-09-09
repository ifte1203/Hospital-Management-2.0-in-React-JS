import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('token');
console.log(token);
export const getclinicDetails = createAsyncThunk(
    "clinic/Handle",
    async (id, { rejectWithValue }) => {
        console.log(id);
        try {
            const response = await axios.get(
              `http://13.127.113.130:3005/api/clinics?clinicId=${id}`,
              {
                headers: {
                  "x-authentication-token":
                    token,
                },
              }
            );
            console.log(response.data.data);
            if (response.data.code === 2000) {
            //   setClinic(result.data.data);
            return response.data.data;
            }
          }catch (error) {
            console.error("An error occurred during login:", error.message);
            return rejectWithValue(error.message);
            }
    }
  );
  

const initialState = {
  clinic: [],
  loading: false,
  error: null,
  isAuthenticated: false,
};
export const clinicSlice = createSlice({
  name: "clinic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getclinicDetails.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getclinicDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.clinic = action.payload;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(getclinicDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default clinicSlice.reducer;