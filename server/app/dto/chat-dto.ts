export default class ChatDto {
  public chatId: number;
  public chatName: string;
  public members: number[];

  constructor(chat: DChats, chat_members: DChatMembers[]) {
    this.chatId = chat.chat_id;
    this.chatName = chat.chat_name;
    this.members = chat_members.map((chat_member) => chat_member.user_id);
  }
}
