import React from "react";
import { useDispatch } from "react-redux";
import { kurangiMakeUp, tambahMakeUp } from "../../../Redux/action/kotakMakeUp";

export const ButtonMakeUpRedux = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(kurangiMakeUp());
          }}
        >
          minus
        </button>
        <button
          onClick={() => {
            dispatch(tambahMakeUp());
          }}
        >
          add
        </button>
      </div>
    </>
  );
};
