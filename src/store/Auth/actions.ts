import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppThunkApiConfig } from "../store";
import { TokenData, UserLoginData, UserRegisterData } from "@/models/Auth";

export const loginUser = createAsyncThunk<
  TokenData,
  UserLoginData,
  AppThunkApiConfig
>("authLoginUser", async ({ email, password }, { extra }) =>
  extra.authService.loginUser({ email, password }),
);

export const registerUser = createAsyncThunk<
  TokenData,
  UserRegisterData,
  AppThunkApiConfig
>("authLoginUser", async (userRegisterData, { extra }) =>
  extra.authService.registerUser(userRegisterData),
);
