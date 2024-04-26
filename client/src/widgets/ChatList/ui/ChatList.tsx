import { ChatListItem, selectChat, selectChatId } from "@/entities/chat";
import cls from "./ChatList.module.scss";
import { useEffect, useState } from "react";
import ChatService from "@/app/Services/ChatService";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectUser } from "@/entities/user";
import { IChat } from "@/entities/chat";

const ChatList = () => {
  const dispatch = useAppDispatch();
  const selectedChatId = useAppSelector(selectChatId);
  const userId = useAppSelector(selectUser).id;
  const [chats, setChats] = useState<IChat[]>([]);

  // TODO MOVE TO ANOTHER FILE
  const fetchChats = async () => {
    const newChats = await ChatService.getChats(userId);
    console.log(newChats);
    setChats(newChats.data);
  };

  useEffect(() => {
    fetchChats();
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
