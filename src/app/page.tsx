import ChatContainer from "@/components/ChatContainer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#2F4032]">
      <h3 className="text-[#f2ffbf] text-2xl font-semibold mb-4">SUPPORT CHAT</h3>
      <ChatContainer />
    </main>
  );
}
