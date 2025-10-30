"use client";

import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

export default function useSocket() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string);
    socketRef.current = socket;

    socket.on("connect", () => console.log("Connected"));
    socket.on("disconnect", () => console.log("Disconnected"));
    socket.on("message", (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    });

    console.log(process.env.NEXT_PUBLIC_SERVER_URL)
    return () => {
      socket.disconnect();
    };
  }, []);

  function sendMessage() {
    if (!input.trim() || !socketRef.current) return;
    socketRef.current.emit("message", input);
    setInput("");
  }

  return { input, setInput, sendMessage, messages };
}
