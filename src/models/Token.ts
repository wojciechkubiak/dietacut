import { ErrorData } from "./Error";

export interface Token extends ErrorData {
  token: string;
  refreshToken: string;
  expirationTime: number;
}
