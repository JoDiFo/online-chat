import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectUser as selectCurrentUser } from "@/entities/user";
import ChatService from "@/app/Services/ChatService";
import { IUser } from "@/entities/user";
import { fetchChats } from "@/entities/chat";
import UserService from "@/app/Services/UserService";

import cls from "./CreateChatForm.module.scss";

export const CreateChatForm = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectCurrentUser).id;
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [chatName, setChatName] = useState<string>("");

  const createChat = async () => {
    await ChatService.createChat(chatName, [
      ...selectedUsers.map((user) => user.id),
      userId,
    ]);

    dispatch(fetchChats(userId));
  };

  const selectUser = (user: IUser) => {
    const newSelected = [...selectedUsers, user];
    setSelectedUsers(newSelected);
  };

  const deselectUser = (user: IUser) => {
    const newSelected = selectedUsers.filter(
      (selected) => selected.id !== user.id,
    );
    setSelectedUsers(newSelected);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatName(e.target.value);
  };

  useEffect(() => {
    UserService.fetchUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <div className={cls.CreateChatForm}>
      <form className={cls.settings}>
        <input
          type="text"
          placeholder="enter chat name"
          value={chatName}
          onChange={onChange}
        />
        <div className={cls.selectedMembers}>
          {selectedUsers.map((user) => (
            <div
              key={user.id}
              className={cls.selectedMember}
              onClick={() => deselectUser(user)}
            >
              {user.username}
            </div>
          ))}
        </div>
        <input
          type="button"
          value={"create"}
          className={cls.createButton}
          onClick={createChat}
        />
      </form>
      <div className={cls.list}>
        {users
          .filter(
            (user) =>
              user.id !== userId &&
              (selectedUsers.length === 0 ||
                !selectedUsers.some(
                  (selectedUser) => selectedUser.id === user.id,
                )),
          )
          .map((user) => (
            <div
              key={user.id}
              className={cls.listItem}
              onClick={() => selectUser(user)}
            >
              {user.username}
            </div>
          ))}
      </div>
    </div>
  );
};
