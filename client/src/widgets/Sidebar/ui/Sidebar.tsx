import { useState } from "react";

import { ModalWindow } from "@/shared/ui/ModalWindow";
import { UserCard } from "@/entities/user";
import { CreateChatForm } from "@/features/createChat";

import cls from "./Sidebar.module.scss";

const Sidebar = () => {
  const [showUser, setShowUser] = useState(false);
  const [showCreateChat, setShowCreateChat] = useState(false);

  const onProfileIconClick = () => {
    setShowUser(!showUser);
  };

  const onCreateChatIconClick = () => {
    setShowCreateChat(!showUser);
  };

  return (
    <>
      <div className={cls.Sidebar}>
        <button className={cls.BurgerMenu}></button>
        <button className={cls.Icon} onClick={onProfileIconClick}></button>
        <button className={cls.Icon} onClick={onCreateChatIconClick}></button>
        <button className={cls.Icon}></button>
        <button className={cls.Icon}></button>
      </div>

      {showUser ? (
        <ModalWindow setShow={(value) => setShowUser(value)}>
          <UserCard />
        </ModalWindow>
      ) : null}

      {showCreateChat ? (
        <ModalWindow setShow={(value) => setShowCreateChat(value)}>
          <CreateChatForm />
        </ModalWindow>
      ) : null}
    </>
  );
};

export default Sidebar;
