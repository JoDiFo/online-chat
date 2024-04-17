import { IUser } from "@/entities/user";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
