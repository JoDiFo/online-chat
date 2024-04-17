import { useState } from "react";

import { ModalWindow } from "@/shared/ui/ModalWindow";

import cls from "./Sidebar.module.scss";
import { UserCard } from "@/entities/user";

export function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  const onProfileIconClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={cls.Sidebar}>
        <button className={cls.BurgerMenu}></button>
        <button className={cls.Icon} onClick={onProfileIconClick}></button>
        <button className={cls.Icon}></button>
        <button className={cls.Icon}></button>
        <button className={cls.Icon}></button>
      </div>

      {showModal ? (
        <ModalWindow setShow={(value) => setShowModal(value)}>
          <UserCard />
        </ModalWindow>
      ) : null}
    </>
  );
}
