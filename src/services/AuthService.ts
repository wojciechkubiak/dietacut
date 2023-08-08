import { IAuthService, UserLoginData } from "@/models/Auth";

export class AuthService implements IAuthService {
  async loginUser({ login, password }: UserLoginData): Promise<string> {
    return login + password;
  }
}
