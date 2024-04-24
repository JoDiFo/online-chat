export default class ChatDto {
  public chatId: number;
  public chatName: string;
  public chatMembers: number[];

  constructor(chat: DChat, chat_members: DChatMember[]) {
    this.chatId = chat.chat_id;
    this.chatName = chat.chat_name;
    this.chatMembers = chat_members.map((chat_member) => chat_member.user_id);
  }
}
