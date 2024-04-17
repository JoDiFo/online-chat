import { useState } from "react";

import { useAppDispatch } from "@/app/redux/hooks";
import { loginUser } from "@/entities/user";

import cls from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  return (
    <form className={cls.LoginForm} onSubmit={onSubmit}>
      <label htmlFor="email">Enter your email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="username">Enter your password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input type="submit" value={"submit"} />
    </form>
  );
};
