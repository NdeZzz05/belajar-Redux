import React from "react";
import { useDispatch } from "react-redux";
import { kurangiBajuKotor, tambahBajuKotor } from "../../Redux/action/manipulasiEmber";

export const ButtonRedux = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="">
        <button
          onClick={() => {
            dispatch(kurangiBajuKotor());
          }}
        >
          minus
        </button>
        <button
          onClick={() => {
            dispatch(tambahBajuKotor());
          }}
        >
          add
        </button>
      </div>
    </>
  );
};
