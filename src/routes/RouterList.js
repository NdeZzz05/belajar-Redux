import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsMovie } from "../pages/DetailsMovie";
import { HomePage } from "../pages/HomePage";
import { AllMovie } from "../pages/AllMovie";
import { SearchMovie } from "../pages/SearchMovie";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { LoginPageRedux } from "../pages/authRedux/LoginPageRedux";
import TokenProtected from "../assets/components/protected/TokenProtected";
// import { ReduxPage } from "../Redux/reduxHandle/ReduxPage";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageRedux />}></Route>
        {/* <Route path="/" element={<LoginPage />}></Route> */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/homepage"
          element={
            // <TokenProtected>
            <HomePage />
          }
        ></Route>
        <Route path="/detail/:id" element={<DetailsMovie />}></Route>
        <Route path="/allmovie" element={<AllMovie />}></Route>
        <Route path="/search/:query" element={<SearchMovie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
