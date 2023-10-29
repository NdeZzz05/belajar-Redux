import { combineReducers } from "redux";
import authLogin from "./auth/authLogin";
import authMovie from "./movie/authMovieSlice";
import authRating from "./rating/authRatingSlice";

// combine reducer adalah tempat dimana kita men setup
// apa saja reducer yang kita gunakan dalam aplikasi
export default combineReducers({
  auth: authLogin,
  movie: authMovie,
  rating: authRating,
});
