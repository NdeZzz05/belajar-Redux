import React from "react";

export const TesProtected = () => {
  const Data = useSelector((state) => state.auth);
  console.log(Data, "token protected");
  return <div>TesProtected</div>;
};
