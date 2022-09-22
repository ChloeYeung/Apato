import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    showcart: [],
};

export const customer_cartSlice = createSlice({
    name: "showCart",
    initialState,
    reducers: {
        showCart: (state, action) => {
            state.showcart = action.payload;
        },
    },
});

export const { showCart } = customer_cartSlice.actions;

export default customer_cartSlice.reducer;

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
        if(tmp_showChart[ele1.company_id] == undefined )
        {   arr.push(ele1)
            tmp_showChart[ele1.company_id]=arr;
        }

        else{
            tmp_showChart[ele1.company_id].push(ele1);
        }


    })
    console.log(  tmp_showChart)

    dispatch(showCart(tmp_showChart));
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