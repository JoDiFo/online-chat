export interface IUserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  isActivated: boolean;
}
