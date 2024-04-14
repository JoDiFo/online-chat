import { useEffect } from "react";

import { Sidebar } from "@/widgets/Sidebar";
import { ChatList } from "@/widgets/ChatList";
import { ChatArea } from "@/widgets/ChatArea";

import "./styles/index.scss";
import { useAppDispatch } from "./redux/hooks";
import { checkAuth } from "@/features/user/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  });

  return (
    <div className="content">
      <Sidebar />
      <ChatList />
      <ChatArea />
    </div>
  );
}

export default App;
