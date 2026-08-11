import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Muhammad Naushad
        </h2>

        <p className="text-gray-400 mt-3">
          Frontend Developer | React Developer | JavaScript Enthusiast
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/TheNaushadbangash"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/naushad-khan-0679823b7"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:naushadk789987@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Muhammad Naushad. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
