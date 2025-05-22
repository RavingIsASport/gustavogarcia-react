import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g1hykhc",
        "template_tt57ksm",
        form.current,
        "zzAdvoPoJUmaothS3"
      )
      .then(
        (result) => {
          alert("Message sent! I'll be in contact soon.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Socials Section */}
        <div className="flex flex-col items-center lg:items-start gap-8">
          <h2 className="text-3xl font-NovaSquare text-gray-800">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg font-Jost text-center lg:text-left">
            I'm always open to networking, collaboration, or just a friendly
            chat.
          </p>
          <div className="flex gap-6 text-7xl text-red-500">
            <a
              href="https://github.com/RavingIsASport"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github hover:text-black transition"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/gustavo-garcia-76b264217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin hover:text-blue-700 transition"></i>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-lg p-8">
          <h2 className="text-xl text-red-500 font-bold mb-4 text-center font-mono">
            Send a Message
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 text-sm"
          >
            <div>
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-900"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-900"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="user_message"
                required
                rows="5"
                className="w-full mt-1 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-900"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition self-end"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
