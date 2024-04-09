import cls from "./ComposingArea.module.scss";

export const ComposingArea = () => {
  return (
    <div className={cls.ComposingArea}>
      <button className={cls.ClipIcon}></button>
      <input
        className={cls.MessageBar}
        type="text"
        placeholder="Write a message..."
      />
      <button className={cls.EmojiButton}></button>
      <button className={cls.SendButton}></button>
    </div>
  );
};
