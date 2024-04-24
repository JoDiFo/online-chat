import { client } from "../db/connection";
import {
  ADD_USER_TO_CHAT,
  CREATE_CHAT,
  DELETE_CHAT,
  DELETE_CHAT_MEMBERS,
  GET_ALL_CHATS,
} from "../db/queries";
import ChatDto from "../dto/chat-dto";

class ChatService {
  public async getChats(userId: number) {
    const chats = await client.query<DChatData>(GET_ALL_CHATS, [userId]);

    if (chats.rowCount === 0) {
      return [];
    }

    const newChats = chats.rows.map((chat) => {
      return new ChatDto(
        { chat_id: chat.chat_id, chat_name: chat.chat_name } as DChat,
        [...chat.user_ids].map((user_id) => ({
          chat_id: chat.chat_id,
          user_id,
        })) as DChatMember[]
      );
    });
    return newChats;
  }

  public async createChat(chatName: string, memberIds: number[]) {
    const newChat = (await client.query<DChat>(CREATE_CHAT, [chatName]))
      .rows[0];

    const members = await Promise.all(
      memberIds.map(async (memberId) => {
        const insertedMember = (
          await client.query<DChatMember>(ADD_USER_TO_CHAT, [
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
    const deletedChat = (await client.query<DChat>(DELETE_CHAT, [chatId]))
      .rows[0];
    await client.query(DELETE_CHAT_MEMBERS, [chatId]);

    return deletedChat;
  }
}

export default new ChatService();
