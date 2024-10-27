interface TechStackProps {
  data: {
    technologies: string[];
  };
}

const TechStack = ({ data }: TechStackProps) => {
  return (
    <>
      <section className="py-16 bg-gray-100 border-b-4 md:border-black hidden md:block">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Tech Stack
          </h2>
          <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
            {data?.technologies.map((tech) => (
              <li
                key={tech}
                className="text-lg md:text-xl font-bold bg-white md:px-4 px-2 py-2 rounded-full border-2 border-black"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-6 bg-black text-white border-b-4 border-white block md:hidden">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
            {data?.technologies.map((tech) => (
              <li key={tech} className="text-lg md:text-xl font-bold">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TechStack;
