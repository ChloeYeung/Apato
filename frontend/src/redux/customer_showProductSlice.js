import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showproduct: [],
};

export const customer_showProductSlice = createSlice({
    name: "showProduct",
    initialState,
    reducers: {
      showProduct: (state, action) => {
        state.showproduct = action.payload;
      },
    },
  });
  
  export const { showProduct } = customer_showProductSlice.actions;
  
  export default customer_showProductSlice.reducer;
  
  export const showProductThunk = () => async (dispatch) => {
    const token = localStorage.getItem("TOKENCOM");
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/customer/show_product`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },  
    });
    dispatch(showProduct(response.data));
  };