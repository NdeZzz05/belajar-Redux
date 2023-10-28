import React from "react";
import { ButtonRedux } from "../../assets/components/ButtonRedux";
import { ViewRedux } from "../../assets/components/ViewRedux";

export const ReduxPage = () => {
  return (
    <>
      <div>
        {" "}
        Redux Page
        <br />
        <ViewRedux />
        <ButtonRedux />
      </div>
    </>
  );
};
