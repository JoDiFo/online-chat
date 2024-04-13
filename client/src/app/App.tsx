import { Sidebar } from "@/widgets/Sidebar";
import { ChatList } from "@/widgets/ChatList";
import { ChatArea } from "@/widgets/ChatArea";

import "./styles/index.scss";
import { useContext, useEffect } from "react";
import { Context } from "..";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      store.checkAuth();
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
