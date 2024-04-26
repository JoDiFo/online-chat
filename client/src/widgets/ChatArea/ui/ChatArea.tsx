import { useEffect, useRef } from "react";

import { ChatHeader } from "@/widgets/ChatHeader";
import { ChatMessages } from "@/widgets/ChatMessages";
import { ComposingArea } from "@/widgets/ComposingArea";

import cls from "./ChatArea.module.scss";

const ChatArea = () => {
  const socket = useRef<WebSocket>();

  useEffect(() => {
    socket.current = new WebSocket("ws://localhost:5000/");
  }, []);

  const sendMessage = (message: string) => {
    socket.current?.send(message);
  };

  return (
    <div className={cls.ChatArea}>
      <ChatHeader />
      <ChatMessages />
      <ComposingArea sendMessage={sendMessage} />
    </div>
  );
};

export default ChatArea;
