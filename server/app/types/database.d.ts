interface DUser {
  user_id: number;
  username: string;
  email: string;
  password: string;
  is_activated: boolean;
  activation_link: string;
}

interface DRefreshToken {
  _id: ObjectId;
  userId: number;
  refreshToken: string;
}

interface DMessage {
  senderId: number;
  chatId: number;
  text: string;
  isEdited: string;
}

interface DChat {
  chat_id: number;
  chat_name: string;
}

interface DChatMember {
  chat_id: number;
  user_id: number;
}

interface DChatData {
  chat_id: number;
  chat_name: string;
  user_ids: number[];
}
