import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/Movie/movieSlice";
import userSlice from "../features/User/userSlice";
import userReducer from "../features/User/userSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
    // user: userReducer,
  },
});
