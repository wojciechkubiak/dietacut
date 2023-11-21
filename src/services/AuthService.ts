import axios from "axios";

import { IAuthService } from "@/models/Auth";
import { LoginFormData } from "@/models/Login";
import { RegisterFormData } from "@/models/Register";
import { Token } from "@/models/Token";

export class AuthService implements IAuthService {
  async loginUser(loginFormData: LoginFormData): Promise<Token> {
    return axios
      .post("/api/auth/login", loginFormData)
      .then((response) => response.data)
      .catch((error) => error);
  }

  async registerUser(registerFormData: RegisterFormData): Promise<Token> {
    return axios
      .post("/api/auth/register", registerFormData)
      .then((response) => response.data)
      .catch((error) => error);
  }
}
