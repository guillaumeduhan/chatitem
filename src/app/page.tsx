'use client';
import Chat from "@/components/Chat";
import { useState } from "react";

export default function Home() {
  const [conversations, setConversations] = useState([
    {
      id: "a03d68be-db59-4926-98f3-6c9d8f217838",
      created_at: "2024-03-29 15:41:09.900786+00",
      messages: [
        {
          content: "Salut comment vas-tu?",
          created_at: "2024-03-29 15:41:09.900786+00",
          user: {
            full_name: "Aurélia Dubois"
          },
          time: "2024-03-29 15:41:09.900786+00",
        },
        {
          content: "Ça va bien, merci! Et toi?",
          created_at: "2024-03-29 15:42:15.900786+00",
          user: {
            full_name: "Guillaume Duhan"
          },
          time: "2024-03-29 15:42:15.900786+00",
        },
        {
          content: "Je vais bien aussi. Tu as des plans pour ce week-end?",
          created_at: "2024-03-29 15:43:30.900786+00",
          user: {
            full_name: "Aurélia Dubois"
          },
          time: "2024-03-29 15:43:30.900786+00",
        }
      ]
    }, {
      id: "b45e28be-cc19-4c56-a5f1-1c0f3d317bcf",
      created_at: "2024-04-01 08:15:23.123456+00",
      messages: [
        {
          content: "Bonjour tout le monde!",
          created_at: "2024-04-01 08:15:23.123456+00",
          user: {
            full_name: "Marie Laurent"
          },
          time: "2024-04-01 08:15:23.123456+00",
        },
        {
          content: "Salut Marie! Comment ça va?",
          created_at: "2024-04-01 08:16:45.123456+00",
          user: {
            full_name: "Alex Dupont"
          },
          time: "2024-04-01 08:16:45.123456+00",
        },
        {
          content: "Très bien, merci. Quoi de neuf?",
          created_at: "2024-04-01 08:17:58.123456+00",
          user: {
            full_name: "Marie Laurent"
          },
          time: "2024-04-01 08:17:58.123456+00",
        },
        {
          content: "Pas grand-chose, juste au boulot.",
          created_at: "2024-04-01 08:18:50.123456+00",
          user: {
            full_name: "Alex Dupont"
          },
          time: "2024-04-01 08:18:50.123456+00",
        }
      ]
    }, {
      id: "c67d49ce-ed30-4d73-b8a9-5bda6c1d9f2a",
      created_at: "2024-05-15 20:05:10.654321+00",
      messages: [
        {
          content: "Hello! Est-ce que tu as fini le projet?",
          created_at: "2024-05-15 20:05:10.654321+00",
          user: {
            full_name: "Paul Martin"
          },
          time: "2024-05-15 20:05:10.654321+00",
        },
        {
          content: "Pas encore, je suis toujours en train de travailler dessus.",
          created_at: "2024-05-15 20:06:25.654321+00",
          user: {
            full_name: "Sophie Bernard"
          },
          time: "2024-05-15 20:06:25.654321+00",
        },
        {
          content: "Besoin d'un coup de main?",
          created_at: "2024-05-15 20:07:40.654321+00",
          user: {
            full_name: "Paul Martin"
          },
          time: "2024-05-15 20:07:40.654321+00",
        },
        {
          content: "Oui, ce serait génial, merci!",
          created_at: "2024-05-15 20:08:55.654321+00",
          user: {
            full_name: "Sophie Bernard"
          },
          time: "2024-05-15 20:08:55.654321+00",
        }
      ]
    }
  ]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  return <main className="w-full container mx-auto p-12 h-screen">
    <Chat {...{ conversations, messages, users }} />
  </main>
}
