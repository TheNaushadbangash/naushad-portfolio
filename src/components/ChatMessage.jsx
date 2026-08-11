function ChatMessage({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } animate-fadeIn`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg whitespace-pre-wrap ${
          isUser ? "bg-cyan-600 text-white" : "bg-gray-700 text-white"
        }`}
      >
        <div className="text-xs opacity-70 mb-1">
          {isUser ? "👤 You" : "🤖 Naushad AI"}
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
