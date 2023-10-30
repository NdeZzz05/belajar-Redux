import { createSlice } from "@reduxjs/toolkit";

// versi 2, initialstate dipisah agar terlihat lebih rapih
const initialState = {
  token: undefined,
  isLogin: "",
  user: "",
};

const authLoginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// mengekspor reducersnya akan digunakan
export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;

export default authLoginSlice.reducer;
