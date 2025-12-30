import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function MessageList({
  messages,
  loading,
}: {
  messages: any[];
  loading: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.length === 0 && !loading && (
        <div className="text-center text-gray-500 mt-8">
          Hi!... How can we help you today?
        </div>
      )}
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
      {loading && (
        <div className="text-sm text-gray-700">Agent is typing…</div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
