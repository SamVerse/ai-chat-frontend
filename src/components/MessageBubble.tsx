export default function MessageBubble({
  message,
}: {
  message: { sender: string; text: string };
}) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-3 py-2 rounded-lg text-sm max-w-[75%]
        ${
          isUser
            ? "bg-gray-900 text-white"
            : "bg-[#038C25] text-white"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
