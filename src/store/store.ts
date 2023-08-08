import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { Services, services } from "@/services/services";
import { authReducer } from "./Auth/slice";

const reducers = combineReducers({
  data: authReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: services,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof reducers>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export interface AppThunkApiConfig {
  state: AppRootState;
  dispatch: AppDispatch;
  extra: Services;
}
