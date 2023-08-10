import { Activity, BodyType, Gender, Proportions } from "@/models/User";

export enum AuthStatus {
  CHECKING = "checking",
  NOT_AUTHENTICATED = "non_authenticated",
  AUTHENTICATED = "authenticated",
}

export interface ErrorData {
  error: string;
}

export interface TokenData {
  token: string;
  refreshToken: string;
  expirationTime: number;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserRegisterData extends UserLoginData {
  name: string;
  gender: Gender;
  weight: number;
  targetWeight: number;
  reducedKcal: number;
  height: number;
  bodyType: BodyType;
  proportions: Proportions;
  activity: Activity;
  birthday: string;
}

export interface IAuthService {
  loginUser: (userLoginData: UserLoginData) => Promise<TokenData>;
  registerUser: (userRegisterData: UserRegisterData) => Promise<TokenData>;
}
