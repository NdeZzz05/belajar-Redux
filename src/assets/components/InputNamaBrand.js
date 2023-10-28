import React from "react";
import { useDispatch } from "react-redux";
import { gantiBrand } from "../../Redux/action/kotakMakeUp";

export const InputNamaBrand = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <input
          className="border"
          onChange={(e) => {
            dispatch(gantiBrand({ namaBrand: e.target.value, penerbit: "sedang dicari..." }));
          }}
        ></input>
      </div>
    </>
  );
};
