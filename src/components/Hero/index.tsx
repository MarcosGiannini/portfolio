import { Code, Lightbulb } from "lucide-react";

interface HeroProps {
  data: {
    subtitle: string;
    button: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section
      id="home"
      className="py-20 pt-40 border-b-4 border-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="max-w-3xl mb-8 md:mb-0">
            <div className="bg-blue-200 p-2 w-16 h-16 md:w-24 md:h-24 transform -rotate-12 mb-6 mx-auto md:mx-0 rounded-lg shadow-lg">
              <Code className="w-full h-full text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left">
              I craft <span className="inline-block animate-bounce">💻</span>{" "}
              responsive && dynamic{" "}
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 bg-yellow-300 opacity-50"
                  style={{ top: "60%", height: "40%" }}
                ></span>
                <span className="relative">websites</span>
              </span>
            </h1>
            <p className="text-xl  text-gray-600 text-center md:text-left block md:hidden">
              Transforming ideas into
            </p>
            <p className="text-xl mb-8 text-gray-600 text-center md:text-left block md:hidden">
              digital experiences{" "}
            </p>
            <p className="text-xl mb-8 text-gray-600 text-center md:text-left hidden md:block">
              {data?.subtitle}
            </p>
            <div className="flex md:justify-start justify-center items-center w-full">
              <a
                href="#portfolio"
                aria-label="Navigate to Projects section"
                className="bg-blue-500 text-white text-lg font-bold px-8 py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                {data?.button}
              </a>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full bg-gray-200 border-4 border-black rounded-lg flex items-center justify-center overflow-hidden">
              <div className="text-6xl animate-pulse">&lt;/&gt;</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-yellow-300 rounded-full p-2 border-4 border-black shadow-lg">
              <Lightbulb className="w-8 h-8 text-black animate-spin-slow" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#D8B4FE] transform rotate-45 border-4 border-black shadow-lg"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
    </section>
  );
};

export default Hero;
