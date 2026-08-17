import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

import portfolioImg from "../assets/images/portfolio.png";
import ecommerceImg from "../assets/images/ecommerce.png";
import todoImg from "../assets/images/todo.png";
import chatbotImg from "../assets/images/ai-chatbot.png";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      image: portfolioImg,
      description:
        "A modern and responsive developer portfolio built to showcase my skills, projects, services and frontend development journey.",
      tech: ["React", "Tailwind CSS", "EmailJS", "AOS"],
      github: "https://github.com/TheNaushadbangash",
      live: "https://naushad-portfolio-ten.vercel.app",
      featured: true,
    },

    {
      title: "E-Commerce Website",
      image: ecommerceImg,
      description:
        "A modern React e-commerce interface with reusable components, product browsing and a responsive shopping experience.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/TheNaushadbangash",
      live: "#",
      featured: false,
    },

    {
      title: "Todo Application",
      image: todoImg,
      description:
        "A simple and responsive task management application with functionality for adding, editing and deleting tasks.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/TheNaushadbangash",
      live: "#",
      featured: false,
    },

    {
      title: "AI Portfolio Assistant",
      image: chatbotImg,
      description:
        "An AI-powered portfolio assistant that helps visitors learn about my skills, projects and frontend development experience.",
      tech: ["React", "OpenRouter API", "Tailwind CSS"],
      github: "https://github.com/TheNaushadbangash",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="
        relative
        py-24
        px-5
        sm:px-6
        bg-gray-900
        text-white
        overflow-hidden
        scroll-mt-24
      "
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div
        className="
          absolute
          top-20
          left-[-180px]
          w-96
          h-96
          bg-cyan-500/10
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div
        className="
          absolute
          bottom-10
          right-[-180px]
          w-96
          h-96
          bg-purple-500/10
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">
          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.25em]
              text-sm
              font-semibold
              mb-3
            "
          >
            My Work
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              mt-5
              leading-7
            "
          >
            Here are some of the projects I have built using modern frontend
            technologies.
          </p>

          <div
            className="
              w-20
              h-1
              mx-auto
              mt-5
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
          ></div>
        </div>

        {/* ================= PROJECT GRID ================= */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                transition-all
                duration-500
                hover:-translate-y-3
                ${
                  project.featured
                    ? "border-cyan-400/60 shadow-[0_0_35px_rgba(34,211,238,0.15)]"
                    : "border-cyan-500/20 hover:border-cyan-400/50"
                }
              `}
            >
              {/* FEATURED BADGE */}

              {project.featured && (
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    z-20
                    flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-cyan-500
                    text-black
                    text-xs
                    font-bold
                    shadow-lg
                  "
                >
                  <FaStar />
                  Featured
                </div>
              )}

              {/* ================= IMAGE ================= */}

              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-transparent
                    opacity-70
                    group-hover:opacity-90
                    transition-all
                    duration-500
                  "
                ></div>

                {/* VIEW PROJECT */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      bg-white
                      text-gray-900
                      font-semibold
                      hover:bg-cyan-400
                      hover:scale-105
                      transition-all
                    "
                  >
                    <FaExternalLinkAlt />
                    View Project
                  </a>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-3
                    group-hover:text-cyan-400
                    transition-colors
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    leading-7
                    text-sm
                    flex-1
                  "
                >
                  {project.description}
                </p>

                {/* ================= TECHNOLOGIES ================= */}

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-300
                        text-xs
                        font-medium
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* ================= BUTTONS ================= */}

                <div className="flex gap-3 mt-7">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-gray-800
                      border
                      border-gray-700
                      hover:border-cyan-400
                      hover:bg-gray-700
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      font-semibold
                      hover:from-blue-600
                      hover:to-purple-600
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIEW MORE ================= */}

        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/TheNaushadbangash"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-7
              py-3.5
              rounded-full
              border
              border-cyan-500/40
              bg-white/5
              text-cyan-400
              font-semibold
              hover:bg-cyan-500
              hover:text-black
              hover:border-cyan-500
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View More Projects
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
