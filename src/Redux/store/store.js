import { configureStore } from "@reduxjs/toolkit";
import emberReducer from "../action/manipulasiEmber";
import kotakMakeUp from "../action/kotakMakeUp";

export default configureStore({
  reducer: {
    // ember: emberReducer,
    kotak: kotakMakeUp,
  },
});
