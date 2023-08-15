import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 export const handleLogin = createAsyncThunk('login',async(data,{rejectWithValue}) => {
    // try{

    // }
    // catch{

    // }
 }) 

 const initialState = {
    user:{},
    loading:false,
    error:null,
    isAuthenticated:false,
 };

 export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducer:{}
    extraReducer:(builder) => {
        builder.addCase(handleLogin.pending,(state,action) => {
            state.loading=true;
            state.error = null;
        })
        .addCase(handleLogin.fulfilled,(state,action) =>{
            state.loading=false;
            state.user = action.payload.user;
            state.error=null;
            state.isAuthenticated=true;
        })
        .addCase(handleLogin.rejected,(state,action) => {
            state.loading=false;
            state.loading = action.payload.message;
        })
    }
 })