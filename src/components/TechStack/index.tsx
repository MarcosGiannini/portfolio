import { motion } from "framer-motion";

interface TechStackProps {
  data: {
    technologies: string[];
  };
}

const TechStack = ({ data }: TechStackProps) => {
  return (
    <>
  <section className="min-h-screen flex items-center justify-center bg-gray-100 border-b-4 md:border-black hidden md:block scroll-snap-align-start">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
          >
            Tech Stack
          </motion.h2>
          <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
            {data?.technologies.map((tech, i) => (
                <motion.li
                  key={tech}
                  className="text-lg md:text-xl font-bold bg-white md:px-4 px-2 py-2 rounded-full border-2 border-black"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: i * 0.15 }}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
  <section className="min-h-screen flex items-center justify-center bg-black text-white border-b-4 border-white block md:hidden scroll-snap-align-start">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
            {data?.technologies.map((tech, i) => (
                <motion.li key={tech} className="text-lg md:text-xl font-bold"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: i * 0.15 }}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TechStack;
