import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  image?: string;
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
            <div
              key={index}
              className="group relative border-2 border-black p-6 rounded-lg bg-white shadow-md"
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
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <div className="absolute bottom-4 right-4 bg-black p-2 rounded-full">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
