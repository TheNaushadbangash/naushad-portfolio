const questions = [
  "Who is Muhammad Naushad?",
  "What are your skills?",
  "Show your projects",
  "How can I contact you?",
];

function SuggestedQuestions({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 p-3 border-b border-gray-700">
      {questions.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded-full text-xs transition"
        >
          {q}
        </button>
      ))}
    </div>
  );
}

export default SuggestedQuestions;
