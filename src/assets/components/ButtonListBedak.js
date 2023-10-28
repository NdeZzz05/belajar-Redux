import React from "react";
import { useDispatch } from "react-redux";
import { hapusListBedak } from "../../../Redux/action/kotakMakeUp";

export const ButtonListBedak = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(hapusListBedak());
          }}
        >
          Hapus Bedak
        </button>
      </div>
    </>
  );
};
