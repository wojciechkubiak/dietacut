import { LoginFormData } from "./Login";
import { RegisterFormData } from "./Register";
import { Token } from "./Token";

export enum AuthStatus {
  CHECKING = "checking",
  NOT_AUTHENTICATED = "non_authenticated",
  AUTHENTICATED = "authenticated",
}

export interface IAuthService {
  loginUser: (loginFormData: LoginFormData) => Promise<Token>;
  registerUser: (registerFormData: RegisterFormData) => Promise<Token>;
}
