import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showcompany: [],
};

export const customer_showCompanySlice = createSlice({
  name: "showCompany",
  initialState,
  reducers: {
    showCompany: (state, action) => {
      state.showcompany = action.payload;
    },
  },
});

export const { showCompany } = customer_showCompanySlice.actions;

export default customer_showCompanySlice.reducer;

function toBase64(arr) {
  arr = new Uint8Array(arr);
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export const showCompanyThunk = () => async (dispatch) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND}/customer/show_company`,
    {}
  );

  // change image from Buffer to base64
  response.data.forEach((e, i) => {
    if (e.image_data != null)
      response.data[i].image_data = toBase64(e.image_data.data);
  });

  dispatch(showCompany(response.data));
};
