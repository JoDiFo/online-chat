import cls from "./ChatListItem.module.scss";

interface ChatListItemProps {
  username: string;
}

export const ChatListItem = ({ username }: ChatListItemProps) => {
  return (
    <div className={cls.ChatListItem}>
      <div className={cls.UserAvatar}></div>
      <div className={cls.Username}>{username}</div>
    </div>
  );
};
