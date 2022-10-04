import { configureStore } from "@reduxjs/toolkit";
import company_authSlice from "./company_authSlice";
import customer_authSlice from "./customer_authSlice";
import customer_navbarSlice from "./customer_navbarSlice";
import company_navbarSlice from "./company_navbarSlice";
import todoSlice from "./todoSlice";
import company_pmSlice from "./company_pmSlice";
import customer_showProductSlice from "./customer_showProductSlice";
import customer_showServiceSlice from "./customer_showServiceSlice";
import customer_cartSlice from "./customer_cartSlice";
import customer_purchaseSlice from "./customer_purchaseSlice";
import customer_orderHistory from "./customer_orderHistory";
import company_summarySlice from "./company_summarySlice";
import company_historySlice from "./company_historySlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    authCom: company_authSlice,
    authCus: customer_authSlice,
    navbarCusReducer: customer_navbarSlice,
    navbarComReducer: company_navbarSlice,
    todoReducer: todoSlice,
    pmReducer: company_pmSlice,
    showProductReducer: customer_showProductSlice,
    showServiceReducer: customer_showServiceSlice,
    cartReducer: customer_cartSlice,
    purchaseReducer: customer_purchaseSlice,
    orderHistoryReducer: customer_orderHistory,
    salesSummaryReducer: company_summarySlice,
    salesHistoryReducer: company_historySlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
