import { useEffect, useRef, useState } from "react";
import { askAI } from "../services/openrouter";

import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaUser,
  FaTrash,
  FaCopy,
  FaCheck,
  FaBolt,
  FaCircle,
  FaChevronDown,
} from "react-icons/fa";

const STORAGE_KEY = "naushad-ai-chat";

const getTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const createWelcomeMessage = () => ({
  id: `welcome-${Date.now()}`,
  sender: "bot",
  text: "👋 Hi! I'm Naushad's AI Assistant.\n\nI can help you learn about Naushad, his skills, projects, frontend development, or how to contact him.",
  time: getTime(),
});

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // =========================
  // LOAD CHAT
  // =========================

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }

      return [createWelcomeMessage()];
    } catch (error) {
      console.error("Failed to load chat:", error);
      return [createWelcomeMessage()];
    }
  });

  // =========================
  // SAVE CHAT
  // =========================

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("Failed to save chat:", error);
    }
  }, [messages]);

  // =========================
  // AUTO SCROLL
  // =========================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // =========================
  // FOCUS INPUT
  // =========================

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, [open]);

  // =========================
  // ESCAPE TO CLOSE
  // =========================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  // =========================
  // SEND MESSAGE
  // =========================

  const sendMessage = async (customMessage = null) => {
    const text = (customMessage ?? message).trim();

    if (!text || loading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const reply = await askAI(text);

      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text:
          reply || "Sorry, I couldn't generate a response. Please try again.",
        time: getTime(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("AI error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          sender: "bot",
          text: "⚠️ Sorry, I'm having trouble connecting right now. Please try again in a moment.",
          time: getTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // QUICK QUESTIONS
  // =========================

  const quickQuestions = [
    {
      label: "About Naushad",
      icon: "👤",
      question: "Who is Muhammad Naushad?",
    },
    {
      label: "Skills",
      icon: "⚡",
      question: "What skills does Naushad have?",
    },
    {
      label: "Projects",
      icon: "💻",
      question: "What projects has Naushad built?",
    },
    {
      label: "Hire Me",
      icon: "🚀",
      question: "Can I hire Naushad for a frontend project?",
    },
    {
      label: "Contact",
      icon: "📧",
      question: "How can I contact Naushad?",
    },
  ];

  // =========================
  // CLEAR CHAT
  // =========================

  const clearChat = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear this conversation?",
    );

    if (!confirmed) return;

    const welcome = createWelcomeMessage();

    setMessages([welcome]);

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // =========================
  // COPY MESSAGE
  // =========================

  const copyMessage = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // =========================
  // KEYBOARD
  // =========================

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  // =========================
  // TOGGLE CHAT
  // =========================

  const toggleChat = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* =====================================================
          FLOATING AI BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={toggleChat}
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
        title={open ? "Close AI Assistant" : "Open AI Assistant"}
        className="
          fixed
          bottom-5
          right-5
          sm:bottom-7
          sm:right-7
          z-[9999]

          w-14
          h-14
          sm:w-16
          sm:h-16

          rounded-full

          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-purple-600

          text-white
          text-xl
          sm:text-2xl

          flex
          items-center
          justify-center

          shadow-[0_0_35px_rgba(34,211,238,0.45)]

          hover:scale-110
          active:scale-95

          transition-all
          duration-300
        "
      >
        {open ? <FaTimes /> : <FaRobot />}

        {!open && (
          <>
            <span
              className="
                absolute
                inset-0
                rounded-full
                border
                border-cyan-300/50
                animate-ping
                pointer-events-none
              "
            />

            <span
              className="
                absolute
                -top-1
                -right-1
                w-4
                h-4
                rounded-full
                bg-green-400
                border-2
                border-gray-950
              "
            />
          </>
        )}
      </button>

      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      {open && (
        <div
          role="dialog"
          aria-label="Naushad AI Assistant"
          className="
            fixed
            z-[9998]

            bottom-24
            right-3

            sm:bottom-28
            sm:right-7

            w-[calc(100vw-24px)]
            sm:w-[400px]

            h-[min(700px,calc(100vh-115px))]

            min-h-[450px]

            bg-[#070b14]

            border
            border-cyan-400/20

            rounded-3xl

            shadow-[0_0_80px_rgba(6,182,212,0.18)]

            overflow-hidden

            flex
            flex-col

            backdrop-blur-2xl

            animate-[chatOpen_0.25s_ease-out]
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              relative
              shrink-0

              px-4
              py-4

              bg-gradient-to-r
              from-[#0e1728]
              via-[#101827]
              to-[#111a2e]

              border-b
              border-white/10
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2

                w-48
                h-20

                bg-cyan-500/10

                blur-3xl

                pointer-events-none
              "
            />

            <div className="relative flex items-center justify-between">
              {/* AI Identity */}

              <div className="flex items-center gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div
                    className="
                      w-11
                      h-11

                      rounded-2xl

                      bg-gradient-to-br
                      from-cyan-400
                      to-blue-600

                      flex
                      items-center
                      justify-center

                      text-white

                      shadow-[0_0_20px_rgba(34,211,238,0.25)]
                    "
                  >
                    <FaRobot className="text-xl" />
                  </div>

                  <span
                    className="
                      absolute
                      -right-1
                      -bottom-1

                      w-3.5
                      h-3.5

                      rounded-full

                      bg-green-400

                      border-2
                      border-[#101827]
                    "
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-white text-base sm:text-lg truncate">
                    Naushad AI
                  </h3>

                  <div className="flex items-center gap-1.5">
                    <FaCircle className="text-green-400 text-[7px]" />

                    <span className="text-xs text-gray-400">
                      AI Portfolio Assistant
                    </span>
                  </div>
                </div>
              </div>

              {/* Header Actions */}

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearChat}
                  aria-label="Clear conversation"
                  title="Clear conversation"
                  className="
                    w-9
                    h-9

                    rounded-xl

                    text-gray-400

                    hover:text-red-400
                    hover:bg-red-500/10

                    flex
                    items-center
                    justify-center

                    transition
                  "
                >
                  <FaTrash className="text-sm" />
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chatbot"
                  title="Close"
                  className="
                    w-9
                    h-9

                    rounded-xl

                    text-gray-400

                    hover:text-white
                    hover:bg-white/10

                    flex
                    items-center
                    justify-center

                    transition
                  "
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              QUICK QUESTIONS
          ================================================= */}

          <div
            className="
              shrink-0

              px-3
              py-3

              bg-[#0a111e]

              border-b
              border-white/5
            "
          >
            <button
              type="button"
              onClick={() => setShowQuickQuestions((prev) => !prev)}
              className="
                w-full
                flex
                items-center
                justify-between
                mb-2
              "
            >
              <div className="flex items-center gap-2">
                <FaBolt className="text-yellow-400 text-xs" />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    text-gray-400
                    uppercase
                    tracking-wider
                  "
                >
                  Quick questions
                </p>
              </div>

              <FaChevronDown
                className={`
                  text-gray-500
                  text-xs
                  transition-transform
                  duration-300
                  ${showQuickQuestions ? "rotate-180" : ""}
                `}
              />
            </button>

            {showQuickQuestions && (
              <div
                className="
                  flex
                  gap-2
                  overflow-x-auto
                  pb-1

                  scrollbar-thin
                  scrollbar-thumb-gray-700
                  scrollbar-track-transparent
                "
              >
                {quickQuestions.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    disabled={loading}
                    onClick={() => sendMessage(item.question)}
                    className="
                      shrink-0

                      px-3
                      py-2

                      rounded-xl

                      bg-white/[0.04]

                      border
                      border-white/10

                      text-gray-300
                      text-xs

                      hover:bg-cyan-500/10
                      hover:border-cyan-400/30
                      hover:text-cyan-300

                      disabled:opacity-40

                      transition-all
                      duration-200
                    "
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* =================================================
              MESSAGES
          ================================================= */}

          <div
            className="
              flex-1

              overflow-y-auto

              px-3
              sm:px-4

              py-5

              space-y-5

              scrollbar-thin
              scrollbar-thumb-gray-700
              scrollbar-track-transparent
            "
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`
                  flex
                  gap-2.5
                  items-end

                  ${msg.sender === "user" ? "justify-end" : "justify-start"}
                `}
              >
                {/* BOT AVATAR */}

                {msg.sender === "bot" && (
                  <div
                    className="
                      shrink-0

                      w-8
                      h-8

                      rounded-xl

                      bg-gradient-to-br
                      from-cyan-400
                      to-blue-600

                      flex
                      items-center
                      justify-center

                      text-white
                      text-xs

                      shadow-lg
                    "
                  >
                    <FaRobot />
                  </div>
                )}

                {/* MESSAGE */}

                <div
                  className={`
                    group
                    max-w-[82%]

                    flex
                    flex-col

                    ${msg.sender === "user" ? "items-end" : "items-start"}
                  `}
                >
                  <div
                    className={`
                      relative

                      px-4
                      py-3

                      rounded-2xl

                      text-sm
                      leading-6

                      whitespace-pre-wrap
                      break-words

                      ${
                        msg.sender === "user"
                          ? `
                            bg-gradient-to-br
                            from-cyan-500
                            to-blue-600

                            text-white

                            rounded-br-md

                            shadow-[0_5px_20px_rgba(6,182,212,0.15)]
                          `
                          : `
                            bg-[#151e2e]

                            border
                            border-white/[0.07]

                            text-gray-200

                            rounded-bl-md
                          `
                      }
                    `}
                  >
                    {msg.text}

                    {/* COPY */}

                    {msg.sender === "bot" && (
                      <button
                        type="button"
                        onClick={() => copyMessage(msg.text, msg.id)}
                        title="Copy response"
                        aria-label="Copy response"
                        className="
                          absolute

                          -right-9
                          bottom-0

                          w-7
                          h-7

                          rounded-lg

                          bg-gray-800

                          border
                          border-gray-700

                          text-gray-500

                          hover:text-cyan-400
                          hover:border-cyan-500/30

                          flex
                          items-center
                          justify-center

                          opacity-0
                          group-hover:opacity-100

                          transition

                          hidden
                          sm:flex
                        "
                      >
                        {copiedId === msg.id ? (
                          <FaCheck className="text-green-400 text-xs" />
                        ) : (
                          <FaCopy className="text-xs" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* TIME */}

                  <span
                    className={`
                      text-[10px]
                      text-gray-600
                      mt-1

                      ${msg.sender === "user" ? "mr-1" : "ml-1"}
                    `}
                  >
                    {msg.time}
                  </span>
                </div>

                {/* USER AVATAR */}

                {msg.sender === "user" && (
                  <div
                    className="
                      shrink-0

                      w-8
                      h-8

                      rounded-xl

                      bg-gray-800

                      border
                      border-gray-700

                      flex
                      items-center
                      justify-center

                      text-gray-400
                      text-xs
                    "
                  >
                    <FaUser />
                  </div>
                )}
              </div>
            ))}

            {/* =================================================
                TYPING INDICATOR
            ================================================= */}

            {loading && (
              <div className="flex items-end gap-2.5">
                <div
                  className="
                    w-8
                    h-8

                    rounded-xl

                    bg-gradient-to-br
                    from-cyan-400
                    to-blue-600

                    flex
                    items-center
                    justify-center

                    text-white
                    text-xs
                  "
                >
                  <FaRobot />
                </div>

                <div
                  className="
                    px-4
                    py-3

                    rounded-2xl
                    rounded-bl-md

                    bg-[#151e2e]

                    border
                    border-white/[0.07]
                  "
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />

                    <span
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />

                    <span
                      className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* =================================================
              INPUT
          ================================================= */}

          <div
            className="
              shrink-0

              p-3

              bg-[#0a111e]

              border-t
              border-white/5
            "
          >
            <div
              className="
                flex
                items-end
                gap-2

                p-1.5

                rounded-2xl

                bg-[#151e2e]

                border
                border-white/10

                focus-within:border-cyan-400/40

                focus-within:shadow-[0_0_20px_rgba(34,211,238,0.06)]

                transition-all
              "
            >
              <textarea
                ref={inputRef}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                rows={1}
                placeholder={
                  loading ? "AI is thinking..." : "Ask me anything..."
                }
                className="
                  flex-1
                  min-w-0

                  resize-none

                  max-h-24

                  bg-transparent

                  text-white
                  text-sm

                  px-3
                  py-2.5

                  outline-none

                  placeholder:text-gray-600

                  disabled:opacity-50
                "
              />

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={loading || !message.trim()}
                aria-label="Send message"
                title="Send message"
                className="
                  shrink-0

                  w-10
                  h-10

                  rounded-xl

                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-600

                  text-white

                  flex
                  items-center
                  justify-center

                  hover:scale-105
                  active:scale-95

                  disabled:opacity-30
                  disabled:hover:scale-100

                  transition-all
                "
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-2">
              <span className="text-[10px] text-gray-600">Powered by</span>

              <span className="text-[10px] text-cyan-500/70 font-medium">
                OpenRouter AI
              </span>

              <span className="text-[10px] text-gray-700">•</span>

              <span className="text-[10px] text-gray-600">Enter to send</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
