import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    emailjs
      .sendForm(
        "service_j8uipbj",
        "template_o3f6foo",
        form.current,
        "ldOJ5CI1INlq3mrG1",
      )
      .then(
        () => {
          setLoading(false);

          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });

          form.current.reset();

          setTimeout(() => {
            setStatus({
              type: "",
              message: "",
            });
          }, 5000);
        },
        (error) => {
          setLoading(false);

          console.error("EmailJS Error:", error);

          setStatus({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="
        relative
        py-24
        px-5
        sm:px-6
        scroll-mt-24
        bg-gray-900
        text-white
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-80
          h-80
          bg-cyan-500/10
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-96
          h-96
          bg-purple-500/10
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-72
          h-72
          bg-blue-500/5
          rounded-full
          blur-3xl
        "
      ></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">
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
            Get In Touch
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
            Contact Me
          </h2>

          <p
            className="
              text-gray-400
              mt-5
              max-w-2xl
              mx-auto
              leading-7
            "
          >
            Have a project idea, freelance opportunity or collaboration in mind?
            Feel free to send me a message.
          </p>

          <div
            className="
              w-20
              h-1
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              mx-auto
              mt-5
              rounded-full
            "
          ></div>
        </div>

        {/* ================= CONTACT GRID ================= */}

        <div
          className="
            grid
            lg:grid-cols-5
            gap-8
            items-stretch
          "
        >
          {/* ================= LEFT CARD ================= */}

          <div
            className="
              lg:col-span-2
              bg-white/5
              backdrop-blur-xl
              border
              border-cyan-500/20
              rounded-3xl
              p-7
              sm:p-8
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
              transition-all
              duration-500
            "
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-cyan-500/10
                  text-cyan-400
                  flex
                  items-center
                  justify-center
                  text-xl
                  border
                  border-cyan-500/20
                "
              >
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-cyan-400">Contact</p>

                <h3 className="text-2xl font-bold">Let's Work Together</h3>
              </div>
            </div>

            <p
              className="
                text-gray-400
                leading-7
                mb-8
              "
            >
              I'm interested in frontend development opportunities, freelance
              projects and professional collaborations.
            </p>

            {/* AVAILABLE STATUS */}

            <div
              className="
                flex
                items-center
                gap-3
                mb-6
                px-4
                py-3
                rounded-2xl
                bg-green-500/5
                border
                border-green-500/20
              "
            >
              <span className="relative flex h-3 w-3">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-green-400
                    opacity-75
                    animate-ping
                  "
                ></span>

                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    h-3
                    w-3
                    bg-green-400
                  "
                ></span>
              </span>

              <span className="text-sm text-green-400">
                Available for freelance work
              </span>
            </div>

            {/* EMAIL */}

            <a
              href="mailto:naushadk789987@gmail.com"
              className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-white/5
                border
                border-gray-800
                hover:border-cyan-400/50
                hover:bg-cyan-500/5
                hover:translate-x-2
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-cyan-500/10
                  text-cyan-400
                  flex
                  items-center
                  justify-center
                  text-xl
                  flex-shrink-0
                "
              >
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">Email</p>

                <p className="text-sm sm:text-base text-gray-200 break-all">
                  naushadk789987@gmail.com
                </p>
              </div>
            </a>

            {/* LOCATION */}

            <div
              className="
                flex
                items-center
                gap-4
                p-4
                mt-4
                rounded-2xl
                bg-white/5
                border
                border-gray-800
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-blue-500/10
                  text-blue-400
                  flex
                  items-center
                  justify-center
                  text-xl
                  flex-shrink-0
                "
              >
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>

                <p className="text-gray-200">Pakistan</p>
              </div>
            </div>

            {/* SOCIAL */}

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>

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
                    bg-gray-800
                    flex
                    items-center
                    justify-center
                    text-xl
                    hover:bg-cyan-500
                    hover:text-black
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
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-xl
                    hover:bg-blue-500
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedin />
                </a>
                {/* WhatsApp */}

                <a
                  href="https://wa.me/923035459620"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                  className="
    w-12
    h-12
    rounded-xl
    bg-green-500
    flex
    items-center
    justify-center
    text-xl
    text-white
    hover:bg-green-600
    hover:scale-110
    hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]
    transition-all
    duration-300
  "
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}

          <div
            className="
              lg:col-span-3
              bg-white/5
              backdrop-blur-xl
              border
              border-cyan-500/20
              rounded-3xl
              p-7
              sm:p-8
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
              transition-all
              duration-500
            "
          >
            <div className="mb-6">
              <p className="text-cyan-400 text-sm font-medium mb-1">
                Send a Message
              </p>

              <h3 className="text-2xl font-bold">Let's Start a Conversation</h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* NAME */}

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    bg-gray-950/60
                    border
                    border-gray-700
                    text-white
                    placeholder-gray-600
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    transition-all
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="example@email.com"
                  required
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    bg-gray-950/60
                    border
                    border-gray-700
                    text-white
                    placeholder-gray-600
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    transition-all
                  "
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    bg-gray-950/60
                    border
                    border-gray-700
                    text-white
                    placeholder-gray-600
                    outline-none
                    resize-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    transition-all
                  "
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  py-3.5
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  font-semibold
                  hover:from-blue-600
                  hover:to-purple-600
                  hover:scale-[1.02]
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-cyan-500/10
                "
              >
                {loading ? (
                  <>
                    <span
                      className="
                        w-5
                        h-5
                        border-2
                        border-white/30
                        border-t-white
                        rounded-full
                        animate-spin
                      "
                    ></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {/* STATUS MESSAGE */}

              {status.message && (
                <div
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-center
                    py-3
                    px-4
                    rounded-xl
                    text-sm
                    border
                    ${
                      status.type === "success"
                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                        : "bg-red-500/10 border-red-500/20 text-red-400"
                    }
                  `}
                >
                  {status.type === "success" && <FaCheckCircle />}

                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
