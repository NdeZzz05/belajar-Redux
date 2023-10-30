import React from "react";
import { ViewTugasMakeUp } from "../../assets/components/ViewTugasMakeUp";
import { ButtonTugasMakeUp } from "../../assets/components/ButtonTugasMakeUp";
import { useSelector } from "react-redux";

export const ReduxMakeUp = () => {
  const Data = useSelector((state) => state.kotak);
  console.log(Data);
  return (
    <>
      <div className="flex flex-col w-screen justify-center items-center">
        <h1 className="font-bold">TUGAS MAKE UP</h1>
        <ViewTugasMakeUp />
        <ButtonTugasMakeUp />
      </div>
    </>
  );
};
