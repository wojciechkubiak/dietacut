import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppThunkApiConfig } from "../store";
import { UserLoginData } from "@/models/Auth";

export const fetchAuthToken = createAsyncThunk<
  string | null,
  UserLoginData,
  AppThunkApiConfig
>("authLoginUser", async ({ email, password }, { extra }) =>
  extra.authService.loginUser({ email, password }),
);
