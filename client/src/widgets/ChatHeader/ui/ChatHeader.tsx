import cls from "./ChatHeader.module.scss";

export const ChatHeader = () => {
  return (
    <div className={cls.ChatHeader}>
      <div className={cls.Username}>username</div>
      <button className={cls.SearchIcon}></button>
    </div>
  );
};
