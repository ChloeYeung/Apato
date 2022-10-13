import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showproduct: [],
  addcartmessage: [],
};

export const customer_showProductSlice = createSlice({
  name: "showProduct",
  initialState,
  reducers: {
    showProduct: (state, action) => {
      state.showproduct = action.payload;
    },
    addCartMessage: (state, action) => {
      state.addcartmessage = action.payload;
    }
  },
});

export const { showProduct, addCartMessage } = customer_showProductSlice.actions;

export default customer_showProductSlice.reducer;

function toBase64(arr) {
  arr = new Uint8Array(arr)
  return btoa(
    arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
}

export const showProductThunk = (sort) => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  console.log(token);
  const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/show_product`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    }, sort
  });
  console.log(response.data);

  // change image from Buffer to base64
  response.data.forEach((e, i) => {
    if (e.image_data != null)
      response.data[i].image_data = toBase64(e.image_data.data);
  })
  
  dispatch(showProduct(response.data));
};

export const addCartThunk = (add) => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  console.log(token)
  const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/add_cart`, {
    add, token
  });
  let tmp = [];
  console.log(response);
  tmp.push(response.data)
  dispatch(addCartMessage(tmp[0]));
};


  // export const editpmThunk = (update) => async (dispatch) => {
  //   const token = localStorage.getItem("TOKENCOM");
  //   let res = await axios.post(`${process.env.REACT_APP_BACKEND}/company/editPm`, {
  //     update, token
  //   });
  //   let tmp = [];
  //   tmp.push(res.data)
  //   dispatch(showPm(tmp[0]));
  //   for (let i = 0; i < document.getElementsByClassName("pmEditInput").length; i++) {
  //     document.getElementsByClassName("pmEditInput")[i].value = "";
  //   }
  // };
