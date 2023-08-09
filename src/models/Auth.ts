export enum AuthStatus {
  CHECKING = "checking",
  NOT_AUTHENTICATED = "non_authenticated",
  AUTHENTICATED = "authenticated",
}

export interface TokenData {
  token: string;
  refreshToken: string;
  authStatus: AuthStatus;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export enum BodyType {
  ECTOMORPH = "ectomorph",
  MESOMORPH = "mesomorph",
  ENDOMORPH = "endomorph",
}

export interface Proportions {
  fat: number;
  carbs: number;
  proteins: number;
}

export interface UserRegisterData extends UserLoginData {
  weight: number;
  targetWeight: number;
  height: number;
  bodyType: BodyType;
  proportions: Proportions;
  birthday?: Date;
}

export interface IAuthService {
  loginUser: ({ email, password }: UserLoginData) => Promise<TokenData>;
  registerUser: ({ email, password }: UserRegisterData) => Promise<TokenData>;
}
