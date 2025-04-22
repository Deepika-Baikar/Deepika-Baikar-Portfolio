import React from "react";
import girlImg from "../assets/girlimg.jpeg";
import { Laptop } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-backgroundLight  dark:bg-backgroundDark">
      <div className="space-x-5 justify-items-center md:flex justify-evenly mt-6 md:mt-20">
        <motion.img
          src={girlImg}
          alt="girl image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="max-sm:h-60 rounded-full rounded-es-none shadow-xl shadow-highlight md:w-80 md:h-100"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className=" font-heading mt-14 ml-4 mb-4 text-4xl md:text-7xl font-semibold">
            Hey, I'm Deepika
          </h1>
          <div className="flex text-lg md:mt-8 font-body md:text-2xl text-gray-400 dark:text-gray-300">
            <Laptop size={30} className="mr-3" />
            <h2>Aspiring Full-Stack Developer | Language Enthusiast</h2>
          </div>
          <p className="mt-4 max-w-xl text-base md:max-w-2xl font-body md:text-lg text-gray-600 dark:text-gray-100">
            Every language, whether programming or spoken, opens doors to
            innovation, connection, and limitless opportunities. I'm passionate
            about building scalable web solutions, crafting seamless user
            experiences, and exploring new languages. Currently mastering
            full-stack development and Japanese on my journey to becoming a
            polyglot."
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
