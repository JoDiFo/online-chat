export interface IChat {
  chatId: number;
  chatName: string;
  chatMembers: number[];
}

export interface IChatSlice {
  selectedId: number | null;
  allChats: IChat[];
}
