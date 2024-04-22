import { client } from "../db/connection";
import {
  ADD_USER_TO_CHAT,
  CREATE_CHAT,
  DELETE_CHAT,
  DELETE_CHAT_MEMBERS,
} from "../db/queries";
import ChatDto from "../dto/chat-dto";

class ChatService {
  public async createChat(chatName: string, memberIds: number[]) {
    const newChat = (await client.query<DChats>(CREATE_CHAT, [chatName]))
      .rows[0];

    const members = await Promise.all(
      memberIds.map(async (memberId) => {
        const insertedMember = (
          await client.query<DChatMembers>(ADD_USER_TO_CHAT, [
            newChat.chat_id,
            memberId,
          ])
        ).rows[0];

        return insertedMember;
      })
    );

    const chat = new ChatDto(newChat, members);
    return chat;
  }

  public async deleteChat(chatId: number) {
    const deletedChat = (await client.query<DChats>(DELETE_CHAT, [chatId]))
      .rows[0];
    await client.query(DELETE_CHAT_MEMBERS, [chatId]);

    return deletedChat;
  }
}

export default new ChatService();
