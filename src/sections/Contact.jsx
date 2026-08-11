import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

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
          setSuccess("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("❌ Failed to send message. Please try again.");
          console.log(error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      data-aos="fade-left"
      className="py-20 px-6 scroll-mt-24 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center mt-4 text-green-400 font-semibold">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
