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
