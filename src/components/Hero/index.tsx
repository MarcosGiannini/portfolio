import { Code, Lightbulb } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  data: {
    title?: string;
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
              <motion.div
                drag
                dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                whileHover={{ scale: 1.15, rotate: 8, boxShadow: "0 0 16px #3b82f6" }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: "grab" }}
              >
                <Code className="w-full h-full text-blue-500" />
              </motion.div>
            </div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Desarrollador
              <motion.span
                className="inline-block transition-transform duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
                title="Frontend Power!"
                role="img"
                aria-label="Rayo dinámico"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                drag
                dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                whileHover={{ scale: 1.2, rotate: 15, color: "#facc15", textShadow: "0 0 8px #facc15" }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: "grab" }}
              >
                ⚡
              </motion.span>
              Frontend
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-600 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {data?.subtitle}
            </motion.p>
            <div className="flex justify-center items-center w-full">
              <motion.a
                href="#portfolio"
                aria-label="Navigate to Projects section"
                className="bg-blue-500 text-white text-lg font-bold px-8 py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {data?.button}
              </motion.a>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full border-4 border-black rounded-lg overflow-hidden flex items-center justify-center bg-gray-200">
              <Image
                src="/mifoto.jpg"
                alt="Foto personal de Marcos Giannini"
                width={320}
                height={320}
                className="object-cover w-full h-full rounded-lg"
                priority
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-yellow-300 rounded-full p-2 border-4 border-black shadow-lg">
              <motion.div drag dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }}>
                <motion.div
                  drag
                  dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
                  dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                  whileHover={{ scale: 1.2, rotate: 12, boxShadow: "0 0 16px #fde047" }}
                  whileTap={{ scale: 0.95 }}
                  style={{ cursor: "grab" }}
                >
                  <Lightbulb className="w-8 h-8 text-black animate-spin-slow" />
                </motion.div>
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#D8B4FE] transform rotate-45 border-4 border-black shadow-lg"></div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#D8B4FE] transform rotate-45 border-4 border-black shadow-lg"
              drag
              dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              whileHover={{ scale: 1.2, rotate: 20, boxShadow: "0 0 16px #a78bfa" }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: "grab" }}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
    </section>
  );
};

export default Hero;
