"use client";

import MarkdownRenderer from "@/components/comoponents/markdow";
import { Button } from "@/components/ui/button";
import ScrollAnchor from "@/components/ui/ScrollAnchor";
import { Textarea } from "@/components/ui/textarea";
import useSocket from "@/hooks/useSocket";
import { cn } from "@/lib/utils";

export default function ChatPage() {
  const { input, setInput, messages, sendMessage } = useSocket();

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-4">Live Chat</h1>

      <div className="flex-1 overflow-y-auto border rounded p-4 mb-4">
        {messages.map(({ sender, text }, i) => (
          <div
            key={i}
            className={cn(
              "flex mb-2", // flex container for alignment
              sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            <span
              className={cn(
                "px-4 py-2 rounded-2xl overflow-hidden max-w-xs wrap-break-words",
                sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              )}
            >
              {text}
            </span>
          </div>
        ))}

        <ScrollAnchor deps={[messages]} />
      </div>

      <div className="flex items-end gap-6">
        <Textarea
          className="min-h-6"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Type your message..."
        />
        <Button  className="bg-chart-2" onClick={sendMessage}>Send message</Button>
      </div>
    </div>
  );
}
