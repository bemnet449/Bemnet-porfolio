import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaDatabase, FaGitAlt, FaMicrosoft, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FiFigma } from "react-icons/fi"; // Figma icon import
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-800 pb-24"
    >
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <RiReactjsLine className="text-[200px] text-cyan-400" />
            <div className="mt-2 text-center text-lg">React</div>
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <FaNodeJs className="text-[200px] text-green-500" />
            <div className="mt-2 text-center text-lg">Node.js</div>
          </motion.div>

          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <SiMongodb className="text-[200px] text-green-500" />
            <div className="mt-2 text-center text-lg">MongoDB</div>
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <TbBrandNextjs className="text-[200px]" />
            <div className="mt-2 text-center text-lg">Next.js</div>
          </motion.div>

          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <FaDatabase className="text-[200px] text-white" />
            <div className="mt-2 text-center text-lg">SQLDatabase</div>
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <BiLogoPostgresql className="text-[200px] text-sky-700" />
            <div className="mt-2 text-center text-lg">PostgreSQL</div>
          </motion.div>

          {/* Row 3 (Figma and .NET) */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <FiFigma className="text-[200px] text-pink-500" /> {/* Figma icon */}
            <div className="mt-2 text-center text-lg">Figma</div>
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <FaMicrosoft className="text-[200px] text-blue-800" />
            <div className="mt-2 text-center text-lg">ASP.NET CORE</div>
          </motion.div>

          {/* Row 4 (Git) */}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-200 hover:border-[#0f6d82] w-52 h-28 flex flex-col items-center justify-center"
          >
            <FaGitAlt className="text-[200px] text-red-600" />
            <div className="mt-2 text-center text-lg">Git</div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
