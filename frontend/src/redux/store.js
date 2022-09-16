import { configureStore } from "@reduxjs/toolkit";
import company_authSlice from "./company_authSlice";
import todoSlice from "./todoSlice";
// import spaceReducer from './spaceSlice';
import logger from "redux-logger";


export const store = configureStore({
  reducer: {
    authCom: company_authSlice,
    todoReducer: todoSlice,
    // spaceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
