import React from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="flex justify-center bg-slate-200 dark:bg-slate-400 h-full ">
      <div className="mt-4 w-11/12 rounded-3xl bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
    
  );
}
