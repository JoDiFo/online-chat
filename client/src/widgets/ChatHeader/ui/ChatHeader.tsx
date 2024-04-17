import { useAppSelector } from "@/app/redux/hooks";
import { selectUser } from "@/entities/user";

import cls from "./ChatHeader.module.scss";

export const ChatHeader = () => {
  const username = useAppSelector(selectUser).username;

  return (
    <div className={cls.ChatHeader}>
      <div className={cls.Username}>{username}</div>
      <button className={cls.SearchIcon}></button>
    </div>
  );
};
