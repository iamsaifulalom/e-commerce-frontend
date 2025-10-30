"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessage = {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: number;
};

export default function MarkdownRenderer() {
  const markdown = `
# Welcome to Fyndlet

Check these products:
- [T-shirt](/products/tshirt)
- [Mouse](/products/mouse)

Enjoy shopping! 🚀
`;

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
}
