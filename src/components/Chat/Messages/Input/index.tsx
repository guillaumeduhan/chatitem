'use client';

import { Input } from "@/components/ui/input";
import { Paperclip } from "lucide-react";

export default function MessageInput() {
  return <div className="w-full flex items-center gap-2">
    <Paperclip className="cursor-pointer" />
    <Input placeholder="Type Enter to send your message..." />
  </div>;
}