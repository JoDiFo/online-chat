import { Sidebar } from "@/widgets/Sidebar";
import { ChatList } from "@/widgets/ChatList";
import { ChatArea } from "@/widgets/ChatArea";

import "./styles/index.scss";

function App() {
  return (
    <div className="content">
      <Sidebar />
      <ChatList />
      <ChatArea />
    </div>
  );
}

export default App;
