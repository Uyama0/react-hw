import { configureStore } from "@reduxjs/toolkit";

import authReducer from "features/authForm/model/slice";
import searchParamsReducer from "shared/lib/store/searchParamsSlice";
import { cinemaApi } from "shared/api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    searchParams: searchParamsReducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cinemaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
