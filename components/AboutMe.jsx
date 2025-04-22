import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <section className="text-center py-16 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
      <h2 className="text-3xl font-heading font-semibold">About Me</h2>

      {/* Conditional Rendering for Professional / Personal Info */}
      {showPersonal ? (
        <motion.p
          key={showPersonal}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 mx-auto max-w-xl text-base md:max-w-2xl font-body md:text-lg text-gray-600 dark:text-gray-100 "
        >
          Apart from coding, I enjoy reading books, learn new languages,
          dancing, and watching multilingual series! I also love listening to
          music and exploring new cultures. Currently I'm actively learning
          Japanese and preparing for JLPT N4. 📚🎶
        </motion.p>
      ) : (
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 mx-auto max-w-xl text-base md:max-w-2xl font-body md:text-lg text-gray-600 dark:text-gray-100"
        >
          I'm Aspiring full-Stack developer, skilled in a Frontend Development
          passionate about building intuitive and user-friendly web experiences.
          I specialize in React, Tailwind, and JavaScript, constantly learning
          and growing in the tech space. 💻🚀
        </motion.p>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowPersonal(!showPersonal)}
        className="mt-6 px-6 py-3 shadow-md border  bg-slate-200   dark:bg-slate-400  dark:text-backgroundLight border-slate-100 dark:border-slate-200 rounded-lg  transition"
      >
        {showPersonal ? "Back to Professional Info" : "Fun Fact about me"}
      </button>
    </section>
  );
}
