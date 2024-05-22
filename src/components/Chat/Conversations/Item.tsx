'use client';

import dayjs from 'dayjs';
import UserItem from "../User/Item";

export default function ConversationItem({
  conversation,
  selected
}: any) {
  return <div className="px-3 py-4 border-b flex items-start justify-center gap-2 cursor-pointer transition hover:bg-neutral-100 text-neutral-400 text-sm">
    <div className="grow">
      <UserItem {...{
        name: conversation.messages[0].user.full_name,
        message: conversation.messages[0].content
      }} />
    </div>
    <div className="grid">
      <p className="text-xs">{dayjs(conversation.messages[0].created_at).format('DD/MM')}</p>
    </div>
  </div>;
}