import { configureStore } from "@reduxjs/toolkit";
import Moviereducer from "./states/Number.js";
export default configureStore({
  reducer: {
    movie: Moviereducer,
  },
});
