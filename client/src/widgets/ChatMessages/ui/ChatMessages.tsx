import { IMessage, Message } from "@/entities/message";
import cls from "./ChatMessages.module.scss";
import { useEffect, useRef, useState } from "react";
import { selectUser } from "@/entities/user";
import { useAppSelector } from "@/app/redux/hooks";
import { ActionsPopup, IPoint } from "@/shared/ui/ActionsPopup";

interface ChatMessagesProps {
  messages: IMessage[];
}

export const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const userId = useAppSelector(selectUser).id;
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<IPoint>({} as IPoint);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight);
  }, []);

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    messageType: "sent" | "received",
  ) => {
    e.preventDefault();

    setCoordinates({
      x: e.clientX + (messageType === "sent" ? -130 : 30),
      y: e.clientY + 10,
    });

    setShowPopup(true);
  };

  const handleClick = () => {
    setShowPopup(false);
  };

  if (messages.length === 0) {
    return <div>No messages yet</div>;
  }

  return (
    <div ref={chatRef} className={cls.ChatMessages} onClick={handleClick}>
      {messages.map((message) => (
        <Message
          key={message._id}
          messageText={message.text}
          messageType={userId === message.senderId ? "sent" : "received"}
          handleRightClick={handleRightClick}
        />
      ))}

      {showPopup ? <ActionsPopup coordinates={coordinates} /> : null}
    </div>
  );
};
