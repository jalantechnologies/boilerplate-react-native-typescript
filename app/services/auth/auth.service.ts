import { AccessToken } from "@models";
import { ServiceResponse } from "../api";

export interface AuthService {
  logout: () => void;
  isLoggedIn: () => boolean;
  login: (payload: any) => Promise<ServiceResponse<AccessToken>>;
}
