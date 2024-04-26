interface EReceivedMessage {
  event: string;
  senderId: number;
  chatId: number;
  text: string;
  isEdited: boolean;
}
