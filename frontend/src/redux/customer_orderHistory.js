import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showorderhistory: [],
};

export const customer_orderHistory = createSlice({
  name: "showPurchase",
  initialState,
  reducers: {
    showOrderHistory: (state, action) => {
      state.showorderhistory = action.payload;
    },
  },
});

export const { showOrderHistory } = customer_orderHistory.actions;

export default customer_orderHistory.reducer;

export const showOrderHistoryThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/purchase_show_order_total`,
    {
      token,
    }
  );
//   dispatch(showOrderTotalPurchase(Number(response.data.toFixed(4))));
};
