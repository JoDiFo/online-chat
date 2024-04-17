import { IUser } from "@/entities/user/IUser";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
