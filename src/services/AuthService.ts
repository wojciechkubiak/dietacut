import Cookies from "js-cookie";

import {
  AuthStatus,
  IAuthService,
  TokenData,
  UserLoginData,
  UserRegisterData,
} from "@/models/Auth";

const storeAuth = ({ token, refreshToken }: TokenData) => {
  Cookies.set("token", token);
  Cookies.set("refreshToken", refreshToken);
};

export class AuthService implements IAuthService {
  async loginUser({ email, password }: UserLoginData): Promise<TokenData> {
    await fetch("https://httpbin.org/get");
    const result = {
      token: "test-token",
      refreshToken: "test-refresh-token",
      authStatus: AuthStatus.AUTHENTICATED,
    };

    storeAuth(result);

    return result;
  }

  async registerUser({
    email,
    password,
    weight,
    targetWeight,
    height,
    birthday,
    bodyType,
    proportions,
  }: UserRegisterData): Promise<TokenData> {
    await fetch("https://httpbin.org/get");

    const result = {
      token: "test-token",
      refreshToken: "test-refresh-token",
      authStatus: AuthStatus.AUTHENTICATED,
    };

    storeAuth(result);

    return result;
  }
}
