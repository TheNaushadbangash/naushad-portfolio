import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-cyan-500/20">
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/4
          w-72
          h-72
          bg-cyan-500/10
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          right-1/4
          w-80
          h-80
          bg-purple-500/10
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* Main Footer */}

        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}

          <div>
            <h2
              className="
                text-3xl
                font-extrabold
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
                inline-block
              "
            >
              Muhammad Naushad
            </h2>

            <p className="text-gray-400 mt-4 leading-7 max-w-md">
              Frontend Developer focused on building modern, responsive and
              user-friendly web experiences using React, JavaScript and Tailwind
              CSS.
            </p>

            {/* Availability */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                mt-5
                px-4
                py-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/30
                text-green-400
                text-sm
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for opportunities
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>

            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="
                    block
                    text-gray-400
                    hover:text-cyan-400
                    hover:translate-x-2
                    transition-all
                    duration-300
                  "
                >
                  → {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}

          <div>
            <h3 className="text-xl font-bold mb-5">Connect With Me</h3>

            <p className="text-gray-400 mb-5">
              Let's connect and build something amazing together.
            </p>

            <div className="flex gap-4">
              {/* GitHub */}

              <a
                href="https://github.com/TheNaushadbangash"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/5
                  border
                  border-gray-800
                  flex
                  items-center
                  justify-center
                  text-xl
                  hover:bg-cyan-500
                  hover:text-black
                  hover:border-cyan-400
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}

              <a
                href="https://linkedin.com/in/naushad-khan-0679823b7"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/5
                  border
                  border-gray-800
                  flex
                  items-center
                  justify-center
                  text-xl
                  hover:bg-blue-600
                  hover:border-blue-500
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin />
              </a>

              {/* Email */}

              <a
                href="mailto:naushadk789987@gmail.com"
                aria-label="Email"
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/5
                  border
                  border-gray-800
                  flex
                  items-center
                  justify-center
                  text-xl
                  hover:bg-red-500
                  hover:border-red-400
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          <p className="text-gray-500 text-sm text-center px-4 leading-6">
            © {new Date().getFullYear()} Muhammad Naushad. All Rights Reserved.
          </p>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              group
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white/5
              border
              border-gray-800
              text-gray-400
              hover:text-cyan-400
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >
            Back to top
            <FaArrowUp
              className="
                group-hover:-translate-y-1
                transition-transform
                duration-300
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
