import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20 text-white py-4 sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] cursor-pointer">
          Naushad.
        </h2>

        <ul className="hidden md:flex gap-6 text-gray-300">
          <li>
            <a
              href="#home"
              className={`relative px-1 py-1 transition-all duration-300 hover:text-cyan-400 hover:scale-110 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full ${
                active === "home"
                  ? "text-cyan-400 after:w-full font-semibold"
                  : "text-gray-300"
              }`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`relative px-1 py-1 transition-all duration-300 hover:text-cyan-400 hover:scale-110 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full ${
                active === "About"
                  ? "text-cyan-400 after:w-full font-semibold"
                  : "text-gray-300"
              }`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`relative px-1 py-1 transition-all duration-300 hover:text-cyan-400 hover:scale-110 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full ${
                active === "skills"
                  ? "text-cyan-400 after:w-full font-semibold"
                  : "text-gray-300"
              }`}
            >
              skills
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`relative px-1 py-1 transition-all duration-300 hover:text-cyan-400 hover:scale-110 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full ${
                active === "projects"
                  ? "text-cyan-400 after:w-full font-semibold"
                  : "text-gray-300"
              }`}
            >
              projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`relative px-1 py-1 transition-all duration-300 hover:text-cyan-400 hover:scale-110 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full ${
                active === "contacts"
                  ? "text-cyan-400 after:w-full font-semibold"
                  : "text-gray-300"
              }`}
            >
              contact
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Naushad-CV.pdf"
            download
            className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full text-xl hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            <FaDownload />
          </a>
        </div>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          <span className="transition duration-300 hover:text-cyan-400">
            ☰
          </span>
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-5 bg-gray-900 text-white animate-[fadeIn_.4s_ease]">
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>

          <li>
            <a
              href="/Naushad-CV.pdf"
              download
              className="bg-gray-600 px-3 py-2 rounded-lg inline-flex items-center gap-2 text-white"
            >
              <FaDownload />
              Download CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
