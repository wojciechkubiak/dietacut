import { UserLoginData } from "./Login";
import { UserRegisterData } from "./Register";

export enum AuthStatus {
  CHECKING = "checking",
  NOT_AUTHENTICATED = "non_authenticated",
  AUTHENTICATED = "authenticated",
}

export interface ErrorData {
  error?: string;
}

export interface TokenData extends ErrorData {
  token: string;
  refreshToken: string;
  expirationTime: number;
}

export interface IAuthService {
  loginUser: (userLoginData: UserLoginData) => Promise<TokenData>;
  registerUser: (userRegisterData: UserRegisterData) => Promise<TokenData>;
}
