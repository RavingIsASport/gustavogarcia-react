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
    <div className="h-screen flex flex-col gap-24 md:gap-0 md:flex-row md:justify-between">
      <div className="flex flex-col mx-auto gap-3 lg:gap-10 mt-2 md:mt-24">
        <h1 className="text-center text-lg lg:text-xl">Socials</h1>

        <div className="flex gap-4 lg:gap-8">
          <a href="https://github.com/RavingIsASport">
            <i className="fa-brands fa-github text-7xl lg:text-8xl"></i>
          </a>
          <a href="https://www.tiktok.com/@ravingisasport23?is_from_webapp=1&sender_device=pc">
            <i class="fa-brands fa-tiktok text-7xl lg:text-8xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/gustavo-garcia-76b264217/">
            <i class="fa-brands fa-linkedin text-7xl lg:text-8xl"></i>
          </a>
        </div>
      </div>

      <div className="mt-2 w-9/12 mx-auto md:mt-24 md:w-5/12 lg:w-4/12 xl:w-3/12 flex flex-col bg-champagne p-2 rounded shadow shadow-black">
        <h1 className="text-center text-lg lg:text-xl">Send a message</h1>
        <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="rounded focus:outline-none p-2 text-sm"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="rounded focus:outline-none p-2 text-sm"
          />
          <label>Message</label>
          <textarea
            name="user_message"
            className="rounded resize-none focus:outline-none p-2 h-32 text-sm"
          />
          <button
            type="submit"
            value="Send"
            className="bg-celeste ml-auto px-3 py-1 rounded mt-2 border-slate-800 border hover:bg-cerulean"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
