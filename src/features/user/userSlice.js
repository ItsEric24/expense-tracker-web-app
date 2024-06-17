import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const initialState = {
  username: null,
  userId: null,
  token: null,
  currency: "USD",
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.user;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      cookie.remove("token", { path: "/" });
    },
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { login, logout, changeCurrency } = userSlice.actions;
export default userSlice.reducer;
