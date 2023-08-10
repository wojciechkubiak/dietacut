import Cookies from "js-cookie";

import {
  AuthStatus,
  IAuthService,
  TokenData,
  UserLoginData,
  UserRegisterData,
} from "@/models/Auth";
import axios from "axios";

const storeAuth = ({ token, refreshToken }: TokenData) => {
  Cookies.set("token", token);
  Cookies.set("refreshToken", refreshToken);
};

export class AuthService implements IAuthService {
  async loginUser(userLoginData: UserLoginData): Promise<TokenData> {
    return axios
      .post("/api/auth/login", userLoginData)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }

  async registerUser(userRegisterData: UserRegisterData): Promise<TokenData> {
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
