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

export const signupCusThunk = (add) => async () => {
  console.log("adddddddddddd")
  console.log(add);
  const imageFile = document.getElementById('signUpFormImageCus').files[0];
  console.log(imageFile);
  let formData = new FormData();
  formData.append("email", add.email);
  formData.append("password", add.password);
  formData.append("name", add.name);
  formData.append("phone_no", add.phone_no);
  formData.append("cypto_no", add.cypto_no);
  formData.append("address", add.address);
  formData.append("image_data", imageFile);

  var options = { content: formData };

  for (var key of formData.entries()) {
    console.log(key[0] + ', ' + key[1]);
  }
  await axios.post(`${process.env.REACT_APP_BACKEND}/customer/signup`,
    formData
  );
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


//Facebook Login Thunk
export const FacebookLoginThunk = (userInfo) => async (dispatch) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/auth/facebook`,
    {
      userInfo,
    }
  );

  if (response.data) {
    console.log(response.data);
    localStorage.setItem("TOKENCUS", response.data.token);
    dispatch(login());
  }

  // console.log("customer login running")
  // localStorage.setItem("TOKEN", response.data.token);
  // console.log(response.data);
  // dispatch(login());
};


//Google Login Thunk
export const GoogleLoginThunk = (userInfo) => async (dispatch) => {
  let response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/auth/google`,
    {
      userInfo,
    }
  );

  if (response.data) {
    console.log(response.data);
    localStorage.setItem("TOKENCUS", response.data.token);
    dispatch(login());
  }
  
  // localStorage.setItem("TOKEN", response.data.token);
  // dispatch(login());
};