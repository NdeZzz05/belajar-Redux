import React from "react";
import { useSelector } from "react-redux";

export const ViewNamaBrand = () => {
  const DataNamaBrand = useSelector((state) => state.kotak.namaBrand);
  const DataPenerbit = useSelector((state) => state.kotak.penerbit);
  //   console.log(DataNamaBrand);

  return (
    <>
      <p>Nama brand: {DataNamaBrand}</p>
      <p>Penerbit: {DataPenerbit}</p>
    </>
  );
};
