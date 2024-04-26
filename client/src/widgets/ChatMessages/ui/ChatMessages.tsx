import { IMessage, Message } from "@/entities/message";
import cls from "./ChatMessages.module.scss";
import { useEffect, useRef } from "react";
import { selectUser } from "@/entities/user";
import { useAppSelector } from "@/app/redux/hooks";

interface ChatMessagesProps {
  messages: IMessage[];
}

export const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const userId = useAppSelector(selectUser).id;

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight);
  }, []);

  if (messages.length === 0) {
    return <div>No messages yet</div>;
  }

  return (
    <div ref={chatRef} className={cls.ChatMessages}>
      {messages.map((message) => (
        <Message
          key={message._id}
          messageText={message.text}
          messageType={userId === message.senderId ? "sent" : "received"}
        />
      ))}
    </div>
  );
};
