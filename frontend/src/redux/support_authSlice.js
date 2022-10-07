import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticatedSup: false || localStorage.getItem("TOKENSUP") != null,
};

export const support_authSlice = createSlice({
  name: "authSup",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticatedSup = true;
    },
    logout: (state) => {
      state.isAuthenticatedSup = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = support_authSlice.actions;

export default support_authSlice.reducer;

export const signupSupThunk = (add) => async () => {
  const imageFile = document.getElementById('signUpFormImageSup').files[0];
  let formData = new FormData();
  formData.append("email", add.email);
  formData.append("password", add.password);
  formData.append("name", add.name);
  formData.append("phone_no", add.phone_no);
  formData.append("cypto_no", add.cypto_no);
  formData.append("image_data", imageFile);

  await axios.post(`${process.env.REACT_APP_BACKEND}/support/signup`, formData);
};

export const loginSupThunk =
  ({ email, password }) =>
    async (dispatch) => {
      let response = await axios.post(
        `${process.env.REACT_APP_BACKEND}/support/login`,
        { email, password }
      );
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("TOKENSUP", response.data.token);
        dispatch(login());
      }
    };

export const logoutSupThunk = () => async (dispatch) => {
  localStorage.removeItem("TOKENSUP");
  dispatch(logout());
  console.log("support logout running")
};
