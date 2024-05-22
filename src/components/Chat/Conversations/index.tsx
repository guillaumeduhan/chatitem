"use client";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";
import ConversationItem from "./Item";
import Start from "./Start";

export default function Conversations({
  conversations, selected, setSelected
}: any) {
  return <div className="flex flex-col w-full h-full relative max-w-[300px] bg-white overflow-hidden border-r">
    <header className="flex items-center gap-2 justify-center p-4 border-b min-h-[73px]">
      <Input placeholder="Search for a conversation..." />
      <Settings />
    </header>
    <div className="grow overflow-auto">
      {conversations.length === 0 && <Start />}
      {conversations.length > 0 && conversations.map((conversation: any) => <div key={conversation.id} onClick={() => setSelected(conversation)}>
        <ConversationItem {...{
          conversation, selected: selected ? selected.id === conversation.id : null
        }} />
      </div>)}
    </div>
  </div>;
}