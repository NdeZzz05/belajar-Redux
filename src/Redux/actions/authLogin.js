import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken, setUser } from "../reducers/auth/authLogin";
import { toast } from "react-toastify";

// default setupnya redux bawan dari redux kalo kita mau pakek dispath
// ya kayak gini mangilanya
export const LoginUser = (input) => (dispatch) => {
  //    const dispatch =  useDispatch()
  console.log(input);

  http2
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      //  value / data yang kalaian akan dapet ketika api berhasil di jalankan
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      // simpan di redux
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      dispatch(setUser(input));
      alert("berhasil");
      if (result.data.data.token) {
        window.location.href = "/homepage";
      }
      // console.log(result, "ini result");
      return result;
    })
    .catch((err) => {
      // value yang kalian akan dapat ketika api erorr / gagal di jalankan
      console.log(err, "ini error");
      alert("error bro");
    });
};

export const LogOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookieKeys.AuthToken);
};
