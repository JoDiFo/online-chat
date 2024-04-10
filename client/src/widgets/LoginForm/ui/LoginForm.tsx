import { useState } from "react";
import axios from "axios";

import cls from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    axios.post("http://localhost:5000", {
      username,
      email,
      password,
    });
  };

  return (
    <form className={cls.LoginForm}>
      <label htmlFor="username">Enter your username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
      />
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
      <input type="submit" value={"submit"} onClick={onSubmit} />
    </form>
  );
};
