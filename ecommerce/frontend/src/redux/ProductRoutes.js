import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
export const getSearch = createAsyncThunk("get/getSearch", async (name) => {
  try {
    const { data } = await axios.post(`http://localhost:5000/search/${name}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getProduct = createAsyncThunk("get/getProduct",async (id)=>{
    try {
        const {data} = await axios.get(`http://localhost:5000/product/${id}`)
        return data
    } catch (error) {
        console.log(error);
    }
})

export const getCart = createAsyncThunk("get/getCart",async (id)=>{
    try {
        const {data} = await axios.post(`http://localhost:5000/cart`)
        return data
    } catch (error) {
        console.log(error);
    }
})

export const addToCart = createAsyncThunk("get/addToCart",async (formData)=>{
  // console.log(formData);
try {
  const {data} = await axios.post("http://localhost:5000/cart/add",{product:formData},{withCredentials:true})
  console.log(data);
  return data
  
} catch (error) {
  console.log(error);
}
})