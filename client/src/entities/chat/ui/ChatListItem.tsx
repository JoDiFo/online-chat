import classNames from "classnames";
import cls from "./ChatListItem.module.scss";

interface ChatListItemProps {
  chatName: string;
  memberCount: number;
  isSelected: boolean;
  onClick: () => void;
}

export const ChatListItem = ({
  isSelected,
  chatName,
  onClick,
}: ChatListItemProps) => {
  return (
    <div
      className={classNames(cls.ChatListItem, isSelected ? cls.selected : null)}
      onClick={onClick}
    >
      <div className={cls.UserAvatar}></div>
      <div className={cls.Username}>{chatName}</div>
    </div>
  );
};
