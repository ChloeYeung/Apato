import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    companynavinfo: [],
};

export const company_navbarSlice = createSlice({
    name: "showCart",
    initialState,
    reducers: {
        companyNavInfo: (state, action) => {
            state.companynavinfo = action.payload;
        },
    },
});

export const { companyNavInfo } = company_navbarSlice.actions;

export default company_navbarSlice.reducer;

function toBase64(arr) {
    arr = new Uint8Array(arr)
    return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
}


export const comNavInfoThunk = () => async (dispatch) => {
    const token = localStorage.getItem("TOKENCOM");

    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/company/nav_info`, {
        token
    })

    if (response.data.image_data != null) {
        response.data.image_data = toBase64(response.data.image_data.data);
    }
    if (response.data) {
        dispatch(companyNavInfo(response.data));
}
};
