import {
  ChatListItem,
  fetchChats,
  selectChat,
  selectChatId,
  selectChats,
} from "@/entities/chat";
import cls from "./ChatList.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectUser } from "@/entities/user";

const ChatList = () => {
  const dispatch = useAppDispatch();
  const chats = useAppSelector(selectChats);
  const selectedChatId = useAppSelector(selectChatId);
  const userId = useAppSelector(selectUser).id;

  useEffect(() => {
    dispatch(fetchChats(userId));
  }, []);

  return (
    <div className={cls.ChatList}>
      <div className={cls.SearchBar}>
        <button className={cls.SearchIcon}></button>
      </div>
      {chats.map((chat) => (
        <ChatListItem
          key={chat.chatId}
          chatName={chat.chatName}
          memberCount={chat.chatMembers.length}
          isSelected={selectedChatId === chat.chatId}
          onClick={() => dispatch(selectChat(chat.chatId))}
        />
      ))}
    </div>
  );
};

export default ChatList;
