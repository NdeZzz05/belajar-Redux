import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { kurangiMakeUp, tambahMakeUp, gantiBrand, hapusListBedak, tambahListBedak } from "../../redux/action/kotakMakeUp";

export const ButtonTugasMakeUp = () => {
  const dispatch = useDispatch();
  const [listBedak, setListBedak] = useState("");

  const handleInput = () => {
    if (!listBedak) return;
    dispatch(tambahListBedak(listBedak));
    setListBedak("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <button
            className="mr-4 bg-slate-400"
            onClick={() => {
              dispatch(kurangiMakeUp());
            }}
          >
            minus
          </button>
          <button
            className="bg-slate-400"
            onClick={() => {
              dispatch(tambahMakeUp());
            }}
          >
            add
          </button>
        </div>
        <input
          className="border"
          placeholder="ganti nama brand"
          onChange={(e) => {
            dispatch(gantiBrand({ namaBrand: e.target.value, penerbit: "sedang dicari..." }));
          }}
        ></input>
        <div>
          <button
            className="bg-red-500"
            onClick={() => {
              dispatch(hapusListBedak());
            }}
          >
            HapusBedak
          </button>
        </div>
        <div>
          <input
            className="border"
            placeholder="tambah list"
            value={listBedak}
            onChange={(e) => {
              setListBedak(e.target.value);
            }}
          ></input>
          <button onClick={handleInput} className="bg-green-500">
            TambahList
          </button>
        </div>
      </div>
    </>
  );
};
