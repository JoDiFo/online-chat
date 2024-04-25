import { useEffect, useRef, useState } from "react";
import cls from "./ComposingArea.module.scss";

export const ComposingArea = () => {
  const socket = useRef<WebSocket>();

  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.current = new WebSocket("ws://localhost:5000/");
  }, []);

  const sendMessage = async () => {
    const messageObj = {
      event: "message",
      text: message,
    };

    socket.current?.send(JSON.stringify(messageObj));
    setMessage("");
  };

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
      <button className={cls.SendButton} onClick={sendMessage}></button>
    </div>
  );
};
