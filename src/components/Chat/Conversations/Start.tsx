'use client';

import { Button } from "@/components/ui/button";
import { Podcast } from "lucide-react";

export default function Start() {
  return <div className="p-6 grid gap-4 gap-2 text-center text-neutral-300">
    <Podcast className="mx-auto w-8 h-8" />
    <p>You have no conversation yet.</p>
    <div>
      <Button>Start one</Button>
    </div>
  </div>
}