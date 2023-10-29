import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLogin: "",
  user: "",
};

const authMovieSlice = createSlice({
  name: "movieAuth",
  initialState,
  reducers: {},
});

export default authMovieSlice.reducer;
