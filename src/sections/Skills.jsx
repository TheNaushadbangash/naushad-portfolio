import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 99 ,
      icon: <FaHtml5 size={45} className="text-orange-500" />,
    },
    {
      name: "CSS",
      level: 95,
      icon: <FaCss3Alt size={45} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      level: 90,
      icon: <FaJs size={45} className="text-yellow-400" />,
    },
    {
      name: "React",
      level: 90,
      icon: <FaReact size={45} className="text-cyan-400" />,
    },
    {
      name: "Bootstrap",
      level: 85,
      icon: <FaBootstrap size={45} className="text-purple-500" />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: <SiTailwindcss size={45} className="text-sky-400" />,
    },
    {
      name: "Next.js",
      level: 70,
      icon: <SiNextdotjs size={45} className="text-white" />,
    },
    {
      name: "MongoDB",
      level: 70,
      icon: <SiMongodb size={45} className="text-green-500" />,
    },
  ];
  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="py-24 px-6 scroll-mt-24 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:-translate-y-3 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-5">
                {skill.icon}

                <div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>

                  <p className="text-cyan-400">{skill.level}%</p>
                </div>
              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
