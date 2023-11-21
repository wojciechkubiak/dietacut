import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppThunkApiConfig } from "../store";
import { Token } from "@/models/Token";
import { LoginFormData } from "@/models/Login";
import { RegisterFormData } from "@/models/Register";

export const loginUser = createAsyncThunk<
  Token,
  LoginFormData,
  AppThunkApiConfig
>("authLoginUser", async ({ email, password }, { extra }) =>
  extra.authService.loginUser({ email, password })
);

export const registerUser = createAsyncThunk<
  Token,
  RegisterFormData,
  AppThunkApiConfig
>("authLoginUser", async (userRegisterData, { extra }) =>
  extra.authService.registerUser(userRegisterData)
);
