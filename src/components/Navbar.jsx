import { useEffect, useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-xl border-b border-cyan-500/20 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* ================= NAVBAR MAIN ================= */}
        <div className="h-20 flex items-center">
          {/* ================= LOGO ================= */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block"
            >
              Naushad.
            </a>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`
                    relative
                    py-2
                    text-sm
                    lg:text-base
                    font-medium
                    transition-all
                    duration-300

                    ${
                      active === link.id
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:bg-gradient-to-r
                    after:from-cyan-400
                    after:to-blue-500
                    after:transition-all
                    after:duration-300

                    ${
                      active === link.id
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* ================= DESKTOP CV BUTTON ================= */}
          <div className="hidden md:flex flex-shrink-0">
            <a
              href="/Naushad-CV.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-gray-700 text-xl hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${open ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-gray-900/95 border border-gray-800 rounded-2xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className={`
                  block
                  px-4
                  py-3
                  rounded-xl
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active === link.id
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                  }
                `}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile CV */}
            <a
              href="/Naushad-CV.pdf"
              download
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
