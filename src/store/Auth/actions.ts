import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppThunkApiConfig } from "../store";
import { Token } from "@/models/Token";
import { LoginFormData } from "@/models/Login";
import { RegisterFormData } from "@/models/Register";

export const loginUser = createAsyncThunk<
  Token,
  LoginFormData,
  AppThunkApiConfig
>("authLoginUser", async (loginFormData, { extra }) =>
  extra.authService.loginUser(loginFormData)
);

export const registerUser = createAsyncThunk<
  Token,
  RegisterFormData,
  AppThunkApiConfig
>("authRegisterUser", async (registerFormData, { extra }) =>
  extra.authService.registerUser(registerFormData)
);
