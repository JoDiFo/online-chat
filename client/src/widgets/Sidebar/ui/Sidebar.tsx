import cls from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <div className={cls.Sidebar}>
      <button className={cls.BurgerMenu}></button>
      <button className={cls}></button>
    </div>
  );
}
