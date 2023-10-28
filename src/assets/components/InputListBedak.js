import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tambahListBedak } from "../../Redux/action/kotakMakeUp";

export const InputListBedak = () => {
  const dispatch = useDispatch();
  const [listBedak, setListBedak] = useState("");

  const handleInput = () => {
    if (!listBedak) return;
    dispatch(tambahListBedak(listBedak));
    setListBedak("");
  };

  return (
    <>
      <div>
        <input
          className="border"
          value={listBedak}
          onChange={(e) => {
            setListBedak(e.target.value);
          }}
        ></input>
        <button onClick={handleInput}>Tambah</button>
      </div>
    </>
  );
};
