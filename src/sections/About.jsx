import { FaCode, FaLaptopCode, FaReact, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="relative py-24 px-5 sm:px-6 scroll-mt-24 bg-gray-900 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-[-120px] w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-[-120px] w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Code Symbols */}

      <div className="absolute top-20 left-[8%] text-5xl text-cyan-400/10 font-mono animate-bounce hidden md:block">
        {"</>"}
      </div>

      <div className="absolute bottom-20 right-[8%] text-6xl text-blue-400/10 font-mono animate-pulse hidden md:block">
        {"{ }"}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Get to know me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT - Developer Card */}

          <div className="relative group">
            {/* Glow */}

            <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>

            <div
              className="
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-cyan-500/20
                rounded-3xl
                p-8
                sm:p-10
                hover:border-cyan-400/50
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Icon */}

              <div className="flex items-center gap-5 mb-7">
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600
                    flex
                    items-center
                    justify-center
                    text-3xl
                    shadow-lg
                    shadow-cyan-500/30
                    animate-pulse
                  "
                >
                  <FaLaptopCode />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Frontend Developer
                  </h3>

                  <p className="text-cyan-400 text-sm mt-1">
                    React • JavaScript • UI Development
                  </p>
                </div>
              </div>

              {/* Description */}

              <p className="text-gray-300 leading-8 text-base sm:text-lg">
                I'm a passionate frontend developer and Computer Science student
                who enjoys building modern, responsive and user-friendly web
                applications.
              </p>

              <p className="text-gray-400 leading-8 mt-5">
                I mainly work with React.js, JavaScript, HTML, CSS, Tailwind CSS
                and Bootstrap. I also enjoy exploring backend development,
                databases and AI-powered applications.
              </p>

              {/* Tech Icons */}

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm hover:bg-cyan-500/20 transition">
                  React.js
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm hover:bg-blue-500/20 transition">
                  JavaScript
                </span>

                <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm hover:bg-purple-500/20 transition">
                  Tailwind CSS
                </span>

                <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm hover:bg-orange-500/20 transition">
                  HTML / CSS
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT - Animated Info */}

          <div className="space-y-5">
            {/* Card 1 */}

            <div
              className="
                group
                flex
                items-center
                gap-5
                p-6
                rounded-2xl
                bg-white/5
                border
                border-gray-800
                hover:border-cyan-400/40
                hover:bg-cyan-500/5
                hover:translate-x-2
                transition-all
                duration-500
              "
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                <FaCode />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Clean & Modern Code
                </h3>

                <p className="text-gray-400 mt-1">
                  Building reusable React components and clean user interfaces.
                </p>
              </div>
            </div>

            {/* Card 2 */}

            <div
              className="
                group
                flex
                items-center
                gap-5
                p-6
                rounded-2xl
                bg-white/5
                border
                border-gray-800
                hover:border-blue-400/40
                hover:bg-blue-500/5
                hover:translate-x-2
                transition-all
                duration-500
              "
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                <FaReact />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  React Development
                </h3>

                <p className="text-gray-400 mt-1">
                  Creating interactive and responsive React applications.
                </p>
              </div>
            </div>

            {/* Card 3 */}

            <div
              className="
                group
                flex
                items-center
                gap-5
                p-6
                rounded-2xl
                bg-white/5
                border
                border-gray-800
                hover:border-purple-400/40
                hover:bg-purple-500/5
                hover:translate-x-2
                transition-all
                duration-500
              "
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                <FaRocket />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Always Learning
                </h3>

                <p className="text-gray-400 mt-1">
                  Exploring modern technologies, AI, backend and databases.
                </p>
              </div>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="text-center p-5 rounded-2xl bg-white/5 border border-gray-800 hover:border-cyan-400/40 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">
                  React
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Development
                </p>
              </div>

              <div className="text-center p-5 rounded-2xl bg-white/5 border border-gray-800 hover:border-blue-400/40 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                  UI
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Design</p>
              </div>

              <div className="text-center p-5 rounded-2xl bg-white/5 border border-gray-800 hover:border-purple-400/40 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-400">
                  AI
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Exploring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
