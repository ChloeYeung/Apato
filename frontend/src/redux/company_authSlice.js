import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticatedCom: false || localStorage.getItem("TOKEN") != null,
};

export const company_authSlice = createSlice({
  name: "authCom",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticatedCom = true;
    },
    logout: (state) => {
      state.isAuthenticatedCom = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = company_authSlice.actions;

export default company_authSlice.reducer;

export const signupComThunk =
  ({ email, password, name, phone_no, cypto_no, image }) =>
  async () => {
    console.log(email, password, name, phone_no, cypto_no);
    await axios.post(`${process.env.REACT_APP_BACKEND}/company/signup`, {
      email,
      password,
      name,
      phone_no,
      cypto_no,
      image,
    });
  };

export const loginComThunk =
  ({ email, password }) =>
  async (dispatch) => {
    let response = await axios.post(
      `${process.env.REACT_APP_BACKEND}/company/login`,
      { email, password }
    );
    if (response.data) {
      console.log(response.data);
      localStorage.setItem("TOKEN", response.data.token);
      dispatch(login());
    }
  };

export const logoutComThunk = () => async (dispatch) => {
  localStorage.removeItem("TOKEN");
  dispatch(logout());
  console.log("company logout running")
};
