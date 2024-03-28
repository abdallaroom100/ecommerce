import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk("user/signup", async (formData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/auth/signup",
      { formData },
      { withCredentials: true }
    );


    return data;
  } catch (error) {
    new Error(error);
    return error.response.data;
  }
});
export const login = createAsyncThunk("user/login", async (formData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/auth/login",
      { formData },
      { withCredentials: true }
    );


    return data;
  } catch (error) {
    new Error(error);
    return error.response.data;
  }
});
export const checkUser = createAsyncThunk("user/check", async (formData) => {
  try {
    const { data } = await axios.post("http://localhost:5000/auth/check", {
      withCredentials: true,
    });


    return data;
  } catch (error) {
    new Error(error);
    return error.response.data;
  }
});



export const logout = createAsyncThunk("user/logout",async ()=>{
  try {
    await axios.post("http://localhost:5000/auth/logout",{},{
      withCredentials:true
    })
    let user = {}
    return user
  } catch (error) {
    console.log(error);
  }
})