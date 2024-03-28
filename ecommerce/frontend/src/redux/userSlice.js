import { createSlice } from "@reduxjs/toolkit";
import { checkUser, login, logout, signUp } from "./userRoutes";
const initialState = {
  user: {},
  state: "",
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.state = false;
        state.error = "";
      });
      builder.addCase(signUp.rejected, (state, action) => {
        state.state = false;

        state.error = action.payload;
      });
      builder.addCase(signUp.fulfilled, (state, action) => {
        if (action.payload.email) {
          state.user = action.payload;
          state.state = true;
        } else {
          state.error = action.payload;
          state.state = false;
        }
      });
    builder
      .addCase(login.pending, (state, action) => {
        state.state = false;
        state.error = "";
      });
      builder.addCase(login.rejected, (state, action) => {
        state.state = false;
        state.error = action.payload;
      });
      builder.addCase(logout.fulfilled, (state, action) => {
        state.state = false;
        state.user = {};
      });
      builder.addCase(login.fulfilled, (state, action) => {
        if (action.payload.email) {
          state.user = action.payload;
          state.state = true;
        } else {
          state.error = action.payload;
          state.state = false;
        }
      });
    builder.addCase(checkUser.fulfilled, (state, action) => {
   
      if (action.payload.email) {
        state.user = action.payload;
        state.state = true;
      } else if(action.payload.user) {
        state.error = action.payload;
        state.state = false;
      } else {
        
        state.state = false;
      }
    });
  },
});

export default userSlice.reducer;
