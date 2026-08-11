import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolioImg from "../assets/images/portfolio.png";
import ecommerceImg from "../assets/images/ecommerce.png";
import todoImg from "../assets/images/todo.png";
import chatbotImg from "../assets/images/ai-chatbot.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: portfolioImg,
      description:
        "Modern portfolio website built with React, Tailwind CSS, AOS animations and EmailJS.",
      tech: ["React", "Tailwind", "EmailJS"],
      github: "https://github.com/TheNaushadbangash",
      live: "#",
    },
    {
      title: "E-Commerce UI",
      image: ecommerceImg,
      description:
        "Responsive shopping website UI with modern design and reusable React components.",
      tech: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/TheNaushadbangash",
      live: "#",
    },
    {
      title: "Todo App",
      image: todoImg,
      description:
        "Task management application with add, edit and delete functionality.",
      tech: ["React", "JavaScript"],
      github: "https://github.com/TheNaushadbangash",
      live: "#",
    },
    {
      title: "AI Portfolio Assistant",
      image: chatbotImg,
      description:
        "AI-powered portfolio assistant built using React, OpenRouter API and modern UI. It answers questions about my skills, projects and experience.",
      tech: ["React", "OpenRouter", "AI"],
      github: "https://github.com/TheNaushadbangash",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="py-24 bg-gray-900 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Some of my recent React & Frontend projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-2xl overflow-hidden hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500"
            >
              {/* Placeholder Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 leading-7">{project.description}</p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-7">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-3 rounded-lg transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 py-3 rounded-lg transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>  
          ))}
          <div className="text-center mt-14">
            <a
              href="https://github.com/TheNaushadbangash"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
            >
              View More Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
