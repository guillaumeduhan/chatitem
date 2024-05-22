'use client';
import { useHelpers } from "@/lib/useHelpers";
export default function UserItem({ name, message = "Oui, j'ai compris que tu voulais apprendre le Javascript et c'est pour ça que j'ai fait un cours complet", small }: any) {
  const { trimString } = useHelpers();
  return <div className="flex items-center justify-center gap-2">
    <div className={`bg-black flex items-center justify-center text-white font-bold rounded-full ${small ? 'min-h-8 min-w-8' : 'min-h-12 min-w-12'}`}>
      {name[0]}
    </div>
    <div className="grow">
      <p className="font-[500] text-lg text-base text-black">{name}</p>
      {!small && <p>{trimString(message)}</p>}
      {small && <p className="text-xs text-neutral-400">Last seen 1 hour ago</p>}
    </div>
  </div>;
}