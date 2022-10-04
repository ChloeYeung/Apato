import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showsaleshistory: [],
  editsaleshistorystatus: [],
};

export const company_historySlice = createSlice({
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
  company_historySlice.actions;

export default company_historySlice.reducer;

export const showSalesHistoryThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCOM");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/company/show_sales_history`,
    {
      token,
    }
  );

  let tmp_showChart = [];
  response.data.forEach((ele1) => {
    let arr = [];
    if (tmp_showChart[ele1.order_id] == undefined) {
      arr.push(ele1);
      tmp_showChart[ele1.order_id] = arr;
    } else {
      tmp_showChart[ele1.order_id].push(ele1);
    }
  });

  console.log(tmp_showChart);
  dispatch(showSalesHistory(tmp_showChart));
};

export const editSalesHistoryStatusThunk = (sendObject) => async (dispatch) => {
  const token = localStorage.getItem("TOKENCOM");
  console.log("in editSalesHistoryStatusThunk");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/company/edit_sales_history_status`,
    {
      token,
      sendObject,
    }
  );

  dispatch(showSalesHistoryThunk());
};
