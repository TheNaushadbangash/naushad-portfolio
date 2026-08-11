import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ message, setMessage, sendMessage }) {
  return (
    <div className="flex border-t border-gray-700">
      <input
        type="text"
        placeholder="Ask anything..."
        className="flex-1 bg-gray-800 text-white p-3 outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
      />

      <button
        onClick={sendMessage}
        className="bg-cyan-600 px-5 text-white hover:bg-cyan-700"
      >
        <FaPaperPlane />
      </button>
    </div>
  );
}

export default ChatInput;
