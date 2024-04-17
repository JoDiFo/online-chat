import { useEffect } from "react";

import { Sidebar } from "@/widgets/Sidebar";
import { ChatList } from "@/widgets/ChatList";
import { ChatArea } from "@/widgets/ChatArea";
import { AuthenticationForm } from "@/widgets/AuthenticationForm";

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { checkAuth, selectAuth } from "@/entities/user";

import "./styles/index.scss";

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  if (!isAuth) {
    return (
      <div className="content">
        <AuthenticationForm />
      </div>
    );
  }

  return (
    <div className="content">
      <Sidebar />
      <ChatList />
      <ChatArea />
    </div>
  );
}

export default App;
