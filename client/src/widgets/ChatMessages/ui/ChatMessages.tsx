import { Message } from "@/widgets/Message";
import cls from "./ChatMessages.module.scss";
import { useEffect, useRef } from "react";

export const ChatMessages = () => {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight);
  }, []);

  return (
    <div ref={chatRef} className={cls.ChatMessages}>
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
      <Message messageText="hello" messageType="sent" />
      <Message
        messageText="asdf asdf asdf sadf sadf asdf sadf sadf asdfasdf"
        messageType="received"
      />
      <Message
        messageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at."
        messageType="received"
      />
      <Message messageText="Lorem ipsum dolor sit amet." messageType="sent" />
      <Message messageText="Lorem, ipsum dolor." messageType="sent" />
      <Message
        messageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque hic aperiam voluptate et quia consequuntur exercitationem quis aliquam accusantium ratione!"
        messageType="received"
      />
    </div>
  );
};
