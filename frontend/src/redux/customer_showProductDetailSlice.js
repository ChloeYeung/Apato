import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showproductdetail: [],
};

export const customer_showProductDetailSlice = createSlice({
  name: "showProductDetail",
  initialState,
  reducers: {
    showProductDetail: (state, action) => {
      state.showproductdetail = action.payload;
    },
  },
});

export const { showProductDetail } = customer_showProductDetailSlice.actions;

export default customer_showProductDetailSlice.reducer;

function toBase64(arr) {
  arr = new Uint8Array(arr);
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

export const showProductDetailThunk = (product_id) => async (dispatch) => {
  console.log(product_id);
  const token = localStorage.getItem("TOKENCUS");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/show_product/:productId`,
    {
      token,
      product_id,
    }
  );

  if (response.data.image_data != null) {
    response.data.image_data = toBase64(response.data.image_data.data);
  }
  if (response.data.company_image != null) {
    response.data.company_image = toBase64(response.data.company_image.data);
  }

  console.log(response.data);

  dispatch(showProductDetail(response.data));
};
