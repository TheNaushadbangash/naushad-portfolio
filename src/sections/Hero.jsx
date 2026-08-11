import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white px-6"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <div data-aos="zoom-in" className="text-center max-w-3xl relative z-10">
        <img
          src={profile}
          alt="Naushad"
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all duration-500 hover:scale-110 hover:rotate-3 animate-[float_4s_ease-in-out_infinite]"
        />

        <h1 className="text-5xl md:text-6xl font-extrabold font-['Poppins'] bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500 hover:scale-110">
          Hi, I'm Naushad
        </h1>

        <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
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

        <p className="text-lg md:text-xl text-gray-300 leading-8 mb-8 max-w-2xl mx-auto">
          I build modern websites using React, JavaScript, Bootstrap and
          Tailwind CSS.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-110 transition-all duration-300"
          >
            Hire Me
          </a>

          <a
            href="/Naushad-CV.pdf"
            download
            className="px-8 py-3 rounded-full border border-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/TheNaushadbangash"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-2xl hover:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/naushad-khan-0679823b7"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-2xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="mt-10 animate-bounce">
          <a
            href="#about"
            className="text-4xl text-cyan-400 hover:text-white transition"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
