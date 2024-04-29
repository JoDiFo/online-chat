import { IPoint } from "../model/types";
import cls from "./ActionsPopup.module.scss";

interface ActionsPopupProps {
  coordinates: IPoint;
  onDelete: () => void;
  onEdit: () => void;
}

export const ActionsPopup = ({
  coordinates,
  onDelete,
  onEdit,
}: ActionsPopupProps) => {
  return (
    <div
      className={cls.ActionsPopup}
      style={{
        top: coordinates.y.toString() + "px",
        left: coordinates.x.toString() + "px",
      }}
    >
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};
