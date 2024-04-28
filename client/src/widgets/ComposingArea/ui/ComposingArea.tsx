import { useState } from "react";
import cls from "./ComposingArea.module.scss";
import { useAppSelector } from "@/app/redux/hooks";
import { selectUser } from "@/entities/user";
import { selectChatId } from "@/entities/chat";

interface ComposingAreaProps {
  sendMessage: (message: string) => void;
}

export const ComposingArea = ({ sendMessage }: ComposingAreaProps) => {
  const [message, setMessage] = useState("");
  const userId = useAppSelector(selectUser).id;
  const chatId = useAppSelector(selectChatId);

  const onSendMessage = async () => {
    const messageObj = {
      event: "message",
      senderId: userId,
      chatId,
      text: message,
      isEdited: false,
    };

    sendMessage(JSON.stringify(messageObj));
    setMessage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <div className={cls.ComposingArea} onKeyDown={handleKeyDown}>
      <button className={cls.ClipIcon}></button>
      <input
        className={cls.MessageBar}
        type="text"
        placeholder="Write a message..."
        value={message}
        onChange={handleChange}
      />
      <button className={cls.EmojiButton}></button>
      <button className={cls.SendButton} onClick={onSendMessage}></button>
    </div>
  );
};
