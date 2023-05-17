import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import HistorySlice from "./historySlice";

export const store = configureStore({
  reducer: {
    weatherData: weatherSlice,
    searchHistory: HistorySlice,
  },
});
