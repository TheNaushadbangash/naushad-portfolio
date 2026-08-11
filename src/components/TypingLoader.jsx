function TypingLoader() {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-700 rounded-2xl px-4 py-3 shadow-lg">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default TypingLoader;
