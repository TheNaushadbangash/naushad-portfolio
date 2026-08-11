function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
        Muhammad Naushad
      </h1>

      <div className="mt-8 flex gap-3">
        <span className="w-4 h-4 rounded-full bg-cyan-400 animate-bounce"></span>

        <span
          className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="w-4 h-4 rounded-full bg-purple-500 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>

      <p className="mt-6 text-gray-400 text-lg">Loading Portfolio...</p>
    </div>
  );
}

export default Loader;
