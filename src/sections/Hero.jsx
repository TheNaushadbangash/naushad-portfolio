import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb } from "react-icons/si";

import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-black
        via-gray-900
        to-blue-950
        text-white
        px-5
        sm:px-6
        pt-20
        sm:pt-24
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          bg-cyan-500/20
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div
        className="
          absolute
          bottom-10
          right-10
          w-80
          h-80
          bg-blue-600/20
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-96
          h-96
          bg-purple-500/10
          rounded-full
          blur-3xl
          animate-ping
        "
      ></div>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-20
          items-center
          py-10
          sm:py-14
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div data-aos="fade-right" className="text-center lg:text-left">
          {/* ================================================= */}
          {/* MOBILE ANIMATED TECH AREA */}
          {/* ================================================= */}

          <div
            className="
              lg:hidden
              relative
              h-32
              sm:h-36
              w-full
              flex
              items-center
              justify-center
              mb-5
            "
          >
            {/* Center Glow */}

            <div
              className="
                absolute
                w-24
                h-24
                rounded-full
                bg-cyan-500/10
                blur-2xl
                animate-pulse
              "
            ></div>

            {/* Outer Ring */}

            <div
              className="
                absolute
                w-24
                h-24
                rounded-full
                border
                border-cyan-400/20
                animate-[spin_10s_linear_infinite]
              "
            ></div>

            {/* Inner Ring */}

            <div
              className="
                absolute
                w-16
                h-16
                rounded-full
                border
                border-blue-500/20
                animate-[spin_7s_linear_infinite_reverse]
              "
            ></div>

            {/* React */}

            <div
              className="
                absolute
                -translate-x-16
                -translate-y-3
                w-10
                h-10
                rounded-xl
                bg-gray-900/90
                border
                border-cyan-400/30
                flex
                items-center
                justify-center
                text-cyan-400
                text-xl
                shadow-[0_0_20px_rgba(34,211,238,0.2)]
                animate-[float_3s_ease-in-out_infinite]
              "
            >
              <FaReact />
            </div>

            {/* JavaScript */}

            <div
              className="
                absolute
                translate-x-16
                -translate-y-3
                w-10
                h-10
                rounded-xl
                bg-gray-900/90
                border
                border-yellow-400/30
                flex
                items-center
                justify-center
                text-yellow-400
                text-sm
                font-bold
                shadow-[0_0_20px_rgba(250,204,21,0.15)]
                animate-[float_3.5s_ease-in-out_infinite]
              "
            >
              JS
            </div>

            {/* HTML */}

            <div
              className="
                absolute
                -translate-x-9
                translate-y-10
                w-9
                h-9
                rounded-lg
                bg-gray-900/90
                border
                border-orange-500/30
                flex
                items-center
                justify-center
                text-orange-500
                text-lg
                shadow-lg
                animate-[float_4s_ease-in-out_infinite]
              "
            >
              <FaHtml5 />
            </div>

            {/* Tailwind */}

            <div
              className="
                absolute
                translate-x-9
                translate-y-10
                w-9
                h-9
                rounded-lg
                bg-gray-900/90
                border
                border-sky-400/30
                flex
                items-center
                justify-center
                text-sky-400
                text-lg
                shadow-lg
                animate-[float_4.5s_ease-in-out_infinite]
              "
            >
              <SiTailwindcss />
            </div>

            {/* Center */}

            <div
              className="
                relative
                z-10
                w-12
                h-12
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-lg
                shadow-[0_0_30px_rgba(34,211,238,0.5)]
                animate-pulse
              "
            >
              {"</>"}
            </div>
          </div>

          {/* ================= PROFILE IMAGE ================= */}

          <div className="flex justify-center lg:justify-start mb-5">
            <div className="relative">
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-cyan-400/30
                  blur-2xl
                  animate-pulse
                "
              ></div>

              <img
                src={profile}
                alt="Naushad"
                className="
                  relative
                  w-32
                  h-32
                  sm:w-40
                  sm:h-40
                  lg:w-48
                  lg:h-48
                  rounded-full
                  object-cover
                  border-4
                  border-cyan-400
                  shadow-[0_0_35px_rgba(34,211,238,0.7)]
                  transition-all
                  duration-500
                  hover:scale-110
                  hover:rotate-3
                  animate-[float_4s_ease-in-out_infinite]
                "
              />
            </div>
          </div>

          {/* ================= NAME ================= */}

          <h1
            className="
              mt-8
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              font-['Poppins']
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-pink-500
              bg-clip-text
              text-transparent
              drop-shadow-lg
              transition-all
              duration-500
              hover:scale-[1.03]
            "
          >
            Hi, I'm Naushad
          </h1>

          {/* ================= ROLE ================= */}

          <h3
            className="
              mt-5
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-bold
              text-cyan-400
              drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]
            "
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "UI Developer",
                2000,
                "JavaScript Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>

          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              lg:text-xl
              text-gray-300
              leading-8
              max-w-2xl
              mx-auto
              lg:mx-0
            "
          >
            I build modern, responsive and user-friendly websites using React,
            JavaScript, Tailwind CSS and Bootstrap.
          </p>

          {/* ================= BUTTONS ================= */}

          <div
            className="
              mt-8
              flex
              justify-center
              lg:justify-start
              gap-4
              flex-wrap
            "
          >
            <a
              href="#contact"
              className="
                px-7
                sm:px-8
                py-3
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                font-bold
                hover:scale-110
                hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                transition-all
                duration-300
              "
            >
              Hire Me
            </a>

            <a
              href="/Naushad-CV.pdf"
              download
              className="
                px-7
                sm:px-8
                py-3
                rounded-full
                border
                border-cyan-400
                hover:bg-cyan-500
                hover:text-black
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Download CV
            </a>
          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div
            className="
              mt-8
              flex
              justify-center
              lg:justify-start
              gap-5
            "
          >
            <a
              href="https://github.com/TheNaushadbangash"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-13
                h-13
                sm:w-14
                sm:h-14
                flex
                items-center
                justify-center
                rounded-full
                bg-gray-800
                text-2xl
                hover:bg-gray-700
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
                shadow-lg
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/naushad-khan-0679823b7"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-13
                h-13
                sm:w-14
                sm:h-14
                flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-2xl
                hover:bg-blue-700
                hover:scale-110
                transition-all
                duration-300
                shadow-lg
              "
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ================================================= */}
        {/* DESKTOP RIGHT ANIMATED VISUAL */}
        {/* ================================================= */}

        <div
          data-aos="fade-left"
          className="
            hidden
            lg:flex
            relative
            items-center
            justify-center
            min-h-[500px]
          "
        >
          {/* Outer Glow */}

          <div
            className="
              absolute
              w-80
              h-80
              rounded-full
              bg-cyan-500/10
              blur-3xl
              animate-pulse
            "
          ></div>

          {/* Rotating Ring */}

          <div
            className="
              absolute
              w-[360px]
              h-[360px]
              rounded-full
              border
              border-cyan-400/20
              animate-[spin_18s_linear_infinite]
            "
          ></div>

          <div
            className="
              absolute
              w-[300px]
              h-[300px]
              rounded-full
              border
              border-blue-500/20
              animate-[spin_12s_linear_infinite_reverse]
            "
          ></div>

          {/* ================= CODE WINDOW ================= */}

          <div
            className="
              relative
              w-full
              max-w-lg
              rounded-3xl
              bg-gray-950/80
              backdrop-blur-xl
              border
              border-cyan-500/30
              shadow-[0_0_50px_rgba(34,211,238,0.15)]
              overflow-hidden
              hover:border-cyan-400/60
              transition-all
              duration-500
            "
          >
            {/* Window Header */}

            <div
              className="
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                border-gray-800
                bg-white/5
              "
            >
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <span className="text-xs text-gray-500">developer.jsx</span>
            </div>

            {/* Code */}

            <div className="p-6 font-mono text-sm leading-7">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span> = {"{"}
              </p>

              <p className="pl-5">
                <span className="text-blue-400">name</span>:{" "}
                <span className="text-green-400">"Muhammad Naushad"</span>,
              </p>

              <p className="pl-5">
                <span className="text-blue-400">role</span>:{" "}
                <span className="text-green-400">"Frontend Developer"</span>,
              </p>

              <p className="pl-5">
                <span className="text-blue-400">stack</span>: [
              </p>

              <p className="pl-10 text-yellow-300">"React",</p>

              <p className="pl-10 text-yellow-300">"JavaScript",</p>

              <p className="pl-10 text-yellow-300">"Tailwind CSS",</p>

              <p className="pl-10 text-yellow-300">"Bootstrap"</p>

              <p className="pl-5">],</p>

              <p className="pl-5">
                <span className="text-blue-400">passion</span>:{" "}
                <span className="text-green-400">"Building Modern UIs"</span>
              </p>

              <p>{"}"};</p>

              <p className="mt-3">
                <span className="text-purple-400">developer</span>.
                <span className="text-cyan-300">build</span>
                ();
              </p>

              {/* Cursor */}

              <span
                className="
                  inline-block
                  w-2
                  h-5
                  bg-cyan-400
                  ml-1
                  align-middle
                  animate-pulse
                "
              ></span>
            </div>

            {/* Bottom Tech Icons */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-5
                px-5
                py-4
                border-t
                border-gray-800
                bg-white/5
              "
            >
              <FaReact
                className="
                  text-cyan-400
                  text-2xl
                  animate-bounce
                "
              />

              <FaJs
                className="
                  text-yellow-400
                  text-2xl
                "
              />

              <FaHtml5
                className="
                  text-orange-500
                  text-2xl
                "
              />

              <FaCss3Alt
                className="
                  text-blue-500
                  text-2xl
                "
              />

              <SiTailwindcss
                className="
                  text-sky-400
                  text-2xl
                "
              />

              <SiMongodb
                className="
                  text-green-500
                  text-2xl
                "
              />
            </div>
          </div>

          {/* Floating Badge 1 */}

          <div
            className="
              absolute
              -top-2
              right-0
              px-4
              py-2
              rounded-full
              bg-gray-900
              border
              border-cyan-400/30
              text-cyan-400
              text-xs
              font-semibold
              shadow-lg
              animate-bounce
            "
          >
            ⚡ React Developer
          </div>

          {/* Floating Badge 2 */}

          <div
            className="
              absolute
              bottom-4
              left-0
              px-4
              py-2
              rounded-full
              bg-gray-900
              border
              border-purple-400/30
              text-purple-400
              text-xs
              font-semibold
              shadow-lg
              animate-[bounce_3s_infinite]
            "
          >
            🚀 Building Modern UIs
          </div>
        </div>
      </div>

      {/* ================= SCROLL DOWN ================= */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          animate-bounce
        "
      >
        <a
          href="#about"
          className="
            text-3xl
            sm:text-4xl
            text-cyan-400
            hover:text-white
            transition
          "
          aria-label="Scroll to About section"
        >
          ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;
