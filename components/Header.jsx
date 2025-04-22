import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, SmileIcon } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [themeMode, SetThemeMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (themeMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeMode]);

  return (
    <header className=" relative shadow cursor-pointer">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-highlight py-6 flex justify-between items-center font-body"
      >
        {/* <div className=" ml-20">
          <SmileIcon size={30} />
        </div> */}

        <motion.ul className="hidden md:flex justify-between gap-10 ml-auto mr-20">
          <motion.li whileHover={{ scale: 1.2 }} className="hover:border-b-2">
            <a href="/">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="hover:border-b-2  ">
            <a href="#project">Projects </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className=" hover:border-b-2 ">
            <a href="#contact">Contact</a>
          </motion.li>
        </motion.ul>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => SetThemeMode(!themeMode)}
          className=" bg-slate-50 border shadow rounded-full py-1 px-5 dark:bg-slate-950 md:mr-36"
        >
          {themeMode ? <Sun size={24} /> : <Moon size={24} />}
        </motion.button>

        {/* hamburger Icon */}
        <button className="md:hidden px-6" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* mobile menu */}
        {isOpen && (
          <ul className=" absolute top-16 bg-backgroundLight w-full flex flex-col items-center space-y-4 py-4 dark:bg-backgroundDark md:hidden">
            <li>
              <a
                href="/"
                className="hover:underline"
                // onClick={() => {
                //   setIsOpen(false);
                // }}  idk why to write this here but as backup, my code still work fine but if needed in future
              >
                Home
              </a>
            </li>
            <li>
              {" "}
              <a href="#aboutme" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#project" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        )}
      </motion.nav>
    </header>
  );
}
