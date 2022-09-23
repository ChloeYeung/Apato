import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticatedCom: false || localStorage.getItem("TOKENCOM") != null,
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

export const signupComThunk = (add) => async () => {
      // console.log(email, password, name, phone_no, cypto_no);
      const imageFile = document.getElementById('signUpFormImageCom').files[0];
      let formData = new FormData();
      formData.append("email", add.email);
      formData.append("password", add.password);
      formData.append("name", add.name);
      formData.append("phone_no", add.phone_no);
      formData.append("cypto_no", add.cypto_no);
      formData.append("image_data", imageFile);


      await axios.post(`${process.env.REACT_APP_BACKEND}/company/signup`, formData);


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
        localStorage.setItem("TOKENCOM", response.data.token);
        dispatch(login());
      }
    };

export const logoutComThunk = () => async (dispatch) => {
  localStorage.removeItem("TOKENCOM");
  dispatch(logout());
  console.log("company logout running")
};
