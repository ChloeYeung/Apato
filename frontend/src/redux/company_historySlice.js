import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showsaleshistory: [],
  editsaleshistorystatus: [],
};

export const company_summarySlice = createSlice({
  name: "sales_history",
  initialState,
  reducers: {
    showSalesHistory: (state, action) => {
      state.showsaleshistory = action.payload;
    },
    editSalesHistoryStatus: (state, action) => {
      state.editsaleshistorystatus = action.payload;
    },
  },
});

export const { showSalesHistory, editSalesHistoryStatus } =
  company_summarySlice.actions;

export default company_summarySlice.reducer;

export const showSalesSummaryThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCOM");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/company/show_salesSummary`,
    {
      token,
    }
  );
//   dispatch(showSalesSummary(response.data));
};

export const showSalesSummaryDetailThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCOM");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/company/show_salesSummary_detail`,
    {
      token,
    }
  );
//   console.log(response.data);
//   dispatch(showSalesSummaryDetail(response.data));
};
