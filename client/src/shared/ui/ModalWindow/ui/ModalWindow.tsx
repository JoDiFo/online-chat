import { PropsWithChildren } from "react";
import classNames from "classnames";

import cls from "./ModalWindow.module.scss";

interface ModalWindowProps {
  setShow: (value: boolean) => void;
}

export const ModalWindow = ({
  children,
  setShow,
}: PropsWithChildren<ModalWindowProps>) => {
  return (
    <div className={classNames(cls.ModalWindow)} onClick={() => setShow(false)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
