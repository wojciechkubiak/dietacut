import Cookies from "js-cookie";

import {
  AuthStatus,
  IAuthService,
  TokenData,
  UserLoginData,
  UserRegisterData,
} from "@/models/Auth";
import axios from "axios";
import { ApiResponse } from "@/models/ApiResponse";

export class AuthService implements IAuthService {
  async loginUser(
    userLoginData: UserLoginData
  ): Promise<ApiResponse<TokenData>> {
    return axios
      .post("/api/auth/login", userLoginData)
      .then((response) => response)
      .catch((error) => error);
  }

  async registerUser(
    userRegisterData: UserRegisterData
  ): Promise<ApiResponse<TokenData>> {
    return axios
      .post("/api/auth/register", userRegisterData)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }
}
