import classNames from "classnames";
import cls from "./Message.module.scss";

interface MessageProps {
  messageText: string;
  messageType: "sent" | "received";
  handleRightClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    messageType: "sent" | "received",
  ) => void;
}

export const Message = ({
  messageText,
  messageType,
  handleRightClick,
}: MessageProps) => {
  return (
    <div
      className={classNames(cls.Message, cls[messageType])}
      onContextMenu={(e) => handleRightClick(e, messageType)}
    >
      <p className={cls.MessageText}>{messageText}</p>
    </div>
  );
};
