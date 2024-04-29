import { IPoint } from "../model/types";
import cls from "./ActionsPopup.module.scss";

interface ActionsPopupProps {
  coordinates: IPoint;
}

export const ActionsPopup = ({ coordinates }: ActionsPopupProps) => {
  return (
    <div
      className={cls.ActionsPopup}
      style={{
        top: coordinates.y.toString() + "px",
        left: coordinates.x.toString() + "px",
      }}
    >
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
};
