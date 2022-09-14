import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import spaceReducer from './spaceSlice';
import logger from "redux-logger";


export const store = configureStore({
  reducer: {
    // userReducer,
    // spaceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
