'use client';
import { useState } from "react";
import Conversations from "./Conversations";
import Messages from "./Messages";

export default function Chat({
  conversations, messages, users
}: any) {
  const [selected, setSelected] = useState<any>(undefined);
  return <div className="w-full h-full flex border overflow-hidden z-50 rounded">
    <Conversations {...{ conversations, users, selected, setSelected }} />
    <Messages {...{ messages, users, selected, setSelected }} />
  </div>;
}