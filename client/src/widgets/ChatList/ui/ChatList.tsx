import { ChatListItem } from "@/widgets/ChatListItem";
import cls from "./ChatList.module.scss";
import { useEffect, useState } from "react";
import ChatService from "@/app/Services/ChatService";
import { useAppSelector } from "@/app/redux/hooks";
import { selectUser } from "@/entities/user";
import { IChat } from "@/entities/chat";

const ChatList = () => {
  const userId = useAppSelector(selectUser).id;
  const [chats, setChats] = useState<IChat[]>([]);

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

      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
      <ChatListItem username="username" />
    </div>
  );
};

export default ChatList;
