import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showordertotalpurchase: [],
  delordertotalpurchase: [],
};

export const customer_purchaseSlice = createSlice({
  name: "showPurchase",
  initialState,
  reducers: {
    showOrderTotalPurchase: (state, action) => {
      state.showordertotalpurchase = action.payload;
    },
    delOrderTotalPurchase: (state, action) => {
      state.delordertotalpurchase = action.payload;
    },
  },
});

export const { showOrderTotalPurchase, delOrderTotalPurchase } = customer_purchaseSlice.actions;

export default customer_purchaseSlice.reducer;

export const showOrderTotalPurchaseThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/purchase_show_order_total`,
    {
      token,
    }
  );
  dispatch(showOrderTotalPurchase(Number(response.data.toFixed(4))));
};

export const delOrderTotalPurchaseThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/purchase_del_cart`,
    {
      token,
    }
  );
};
