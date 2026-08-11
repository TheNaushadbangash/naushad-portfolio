import { useState, useRef, useEffect } from "react";
import { askAI } from "../services/openrouter";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [displayText, setDisplayText] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm Muhammad Naushad's AI Assistant.\nAsk me anything about me, my projects or frontend development.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };
    
    

    setMessages((prev) => [...prev, userMessage]);

    const question = message;
    setMessage("");

    setLoading(true);

    const reply = await askAI(question);

    setLoading(false);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: reply,
      },
    ]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl shadow-2xl hover:scale-110 transition z-50"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-8 w-96 h-[550px] bg-gray-900 border border-cyan-500 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          {/* Header */}

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white font-bold text-lg">
            🤖 Naushad AI Assistant
          </div>

          <div className="flex flex-wrap gap-2 p-3 border-b border-gray-700">
            <button
              onClick={() => setMessage("Who is Muhammad Naushad?")}
              className="bg-cyan-600 px-3 py-1 rounded-full text-xs hover:bg-cyan-700"
            >
              👤 About
            </button>

            <button
              onClick={() => setMessage("What skills does Naushad have?")}
              className="bg-cyan-600 px-3 py-1 rounded-full text-xs hover:bg-cyan-700"
            >
              🚀 Skills
            </button>

            <button
              onClick={() => setMessage("Show Naushad projects")}
              className="bg-cyan-600 px-3 py-1 rounded-full text-xs hover:bg-cyan-700"
            >
              💻 Projects
            </button>

            <button
              onClick={() => setMessage("How can I contact Naushad?")}
              className="bg-cyan-600 px-3 py-1 rounded-full text-xs hover:bg-cyan-700"
            >
              📧 Contact
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-cyan-600 ml-auto max-w-[80%]"
                    : "bg-gray-700 mr-auto max-w-[80%]"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-700 mr-auto max-w-[80%] p-3 rounded-xl animate-pulse">
                🤖 Thinking...
              </div>
            )}
          </div>

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
        </div>
      )}
    </>
  );
}

export default ChatBot;
