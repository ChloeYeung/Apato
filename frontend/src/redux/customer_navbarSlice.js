import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    customernavinfo: [],
};

export const customer_navbarSlice = createSlice({
    name: "showCart",
    initialState,
    reducers: {
        customerNavInfo: (state, action) => {
            state.customernavinfo = action.payload;
        },
    },
});

export const { customerNavInfo } = customer_navbarSlice.actions;

export default customer_navbarSlice.reducer;

function toBase64(arr) {
    arr = new Uint8Array(arr)
    return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
}


export const cusNavInfoThunk = () => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");

    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/nav_info`, {
        token
    })

    if (response.data.image_data != null) {
        response.data.image_data = toBase64(response.data.image_data.data);
    }
    if (response.data) {
        dispatch(customerNavInfo(response.data));
}
};
