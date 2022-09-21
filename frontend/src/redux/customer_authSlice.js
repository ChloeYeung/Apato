import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticatedCus: false || localStorage.getItem("TOKENCUS") != null,
};

export const customer_authSlice = createSlice({
  name: "authCus",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticatedCus = true;
    },
    logout: (state) => {
      state.isAuthenticatedCus = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = customer_authSlice.actions;

export default customer_authSlice.reducer;

export const signupCusThunk =
  ({ email, password, name, phone_no, address, cypto_no, image }) =>
  async () => {
    console.log(email, password, name, phone_no, address, cypto_no, image);
    await axios.post(`${process.env.REACT_APP_BACKEND}/customer/signup`, {
      email,
      password,
      name,
      phone_no,
      address,
      cypto_no,
      image,
    });
    console.log("customer signup running")
  };

export const loginCusThunk =
  ({ email, password }) =>
  async (dispatch) => {
    let response = await axios.post(
      `${process.env.REACT_APP_BACKEND}/customer/login`,
      { email, password }
    );
    if (response.data) {
      console.log(response.data);
      localStorage.setItem("TOKENCUS", response.data.token);
      dispatch(login());
    }
    console.log("customer login running")
  };

export const logoutCusThunk = () => async (dispatch) => {
  localStorage.removeItem("TOKENCUS");
  dispatch(logout());
  console.log("customer logout running")
};
