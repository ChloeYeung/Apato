import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  showpm: [],
imagepm: [],
};

export const company_pmSlice = createSlice({
  name: "pm",
  initialState,
  reducers: {
    showPm: (state, action) => {
      state.showpm = action.payload;
    },
    imagePm: (state, action) => {
      state.imagepm = action.payload;
    },
  },
});

export const { showPm, imagePm } = company_pmSlice.actions;

export default company_pmSlice.reducer;

export const showpmThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKENCOM");
  const response = await axios.get(`${process.env.REACT_APP_BACKEND}/company/showPm`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch(showPm(response.data));

  let imageRes = [];
  for(let i =0; i < response.data.length; i++){
    imageRes.push(response.data[i].image_data)
  }
  dispatch(imagePm(imageRes));

};

export const addpmThunk = (add) => async (dispatch) => {
      const token = localStorage.getItem("TOKENCOM");
      console.log(add);
      const imageFile = document.getElementById('pmAddFormImage').files[0];
      let formData = new FormData();
      formData.append("name", add.name);
      formData.append("description", add.description);
      formData.append("type", add.type);
      formData.append("price", add.price);
      formData.append("quantity", add.quantity);
      formData.append("tag", add.tag);
      formData.append("image", imageFile);
      formData.append("token", token);

      let res = await axios.post(`${process.env.REACT_APP_BACKEND}/company/addPm`, formData, {
      })
      console.log("in addpmThink")
      console.log(res);

      let tmp = [];
      tmp.push(res.data)
      dispatch(showPm(tmp[0]));

      for (let i = 0; i < document.getElementsByClassName("addPmInput").length; i++) {
        document.getElementsByClassName("addPmInput")[i].value = "";
      }
    };

export const deletepmThunk = ({ id }) => async (dispatch) => {
      const token = localStorage.getItem("TOKENCOM");
      let res = await axios.post(`${process.env.REACT_APP_BACKEND}/company/deletePm`, {
        id,
        token
      });
      let tmp = [];
      tmp.push(res.data)
      dispatch(showPm(tmp[0]));
    };

export const editpmThunk = (update) => async (dispatch) => {
      const token = localStorage.getItem("TOKENCOM");
      let res = await axios.post(`${process.env.REACT_APP_BACKEND}/company/editPm`, {
        update, token
      });
      let tmp = [];
      tmp.push(res.data)
      dispatch(showPm(tmp[0]));
      for (let i = 0; i < document.getElementsByClassName("pmEditInput").length; i++) {
        document.getElementsByClassName("pmEditInput")[i].value = "";
      }
    };
