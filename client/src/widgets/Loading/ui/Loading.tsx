import { Loader } from "@/shared/ui/Loader";
import cls from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={cls.Loading}>
      <Loader />
    </div>
  );
};
