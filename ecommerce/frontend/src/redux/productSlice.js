import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart, getProduct, getSearch } from "./ProductRoutes";

const initialState = {
  products: [],
  product: {},
  cart: [],
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.cart = [...state.cart,action.payload]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload?.products;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart = action.payload?.products;
    });
  },
});
export const {setProduct} = productReducer.actions
export default productReducer.reducer;
