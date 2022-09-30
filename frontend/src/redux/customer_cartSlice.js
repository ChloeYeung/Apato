import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    showcart: [],
    customerinfocart: [],
    showmessagecart: [],
    showordertotal: [],
    customernavinfo: [],
    temptest:[],
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
        showMessageChart: (state, action) => {
            state.showmessagecart = action.payload;
        },
        showOrderTotal: (state, action) => {
            state.showordertotal = action.payload;
        },
    },
});

export const { showCart, customerInfoCart, showMessageChart, showOrderTotal } = customer_cartSlice.actions;

export default customer_cartSlice.reducer;

function toBase64(arr) {
    arr = new Uint8Array(arr)
    return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
}


export const showCartThunk = () => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");
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
            }
        }
    }


      // response.data.forEach((e, i) => {
    //     if (e.image_data != null)
    //       response.data[i].image_data = toBase64(e.image_data.data);
    //   })

    // for (const property in tmp_showChart) {
    //     tmp_showChart[property].forEach((e, i) => {
    //         if (e.image_data != null)
    //             tmp_showChart[property][i].image_data = toBase64(e.image_data.data);
    //     console.log("===================================")
    //     console.log(tmp_showChart[property][i])
    //     console.log("===================================")

    //         })
    // }
    dispatch(showOrderTotalThunk());
    dispatch(showCart(tmp_showChart));
};


export const addCartUnitThunk = (add) => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");
    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/add_cart_unit`, {
        add, token
    })

    dispatch(showCartThunk());
    dispatch(showMessageChart(response.data));
    dispatch(showOrderTotalThunk());
};


export const minusCartUnitThunk = (minus) => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");
    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/minus_cart_unit`, {
        minus, token
    })

    dispatch(showCartThunk());
    dispatch(showMessageChart(response.data));
    dispatch(showOrderTotalThunk());
};

export const deleteCartThunk = (del) => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");
    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/del_cart_unit`, {
        del, token
    })

    dispatch(showCartThunk());
    dispatch(showOrderTotalThunk());
};


export const showOrderTotalThunk = () => async (dispatch) => {
    const token = localStorage.getItem("TOKENCUS");

    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/customer/cart_show_order_total`, {
        token
    })
    console.log(response.data);
    console.log("in showOrderTotalThunk")
    dispatch(showOrderTotal((response.data).toFixed(4)));
};
