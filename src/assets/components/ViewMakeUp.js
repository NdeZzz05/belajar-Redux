import React from "react";
import { useSelector } from "react-redux";

export const ViewMakeUp = () => {
  const DataMakeUp = useSelector((state) => state.kotak.jumlahMakeUp);

  return (
    <>
      <p>{DataMakeUp}</p>
    </>
  );
};
