import React from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(() => alert("Message sent!"))
      .catch((err) => console.error(err));

    e.target.reset();
  }

  return (
    <form
      onSubmit={sendEmail}
      className="mx-auto mt-12 flex w-full max-w-md flex-col gap-4 rounded-xl border border-gray-300 bg-backgroundLight p-6 shadow-sm dark:border-gray-700 dark:bg-backgroundDark"
    >
      <h2 className="mb-2 text-center font-heading text-2xl dark:text-textDark">
        Get in touch
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full rounded-md border border-gray-300 bg-transparent p-3 font-body text-sm text-lightText placeholder-gray-500 outline-none focus:border-accent dark:border-gray-700 dark:text-darkText"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full rounded-md border border-gray-300 bg-transparent p-3 font-body text-sm text-lightText placeholder-gray-500 outline-none focus:border-accent dark:border-gray-700 dark:text-darkText"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Message"
        required
        className="w-full resize-none rounded-md border border-gray-300 bg-transparent p-3 font-body text-sm text-lightText placeholder-gray-500 outline-none focus:border-accent dark:border-gray-700 dark:text-darkText"
      />

      <button
        type="submit"
        className="mt-2 flex items-center justify-center gap-2 rounded-md bg-slate-200   dark:bg-slate-400  px-4 py-2 font-code text-backgroundDark transition hover:bg-highlight  dark:text-backgroundLight"
      >
        <Send size={18} /> Send
      </button>
    </form>
  );
}
