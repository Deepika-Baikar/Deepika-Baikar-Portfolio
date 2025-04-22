import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Agrownet",
      description:
        "Farm management system. It provides features like Crop Expert, market trend analysis, Expense tracker and Goverment scheme portal for Farmers to manage their agricultural activities effeciently",
    },
    {
      title: "Fun Games",
      description:
        "Had a fun with building fun games like Connect four, Tic-tac-toe and Drum kit games using JavaScript, CSS and HTML",
    },
  ];

  return (
    <section className="p-6 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark ">
      <h2 className="text-3xl text-center font-bold font-heading ">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg"
          >
            <h3 className="text-xl font-body text-gray-800 dark:text-gray-100">
              {project.title}
            </h3>
            <p className=" font-body text-gray-800 dark:text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
