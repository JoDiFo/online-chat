import classNames from "classnames";
import cls from "./Message.module.scss";

interface MessageProps {
  messageText: string;
  messageType: "sent" | "received";
}

export const Message = ({ messageText, messageType }: MessageProps) => {
  return (
    <div className={classNames(cls.Message, cls[messageType])}>
      <p className={cls.MessageText}>{messageText}</p>
    </div>
  );
};
