import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    showpm: [],
};

export const company_pmSlice = createSlice({
    name: "pm",
    initialState,
    reducers: {
        showPm: (state, action) => {
            state.showpm = action.payload;
        },
    },
});

export const { showPm } = company_pmSlice.actions;

export default company_pmSlice.reducer;

export const showpmThunk = () => async (dispatch) => {
    const token = localStorage.getItem("TOKEN");
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/company/showPm`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("respond from show")
    console.log(response.data)
    console.log("===================")
    dispatch(showPm(response.data));
  };