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
      className="min-h-screen flex items-center justify-center border-b-4 border-black relative overflow-hidden scroll-snap-align-start"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Desarrollador
            <motion.span
              className="inline-block transition-transform duration-300 cursor-pointer"
              title="Frontend Power!"
              role="img"
              aria-label="Rayo dinámico"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              drag
              dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              whileHover={{
                scale: 1.2,
                color: "#facc15",
                textShadow: "0 0 24px #facc15, 0 0 48px #facc15",
                rotate: [0, 16, -16, 12, -12, 0],
                x: [0, -10, 10, -14, 14, 0],
                transition: {
                  duration: 0.32,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: "grab" }}
            >
              ⚡
            </motion.span>
            Frontend
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-600 text-center"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {data?.subtitle}
          </motion.p>
          <motion.a
            href="#portfolio"
            aria-label="Navigate to Projects section"
            className="bg-blue-500 text-white text-lg font-bold px-8 py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {data?.button}
          </motion.a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
    </section>
  );
};

export default Hero;
