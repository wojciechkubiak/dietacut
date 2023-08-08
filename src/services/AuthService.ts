import { IAuthService, UserLoginData } from "@/models/Auth";

export class AuthService implements IAuthService {
  async loginUser({ email, password }: UserLoginData): Promise<string> {
    await fetch("https://httpbin.org/get");
    return email + password;
  }
}
