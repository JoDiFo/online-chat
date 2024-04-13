import $api from "@/app/http";
import { IUser } from "@/entities/User";
import { AxiosResponse } from "axios";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }
}
