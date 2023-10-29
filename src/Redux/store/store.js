import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default configureStore({
  // ember ember yang kita simpan
  reducer: rootReducer,

  // kalian sudah menggunakan redux thunk untuk menjadi middleware
  middleware: (getMiddleware) => getMiddleware().concat(thunk),
});
