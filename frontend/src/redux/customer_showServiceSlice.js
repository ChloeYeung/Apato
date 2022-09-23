import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showservice: [],
  addcartmessageser: [],
};

export const customer_showServiceSlice = createSlice({
  name: "showService",
  initialState,
  reducers: {
    showService: (state, action) => {
      state.showservice = action.payload;
    },
    addCartMessageSer: (state, action) => {
      state.addcartmessageser = action.payload;
    }
  },
});

export const { showService, addCartMessageSer } = customer_showServiceSlice.actions;

export default customer_showServiceSlice.reducer;

function toBase64(arr) {
  arr = new Uint8Array(arr)
  return btoa(
    arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
}

export const showServiceThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  console.log(token);
  const response = await axios.get(`${process.env.REACT_APP_BACKEND}/customer/show_service`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // change image from Buffer to base64
  response.data.forEach((e, i) => {
    if (e.image_data != null)
      response.data[i].image_data = toBase64(e.image_data.data);
  })
  
  dispatch(showService(response.data));
};

export const addCartSerThunk = (add) => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  console.log(token)
  const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/add_cart_ser`, {
    add, token
  });
  let tmp = [];
  tmp.push(response.data)
  dispatch(addCartMessageSer(tmp[0]));
};