import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb, SiVite } from "react-icons/si";

function Skills() {
  const frontendSkills = [
    {
      name: "HTML5",
      level: "Advanced",
      icon: <FaHtml5 />,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      level: "Advanced",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      icon: <FaJs />,
      color: "text-yellow-400",
    },
    {
      name: "React.js",
      level: "Advanced",
      icon: <FaReact />,
      color: "text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
    },
    {
      name: "Bootstrap",
      level: "Intermediate",
      icon: <FaBootstrap />,
      color: "text-purple-500",
    },
  ];

  const otherSkills = [
    {
      name: "Next.js",
      level: "Intermediate",
      icon: <SiNextdotjs />,
      color: "text-white",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      icon: <SiMongodb />,
      color: "text-green-500",
    },
    {
      name: "Git",
      level: "Intermediate",
      icon: <FaGitAlt />,
      color: "text-orange-600",
    },
    {
      name: "GitHub",
      level: "Intermediate",
      icon: <FaGithub />,
      color: "text-gray-200",
    },
    {
      name: "Vite",
      level: "Intermediate",
      icon: <SiVite />,
      color: "text-purple-400",
    },
  ];

  const SkillCard = ({ skill }) => {
    return (
      <div
        className="
          group
          relative
          p-5
          sm:p-6
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border
          border-cyan-500/20
          overflow-hidden
          hover:border-cyan-400/60
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
          transition-all
          duration-500
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            -top-16
            -right-16
            w-32
            h-32
            bg-cyan-500/10
            rounded-full
            blur-2xl
            group-hover:bg-cyan-500/20
            transition-all
            duration-500
          "
        ></div>

        {/* Icon */}
        <div
          className={`
            relative
            z-10
            w-14
            h-14
            rounded-2xl
            bg-gray-900
            border
            border-gray-700
            flex
            items-center
            justify-center
            text-3xl
            ${skill.color}
            group-hover:scale-110
            group-hover:rotate-3
            transition-all
            duration-500
          `}
        >
          {skill.icon}
        </div>

        {/* Name */}
        <h3
          className="
            relative
            z-10
            mt-5
            text-xl
            font-bold
            text-white
            group-hover:text-cyan-400
            transition-colors
            duration-300
          "
        >
          {skill.name}
        </h3>

        {/* Level */}
        <div className="relative z-10 flex items-center justify-between mt-3">
          <span className="text-sm text-gray-500">Skill Level</span>

          <span className="text-sm font-semibold text-cyan-400">
            {skill.level}
          </span>
        </div>

        {/* Progress */}
        <div
          className="
            relative
            z-10
            mt-3
            w-full
            h-1.5
            rounded-full
            bg-gray-800
            overflow-hidden
          "
        >
          <div
            className={`
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              transition-all
              duration-1000
              group-hover:w-full
              ${skill.level === "Advanced" ? "w-[85%]" : "w-[65%]"}
            `}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
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
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          top-10
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

      {/* ================= MAIN ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">
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
            My Expertise
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
            Skills & Technologies
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-gray-400
              leading-7
            "
          >
            Technologies and tools I use to build modern, responsive and
            user-friendly web applications.
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

        {/* ================= FRONTEND ================= */}

        <div className="mb-14">
          <div className="flex items-center gap-4 mb-7">
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-cyan-500/10
                border
                border-cyan-500/20
                flex
                items-center
                justify-center
                text-cyan-400
                font-bold
              "
            >
              01
            </div>

            <div>
              <h3 className="text-2xl font-bold">Frontend Development</h3>

              <p className="text-gray-500 text-sm mt-1">
                Core technologies I use to build interfaces
              </p>
            </div>
          </div>

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              sm:gap-6
            "
          >
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* ================= OTHER TECHNOLOGIES ================= */}

        <div>
          <div className="flex items-center gap-4 mb-7">
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-purple-500/10
                border
                border-purple-500/20
                flex
                items-center
                justify-center
                text-purple-400
                font-bold
              "
            >
              02
            </div>

            <div>
              <h3 className="text-2xl font-bold">Tools & Other Technologies</h3>

              <p className="text-gray-500 text-sm mt-1">
                Tools and technologies I am learning and using
              </p>
            </div>
          </div>

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              sm:gap-6
            "
          >
            {otherSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div
          className="
            mt-16
            text-center
            p-6
            rounded-2xl
            bg-white/5
            border
            border-cyan-500/10
          "
        >
          <p className="text-gray-400">
            <span className="text-cyan-400 font-semibold">
              Always learning.
            </span>{" "}
            I'm continuously improving my skills and exploring new technologies
            in web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
