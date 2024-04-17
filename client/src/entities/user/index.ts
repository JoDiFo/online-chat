export {
  checkAuth,
  loginUser,
  logout,
  registerUser,
  setAuth,
  setLoading,
  setUser,
  userSlice,
  default as userReducer,
} from "./model/userSlice";
export { type IUserState, type IUser } from "./model/types";
export { selectAuth, selectLoading, selectUser } from "./model/selectors";
export { UserCard } from "./ui/UserCard";
