import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectUser } from "../model/selectors";
import { logout } from "../model/userSlice";

import cls from "./UserCard.module.scss";

export const UserCard = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={cls.UserCard}>
      <p className={cls.field}>username: {user.username}</p>
      <p className={cls.field}>email: {user.email}</p>
      <button className={cls.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
