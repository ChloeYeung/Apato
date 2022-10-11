import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { showSalesHistoryThunk } from "../redux/company_historySlice";
import {
  showSalesSummaryThunk,
  showSalesSummaryDetailThunk,
} from "../redux/company_summarySlice";

const initialState = {
  showordertotalpurchase: [],
  delordertotalpurchase: [],
  addorderhistory: [],
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
    addOrderHistory: (state, action) => {
      state.addorderhistory = action.payload;
    },
  },
});

export const {
  showOrderTotalPurchase,
  delOrderTotalPurchase,
  addOrderHistory,
} = customer_purchaseSlice.actions;

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

export const addOrderHistoryThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/purchase_add_order_history`,
    {
      token,
    }
  );
};

export const updateCompanyStockThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/purchase_update_company_stock`,
    {
      token,
    }
  );
};