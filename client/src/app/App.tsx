import { Suspense, useEffect } from "react";

import { Sidebar } from "@/widgets/Sidebar";
import { ChatList } from "@/widgets/ChatList";
import { ChatArea } from "@/widgets/ChatArea";
import { AuthenticationForm } from "@/widgets/AuthenticationForm";
import { Loading } from "@/widgets/Loading";

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { checkAuth, selectAuth, selectLoading } from "@/entities/user";

import "./styles/index.scss";

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectAuth);
  const isLoading = useAppSelector(selectLoading);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  if (isLoading) {
    return (
      <div className="content">
        <Loading />
      </div>
    );
  }

  if (!isAuth && !isLoading) {
    return (
      <div className="content">
        <AuthenticationForm />
      </div>
    );
  }

  return (
    <div className="content">
      <Suspense fallback={<Loading />}>
        <Sidebar />
        <ChatList />
        <ChatArea />
      </Suspense>
    </div>
  );
}

export default App;
