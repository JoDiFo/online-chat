import { ChatHeader } from "@/widgets/ChatHeader";
import { ChatMessages } from "@/widgets/ChatMessages";
import { ComposingArea } from "@/widgets/ComposingArea";

import cls from "./ChatArea.module.scss";

export const ChatArea = () => {
  return (
    <div className={cls.ChatArea}>
      <ChatHeader />
      <ChatMessages />
      <ComposingArea />
    </div>
  );
};
