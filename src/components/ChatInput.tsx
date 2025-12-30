"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
  disabled,
}: {
  onSend: (text: string) => void;
  disabled: boolean;
}) {
  const [text, setText] = useState("");

  function submit() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="border-t p-3 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        disabled={disabled}
        className="flex-1  border-2 text-black border-black rounded px-3 py-2 text-sm"
        placeholder="Type your message…"
      />
      <button
        onClick={submit}
        disabled={disabled}
        className="px-4 py-2 bg-gray-900 text-white rounded text-sm disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
}
