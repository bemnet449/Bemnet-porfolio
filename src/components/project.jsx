import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl my-20"
      >
        Projects
        <br />
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <a 
            key={index} 
            href="" 
            className="hover:scale-105 transition-transform duration-300"
          >
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="bg-black rounded-lg overflow-hidden mx-auto"
              style={{
                width: "300px", // Fixed width
                height: "400px", // Fixed height
                boxShadow: "8px 8px 15px rgba(0, 255, 255, 0.3)", // Bottom-right shadow
              }}
            >
              <img
                className="object-cover w-[90%] h-1/2 mx-auto mt-2" // Image width adjusted to 90% of the card
                src={project.image}
                alt={project.title}
              />
              <div className="p-4 text-white">
                <h6 className="text-lg font-semibold mb-2">{project.title}</h6>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-cyan-500 text-black text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
