import { AxiosResponse } from "axios";
import $api from "../http";
import { IChat } from "@/entities/chat";

export default class ChatService {
  static async getChats(userId: number): Promise<AxiosResponse<IChat[]>> {
    return $api.get(`chats/${userId}`);
  }
}
