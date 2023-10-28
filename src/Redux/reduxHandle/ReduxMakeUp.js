import React from "react";
import { ViewTugasMakeUp } from "../../assets/components/ViewTugasMakeUp";
import { ButtonTugasMakeUp } from "../../assets/components/ButtonTugasMakeUp";

export const ReduxMakeUp = () => {
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
