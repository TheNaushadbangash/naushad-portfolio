function Loader() {
  return (
    <div className="fixed inset-0 min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 overflow-hidden z-[9999]">
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
        Muhammad Naushad
      </h1>

      {/* Loading Dots */}
      <div className="mt-7 flex items-center gap-2 sm:gap-3">
        <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-400 animate-bounce"></span>

        <span
          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>

      {/* Loading Text */}
      <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-400 text-center">
        Loading Portfolio...
      </p>
    </div>
  );
}

export default Loader;
