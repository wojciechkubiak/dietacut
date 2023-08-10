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
      .post("/api/auth", userLoginData)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }

  // async registerUser({
  //   email,
  //   password,
  //   weight,
  //   targetWeight,
  //   height,
  //   birthday,
  //   bodyType,
  //   proportions,
  // }: UserRegisterData): Promise<TokenData> {
  //   await fetch("https://httpbin.org/get");
  //
  //   const result = {
  //     token: "test-token",
  //     refreshToken: "test-refresh-token",
  //     authStatus: AuthStatus.AUTHENTICATED,
  //   };
  //
  //   storeAuth(result);
  //
  //   return result;
  // }
}
