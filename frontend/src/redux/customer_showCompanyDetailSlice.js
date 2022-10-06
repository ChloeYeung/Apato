import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showcompanydetail: [],
};

export const customer_showCompanyDetailSlice = createSlice({
  name: "showCompanyDetail",
  initialState,
  reducers: {
    showCompanyDetail: (state, action) => {
      state.showcompanydetail = action.payload;
    },
  },
});

export const { showCompanyDetail } = customer_showCompanyDetailSlice.actions;

export default customer_showCompanyDetailSlice.reducer;

function toBase64(arr) {
  arr = new Uint8Array(arr);
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export const showCompanyDetailThunk = (company_id) => async (dispatch) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/show_company/:companyId`,
    {
      company_id,
    }
  );


  if (response.data.image_data != null) {
    response.data.image_data = toBase64(response.data.image_data.data);
  }

  response.data.product.forEach((e, i) => {
    if (e.image_data != null)
      response.data[i].image_data = toBase64(e.image_data.data);
  })


  console.log(response.data);

  dispatch(showCompanyDetail(response.data));
};
