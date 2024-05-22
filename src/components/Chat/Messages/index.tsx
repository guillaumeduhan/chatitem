import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import Start from "../Conversations/Start";
import UserItem from "../User/Item";
import MessageInput from "./Input";
import MessageItem from "./Item";

export default function Messages({ selected, setSelected }: any) {
  const [messages, setMessages]: any = useState([])

  if (!selected) return <div className="w-full h-full flex items-center justify-center">
    <Start />
  </div>

  return <div className="flex flex-col w-full h-full">
    <header className="flex items-center justify-between border-b px-4 min-h-[73px] flex items-center">
      <UserItem {...{ name: selected.messages[0].user.full_name, small: true }} />
      <EllipsisVertical className="cursor-pointer" />
    </header>
    <div className="grow grid gap-2 overflow-auto p-4">
      {messages.map((message: any) => <MessageItem key={message} />)}
    </div>
    <div className="border-t w-full p-4">
      <MessageInput />
    </div>
  </div>;
}