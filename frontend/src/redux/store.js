import { configureStore } from "@reduxjs/toolkit";
import company_authSlice from "./company_authSlice";
import customer_authSlice from "./customer_authSlice";
import todoSlice from "./todoSlice";
import company_pmSlice from "./company_pmSlice";
import customer_showProductSlice from "./customer_showProductSlice";
import customer_showServiceSlice from "./customer_showServiceSlice";
import customer_cartSlice from "./customer_cartSlice";
import logger from "redux-logger";


export const store = configureStore({
  reducer: {
    authCom: company_authSlice,
    authCus: customer_authSlice,
    todoReducer: todoSlice,
    pmReducer: company_pmSlice,
    showProductReducer: customer_showProductSlice,
    showServiceReducer: customer_showServiceSlice,
    cartReducer: customer_cartSlice,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
