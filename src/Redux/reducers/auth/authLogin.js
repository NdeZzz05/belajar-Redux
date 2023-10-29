import { createSlice } from "@reduxjs/toolkit";

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
      console.log(state.user, "ini user");
    },
  },
});

export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;

export default authLoginSlice.reducer;
