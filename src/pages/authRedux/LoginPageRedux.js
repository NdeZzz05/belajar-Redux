import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, LoginUser } from "../../redux/actions/authLogin";

export const LoginPageRedux = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const handleLogin = () => {
    dispatch(
      LoginUser({
        email: Email,
        password: Password,
      })
    );
  };

  return (
    <div>
      <input onChange={handleInput} id="email" className="border" type="email" />
      <input onChange={handleInput} id="password" className="border" type="password" />
      <button
        onClick={() => {
          dispatch(LogOut());
        }}
      >
        logout
      </button>
      <button
        className="bg-red-700"
        onClick={() => {
          handleLogin();
        }}
      >
        login
      </button>
    </div>
  );
};
