import { AxiosResponse } from "axios";

import $api from "@/app/http";
import { IUser } from "@/entities/user";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }
}
