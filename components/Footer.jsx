import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className=" font-body bg-slate-200 mt-auto mb-5 w-full  mx-auto py-8 md:py-10  dark:bg-slate-400 border-y flex flex-col items-center md:flex-row md:justify-evenly  text-gray-500 dark:text-gray-800">
      <motion.div
        whileHover={{ scale: 1.2 }}
        className=" mb-5 md:mb-0  py-3 px-5 rounded-xl bg-backgroundLight dark:bg-backgroundDark  "
      >
        <p className="flex-row mb-2 dark:text-gray-400">Let's Connect</p>
        <div className=" flex space-x-8 dark:text-slate-700">
          {" "}
          <motion.a
            whileTap={{ scale: 0.6 }}
            href="https://github.com/Deepika-Baikar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-9 h-9 shadow-md border p-1 bg-slate-200 dark:bg-slate-400 border-slate-100 dark:border-slate-200 rounded-lg " />
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.6 }}
            href="https://www.linkedin.com/in/deepika-baikar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-9 h-9 py-1 shadow-md border  bg-slate-200  dark:bg-slate-400 border-slate-100 dark:border-slate-200 rounded-lg " />
          </motion.a>
        </div>
      </motion.div>

      <p>© Deepika2025. All rights reserved.</p>

      <motion.a
        whileTap={{ scale: 0.6 }}
        href="/"
        className="underline mt-3 md:mt-0"
      >
        Back to Home
      </motion.a>
    </footer>
  );
}

export default Footer;
