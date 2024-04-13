import $api from "@/app/http";
import { IAuthResponse } from "@/entities/response/AuthResponse";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/login", { email, password });
  }

  static async registration(
    email: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/registration", { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
