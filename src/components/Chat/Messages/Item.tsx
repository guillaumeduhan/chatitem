'use client';

import { useState } from "react";

export default function MessageItem() {
  const [isCurrentUser] = useState(true);
  return <div className={`flex ${!isCurrentUser ? 'justify-end' : ''} w-full`}>
    <div className={`${!isCurrentUser ? 'bg-neutral-100 text-black' : 'bg-black text-white'} rounded-full px-3 py-2 shadow`}>
      hello message item
    </div>
  </div>;
}