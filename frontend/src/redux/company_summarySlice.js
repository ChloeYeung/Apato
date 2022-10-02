import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showsalessummary: [],
  showsalessummarydetail:[],
};

export const company_summarySlice = createSlice({
  name: "sales_summary",
  initialState,
  reducers: {
    showSalesSummary: (state, action) => {
      state.showsalessummary = action.payload;
    },
    showSalesSummaryDetail: (state, action) => {
      state.showsalessummarydetail = action.payload;
    },
  },
});

export const { showSalesSummary, showSalesSummaryDetail } = company_summarySlice.actions;

export default company_summarySlice.reducer;

export const showSalesSummaryThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCOM");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/company/show_salesSummary`,
    {
      token,
    }
  );

  dispatch(showSalesSummary(response.data));
};


export const showSalesSummaryDetailThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCOM");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/company/show_salesSummary_detail`,
    {
      token,
    }
  );

  // dispatch(showSalesSummaryDetail(response.data));
};

