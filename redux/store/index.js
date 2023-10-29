import { configureStore } from "@reduxjs/toolkit";
import configsReducer from "@/redux/reducers/configSlice";

export const store = configureStore({
  reducer: {
    configs: configsReducer,
  },
});
