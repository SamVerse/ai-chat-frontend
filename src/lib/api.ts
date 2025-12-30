const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function sendMessage({
  message,
  sessionId,
}: {
  message: string;
  sessionId?: string;
}) {
  const res = await fetch(`${API_BASE}/chat/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, sessionId }),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
}

export async function fetchHistory(sessionId: string) {
  const res = await fetch(`${API_BASE}/chat/history/${sessionId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch history");
  }

  return res.json();
}
