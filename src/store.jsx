import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./redux/features/newsSlice";
export const store = configureStore({
  reducer: { newsSlice },
});
