import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function TokenProtected({ children }) {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.auth);
  console.log(Data, "token protected");

  // useEffect(() => {
  //   if (Data.token === undefined) {
  //     window.location.href = "/";
  //   }
  // }, []);

  return children;
}

export default TokenProtected;
