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

function toBase64(arr) {
  arr = new Uint8Array(arr)
  return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
}

export const showOrderHistoryThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCUS");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/customer/show_order_history`,
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

  for (const property in tmp_showChart) {
    for (let i = 0; i < tmp_showChart[property].length; i++) {
        if (tmp_showChart[property][i].image_data != null) {
            tmp_showChart[property][i].image_data = toBase64(tmp_showChart[property][i].image_data.data)
        }
    }
}
  console.log(tmp_showChart);


  dispatch(showOrderHistory(tmp_showChart));
};
