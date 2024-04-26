interface EReceivedMessage {
  event: "message";
  senderId: number;
  chatId: number;
  text: string;
  isEdited: boolean;
}

interface EReceivedConnection {
  event: "connection";
  chatId: number;
}
