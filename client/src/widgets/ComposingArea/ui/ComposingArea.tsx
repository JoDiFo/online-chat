import { useState } from "react";
import cls from "./ComposingArea.module.scss";

export const ComposingArea = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className={cls.ComposingArea}>
      <button className={cls.ClipIcon}></button>
      <input
        className={cls.MessageBar}
        type="text"
        placeholder="Write a message..."
        value={message}
        onChange={handleChange}
      />
      <button className={cls.EmojiButton}></button>
      <button className={cls.SendButton}></button>
    </div>
  );
};
