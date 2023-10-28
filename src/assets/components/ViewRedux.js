import React from "react";
import { useSelector } from "react-redux";

export const ViewRedux = () => {
  const Data = useSelector((state) => state.ember.bajuKotor);
  console.log(Data);

  return (
    <>
      <div>{Data}</div>
    </>
  );
};
