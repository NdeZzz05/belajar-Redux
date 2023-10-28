import React from "react";
import { useSelector } from "react-redux";

export const ViewTugasMakeUp = () => {
  const { jumlahMakeUp: DataMakeUp, namaBrand: DataNamaBrand } = useSelector((state) => state.kotak);
  // const DataMakeUp = useSelector((state) => state.kotak.jumlahMakeUp);
  // const DataNamaBrand = useSelector((state) => state.kotak.namaBrand);
  const DataPenerbit = useSelector((state) => state.kotak.penerbit);
  const DataListBedak = useSelector((state) => state.kotak.listBedak);
  return (
    <>
      <div className="mt-2 flex flex-col justify-center items-center">
        <h2>{DataMakeUp}</h2>
        <h2>Nama brand: {DataNamaBrand}</h2>
        <h2>Penerbit: {DataPenerbit}</h2>
        <h2>List Bedak: {DataListBedak.length === 0 ? "kosong ???" : DataListBedak}</h2>
      </div>
    </>
  );
};
