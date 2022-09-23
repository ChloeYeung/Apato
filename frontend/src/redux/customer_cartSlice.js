import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    showcart: [],
    customerinfocart: [],
};

export const customer_cartSlice = createSlice({
    name: "showCart",
    initialState,
    reducers: {
        showCart: (state, action) => {
            state.showcart = action.payload;
        },
        customerInfoCart: (state, action) => {
            state.customerinfocart = action.payload;
        },
    },
});

export const { showCart, customerInfoCart } = customer_cartSlice.actions;

export default customer_cartSlice.reducer;

function toBase64(arr) {
    arr = new Uint8Array(arr)
    return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
}


export const showCartThunk = () => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");
    console.log(token);
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/customer/show_cart`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    let tmp_showChart = [];
    response.data.forEach((ele1) => {
        let arr = []
        if (tmp_showChart[ele1.company_id] == undefined) {
            arr.push(ele1)
            tmp_showChart[ele1.company_id] = arr;
        }

        else {
            tmp_showChart[ele1.company_id].push(ele1);
        }

    })

    for (const property in tmp_showChart) {
        for (let i = 0; i < tmp_showChart[property].length; i++) {
            if (tmp_showChart[property][i].image_data != null) {
                tmp_showChart[property][i].image_data = toBase64(tmp_showChart[property][i].image_data.data)
                // console.log(tmp_showChart[property][i].image_data);
            }
        }

    }

    dispatch(showCart(tmp_showChart));
};


export const addCartUnitThunk = (add) => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");
    console.log(add);
    console.log(token);
    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/add_cart_unit`, {
        add, token
    })

    dispatch(showCartThunk());
    console.log(response.data);
};






// export const addCartThunk = (add) => async (dispatch) => {
//   const token = localStorage.getItem("TOKENCUS");
//   console.log(token)
//   const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/add_cart`, {
//     add, token
//   });
//   let tmp = [];
//   tmp.push(response.data)
//   dispatch(addCartMessage(tmp[0]));
// };