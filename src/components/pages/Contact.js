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
    <div className="h-screen flex flex-col gap-8">
      <div className="flex justify-center gap-4 m-4 flex-col">
        <h1 className="text-center text-lg">Socials</h1>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/gustavo-garcia-76b264217/">
            <i className="fa-brands fa-github text-7xl"></i>
          </a>
          <a href="https://www.tiktok.com/@ravingisasport23?is_from_webapp=1&sender_device=pc">
            <i class="fa-brands fa-tiktok text-7xl"></i>
          </a>
          <a href="https://github.com/RavingIsASport">
            <i class="fa-brands fa-linkedin text-7xl"></i>
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-center text-lg">Send a message</h1>
        <form
          className="flex flex-col p-4 gap-2 mx-auto w-9/12 md:w-5/12 lg:w-4/12 xl:w-3/12"
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="rounded focus:outline-slate-100 p-2 text-sm"
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
            className="bg-emerald-100 ml-auto px-3 py-1 rounded mt-2 border-slate-800 border hover:bg-emerald-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
