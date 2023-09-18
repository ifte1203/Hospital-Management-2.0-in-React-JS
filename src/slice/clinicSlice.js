import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = sessionStorage.getItem('token');
console.log(token);

  export const getClinics = createAsyncThunk(
    "clinic/getClinics",
    async (rejectWithValue) => {
        console.log('clinics listing');
        try {
            const response = await axios.get(
              `http://13.127.113.130:3005/api/clinics?enterpriseId=1`,
              {
                headers: {
                  "x-authentication-token":
                    token,
                },
              }
            );
            console.log(response);
            if (response.data.code === 2000) {
              console.log(response.data.data);
              return response.data.data;
            }
          }catch (error) {
            console.error("An error occurred during login:", error);
            return rejectWithValue(error);
          }
    } 
  );
  
  export const getclinicDetails = createAsyncThunk(
    "clinic/getClinicDetails",
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
              console.log(response.data.data);
              return response.data.data;
            }
          }catch (error) {
            console.error("An error occurred during login:", error);
            return rejectWithValue(error.message);
          }
    }
  );

  export const createClinic = createAsyncThunk(
    "clinic/createClinic",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          "http://13.127.113.130:3005/api/clinics/create",
          data,
          {
            headers: {
              "x-authentication-token":
                token,
            },
          }
        );
        console.log(response.data.data);
        if (response.data.code === 2000) {
          console.log(response.data.data);
          return response.data.data;
        }
      } catch (error) {
        console.error("An error occurred ", error);
        return rejectWithValue(error);
      }
    }
  );

  export const deleteClinic = createAsyncThunk(
    "clinic/deleteClinic",
    async (id, { rejectWithValue }) => {
      // alert(id);
      try{
        const response = await axios.delete(
          `http://13.127.113.130:3005/api/clinics/delete-contact?contactId=${id}`, {
          headers: {
            "x-authentication-token":
              token,
          },
        });

        console.log(response.data.data);
        return response.data.data;
      }catch(error){
        console.log('An error occured', error);
      }
    }
  )

const initialState = {
  clinicDetail: [],
  clinic:[],
  loading: false,
  error: null,
  isAuthenticated: false,
  success: false,
};



export const clinicSlice = createSlice({
  name: "clinicDetail",
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
        state.clinicDetail = action.payload;
        state.error = null;
      })
      .addCase(getclinicDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getClinics.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getClinics.fulfilled, (state, action) => {
        state.loading = false;
        state.clinic = action.payload;
        state.error = null;
      })
      .addCase(getClinics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createClinic.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createClinic.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createClinic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteClinic.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteClinic.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteClinic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clinicSlice.reducer;