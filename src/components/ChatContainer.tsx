"use client";

import { useEffect, useState } from "react";
import { sendMessage, fetchHistory } from "@/lib/api";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function ChatContainer() {
  const [messages, setMessages] = useState<any[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedSession = localStorage.getItem("sessionId");
    if (savedSession) {
      setSessionId(savedSession);
      fetchHistory(savedSession).then(setMessages).catch(() => {});
    }
  }, []);

  async function handleSend(text: string) {
    if (!text || loading) return;

    setLoading(true);

    setMessages((prev) => [...prev, { sender: "user", text }]);

    try {
      const res = await sendMessage({ message: text, sessionId: sessionId || undefined });

      if (!sessionId) {
        localStorage.setItem("sessionId", res.sessionId);
        setSessionId(res.sessionId);
      }

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: res.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto border bg-[#D6D9C5] rounded-lg h-[600px] flex flex-col">
      <MessageList messages={messages} loading={loading} />
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
}
