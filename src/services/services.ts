import { AuthService } from "./AuthService";

export interface Services {
  authService: AuthService;
}

const getServices = () => {
  const authService = new AuthService();
  return { authService };
};

export const services: Services = getServices();
