function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="pt-32 pb-20 px-6 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl border-2 border-gray-300 transition-all duration-500 hover:border-cyan-500 hover:shadow-2xl hover:scale-105">
        <h2 className="text-4xl font-bold mb-6 transition duration-500 hover:text-cyan-500">
          About Me
        </h2>

        <p className="text-lg leading-relaxed transition duration-500 hover:text-cyan-500">
          I'm a frontend developer skilled in HTML, CSS, JavaScript, React,
          Bootstrap, and Tailwind CSS. I enjoy building modern, responsive, and
          user-friendly websites that provide a great user experience.
        </p>
      </div>
    </section>
  );
}

export default About;
