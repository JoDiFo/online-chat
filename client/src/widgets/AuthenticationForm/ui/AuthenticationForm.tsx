import { useState } from "react";
import classNames from "classnames";

import { LoginForm } from "@/features/Login";
import { RegisterForm } from "@/features/Register";

import cls from "./AuthenticationForm.module.scss";

export const AuthenticationForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const selectLogin = () => {
    setIsLogin(true);
  };

  const selectRegister = () => {
    setIsLogin(false);
  };

  return (
    <div className={cls.AuthenticationForm}>
      <div className={cls.formTitles}>
        <h4
          className={classNames(cls.title, isLogin ? cls.active : null)}
          onClick={selectLogin}
        >
          Sign in
        </h4>
        <h4
          className={classNames(cls.title, isLogin ? null : cls.active)}
          onClick={selectRegister}
        >
          Sign up
        </h4>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};
