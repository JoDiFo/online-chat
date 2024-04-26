import { useEffect, useRef, useState } from "react";

import { ChatHeader } from "@/widgets/ChatHeader";
import { ChatMessages } from "@/widgets/ChatMessages";
import { ComposingArea } from "@/widgets/ComposingArea";

import cls from "./ChatArea.module.scss";
import { useAppSelector } from "@/app/redux/hooks";
import { selectChatId } from "@/entities/chat";
import { IMessage } from "@/entities/message";

const ChatArea = () => {
  const chatId = useAppSelector(selectChatId);
  const socket = useRef<WebSocket>();
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    if (!chatId && chatId !== 0) return;

    socket.current = new WebSocket("ws://localhost:5000/");

    socket.current.onopen = () => {
      socket.current?.send(JSON.stringify({ event: "connection", chatId }));
    };

    socket.current.onmessage = (event) => {
      setMessages(JSON.parse(event.data));
    };
  }, [chatId]);

  const sendMessage = (message: string) => {
    socket.current?.send(message);
  };

  return (
    <div className={cls.ChatArea}>
      <ChatHeader />
      {chatId && chatId >= 0 ? <ChatMessages messages={messages} /> : null}
      <ComposingArea sendMessage={sendMessage} />
    </div>
  );
};

export default ChatArea;
