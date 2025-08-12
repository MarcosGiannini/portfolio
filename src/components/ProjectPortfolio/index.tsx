import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  image?: string;
  tech?: string[];
  url?: string;
}

interface ProjectsProps {
  data: Project[];
}

const ProjectPortfolio = ({ data }: ProjectsProps) => {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-100 border-b-4 border-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.map((project, index) => (
            <motion.div
              key={index}
              className="group relative border-2 border-black p-6 rounded-lg bg-white shadow-md"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover mb-6 rounded border-2 border-black"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 border-2 border-black rounded-lg flex items-center justify-center overflow-hidden mb-6">
                  <div className="text-6xl text-gray-400">&lt;/&gt;</div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.desc}</p>
              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
              {project.url && project.url.trim() !== "" ? (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-black p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label={`Ver proyecto: ${project.title}`}
                  drag
                  dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
                  dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                  whileDrag={{ scale: 1.2, zIndex: 10 }}
                  whileHover={{ scale: 1.15, rotate: 12, boxShadow: "0 0 16px #3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  style={{ cursor: "grab" }}
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </motion.a>
              ) : (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-yellow-100 border border-yellow-400 p-2 rounded-full text-yellow-700 text-xs font-semibold shadow-md">
                  <span role="img" aria-label="En construcción">🚧</span>
                  Web en construcción
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
