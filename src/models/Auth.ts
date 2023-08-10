export enum AuthStatus {
  CHECKING = "checking",
  NOT_AUTHENTICATED = "non_authenticated",
  AUTHENTICATED = "authenticated",
}

export enum Gender {
  MALE = "m",
  FEMALE = "f,",
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
  name: string;
  gender: Gender;
  weight: number;
  targetWeight: number;
  reducedKcal: number;
  height: number;
  bodyType: BodyType;
  proportions: Proportions;
  birthday: string;
}

export interface IAuthService {
  loginUser: (userLoginData: UserLoginData) => Promise<TokenData>;
  registerUser: (userRegisterData: UserRegisterData) => Promise<TokenData>;
}
