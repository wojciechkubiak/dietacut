import Cookies from "js-cookie";

import {
  AuthStatus,
  IAuthService,
  TokenData,
  UserLoginData,
  UserRegisterData,
} from "@/models/Auth";
import axios from "axios";

export class AuthService implements IAuthService {
  async loginUser(userLoginData: UserLoginData): Promise<TokenData> {
    return axios
      .post("/api/auth/login", userLoginData)
      .then((response) => response.data)
      .catch((error) => error);
  }

  async registerUser(userRegisterData: UserRegisterData): Promise<TokenData> {
    return axios
      .post("/api/auth/register", userRegisterData)
      .then((response) => response.data)
      .catch((error) => error);
  }
}
