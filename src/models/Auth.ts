export interface UserLoginData {
  email: string;
  password: string;
}

export interface IAuthService {
  loginUser: ({ email, password }: UserLoginData) => Promise<string | null>;
}
