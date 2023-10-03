import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = () => {
  let token = sessionStorage.getItem('token');
  return token;
}

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
                    getToken(),
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
                  getToken(),
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
              getToken(),
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
            getToken(),
          },
        });

        console.log(response.data.data);
        return response.data.data;
      }catch(error){
        console.log('An error occured', error);
      }
    }
  )

  export const updateAvailability = createAsyncThunk(
    "clinic/updateAvailability",
    async ({data, id}, { rejectWithValue }) => {
      console.log(data, id);
      try {
        const response = await axios.put(
          `http://13.127.113.130:3005/api/clinics/update-availability?clinicId=${id}`,
          data,
          {
            headers: {
              "x-authentication-token":
              getToken(),
            },
          }
        );
        // console.log(response);
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

  export const deleteAvailability = createAsyncThunk(
    "clinic/deleteAvailability",
    async ({id, data}, { rejectWithValue }) => {
      console.log('id: ',id, ' data: ', data);
      try {
        const response = await axios.delete(
          `http://13.127.113.130:3005/api/clinics/delete-availability/${id}`,
          {
            headers: {
              "x-authentication-token": getToken(),
            },
            data: data, // Your data object should be inside the config object
          }
        );
        console.log(response);
        // if (response.data.code === 2000) {
        //   console.log(response.data.data);
        //   return response.data.data;
        // }
      } catch (error) {
        console.error("An error occurred ", error);
        return rejectWithValue(error);
      }
    }
  );

  export const updateContact = createAsyncThunk(
    "clinic/updateContact",
    async ({data, id}, { rejectWithValue }) => {
      // console.log('id: ', id,' data: ',data);
      try {
        const response = await axios.put(
          `http://13.127.113.130:3005/api/clinics/update-contact?clinicId=${id}`,
          data,
          {
            headers: {
              "x-authentication-token":
              getToken(),
            },
          }
        );
        // console.log(response);
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

  export const deleteContact = createAsyncThunk(
    "clinic/deleteContact",
    async (id, { rejectWithValue }) => {
      console.log('id: ',id);
      try {
        const response = await axios.delete(
          `http://13.127.113.130:3005/api/clinics/delete-contact?contactId=${id}`,
          {
            headers: {
              "x-authentication-token": getToken(),
            },
          }
        );
        console.log(response);
        // if (response.data.code === 2000) {
        //   console.log(response.data.data);
        //   return response.data.data;
        // }
      } catch (error) {
        console.error("An error occurred ", error);
        return rejectWithValue(error);
      }
    }
  );

const initialState = {
  clinicDetail: [],
  clinic:[],
  loading: false,
  error: null,
  isAuthenticated: false,
  success: false,
  deleted: false,
  updatedAvailability: false,
  deletedAvailability: false,
  updatedContact: false,
  deletedContact: false,
};



export const clinicSlice = createSlice({
  name: "clinicDetail",
  initialState,
  reducers: {
    resetSuccess: (state) => {
      state.success = false;
    },
  },
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
        state.deleted = true;
      })
      .addCase(deleteClinic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAvailability.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAvailability.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedAvailability = true;
      })
      .addCase(updateAvailability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAvailability.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAvailability.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedAvailability = true;
      })
      .addCase(deleteAvailability.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateContact.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedContact = true;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedContact = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { resetSuccess } = clinicSlice.actions;

export default clinicSlice.reducer;