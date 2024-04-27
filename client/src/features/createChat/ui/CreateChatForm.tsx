import { useEffect, useState } from "react";
import cls from "./CreateChatForm.module.scss";
import $api from "@/app/http";
import { AxiosResponse } from "axios";
import { IUser } from "@/entities/user";
import { useAppSelector } from "@/app/redux/hooks";
import { selectUser as selectCurrentUser } from "@/entities/user";

export const CreateChatForm = () => {
  const userId = useAppSelector(selectCurrentUser).id;
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [chatName, setChatName] = useState<string>("");

  const fetchUsers = async () => {
    $api
      .get("/users")
      .then((response: AxiosResponse<IUser[]>) => setUsers(response.data));
  };

  const createChat = async () => {
    $api.post("/createChat", {
      chatName,
      userIds: selectedUsers.map((user) => user.id),
    });
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
    fetchUsers();
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
