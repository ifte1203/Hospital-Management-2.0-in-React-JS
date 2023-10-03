import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = sessionStorage.getItem("token");
console.log(token);

export const getCountry = createAsyncThunk(
  "country",
  async (rejectWithValue) => {
    // console.log('country');
    try {
      const response = await axios.get(
        `http://13.127.113.130:3005/api/common/countries-list`
      );
      // console.log(response);
      if (response.data.code === 2000) {
        // console.log(response.data.data);
        return response.data.data;
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      return rejectWithValue(error);
    }
  }
);
export const getState = createAsyncThunk(
  "state",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://13.127.113.130:3005/api/common/states-list/${id}`
      );
      // console.log(response);
      if (response.data.code === 2000) {
        // console.log(response.data.data);
        return response.data.data;
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      return rejectWithValue(error);
    }
  }
);
export const getCity = createAsyncThunk(
  "city",
  async (id, { rejectWithValue }) => {
    // alert(id);
    try {
      const response = await axios.get(
        `http://13.127.113.130:3005/api/common/city-list/${id}`
      );
      console.log(response);
      if (response.data.code === 2000) {
        // console.log(response.data.data);
        return response.data.data;
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  country: [],
  state: [],
  city: [],
  loading: false,
  error: null,
};

export const locationSlice = createSlice({
  name: "countryStateCity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.country = action.payload;
        state.error = null;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getState.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getState.fulfilled, (state, action) => {
        state.loading = false;
        state.state = action.payload;
        state.error = null;
      })
      .addCase(getState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCity.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.loading = false;
        state.city = action.payload;
        state.error = null;
      })
      .addCase(getCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default locationSlice.reducer;