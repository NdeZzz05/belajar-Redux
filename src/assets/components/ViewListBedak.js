import React from "react";
import { useSelector } from "react-redux";

export const ViewListBedak = () => {
  const DataListBedak = useSelector((state) => state.kotak.listBedak);
  // console.log(DataListBedak);

  return (
    <>
      <p>{DataListBedak.length === 0 ? "kosong ???" : DataListBedak}</p>
    </>
  );
};
