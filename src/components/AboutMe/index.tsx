import React from "react";
import { motion, Variants } from "framer-motion";
// Variants para animaciones de las categorías de habilidades
const skillsContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const skillItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 0.84, 0.44, 1] } }
};

const skillCategories = [
  { title: 'Frontend', items: ['React','Next.js','TypeScript','JavaScript','HTML5','CSS3','TailwindCSS','Framer Motion'] },
  { title: 'Backend', items: ['Node.js','NestJS','MongoDB'] },
  { title: 'Herramientas', items: ['Git','GitHub','Docker','Jest','Vitest','Playwright'] },
  { title: 'IA & Productividad', items: ['GitHub Copilot','Cursor','Prompt Engineering'] }
];
const AboutMe = () => {
  return (
  <section id="about" className="min-h-screen flex items-center justify-center bg-white border-b-4 border-black scroll-snap-align-start">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="w-full h-full border-4 border-black rounded-lg overflow-hidden flex items-center justify-center bg-gray-200">
                <img
                  src="/mifoto.jpg"
                  alt="Foto personal de Marcos Giannini"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-yellow-300 rounded-full p-2 border-4 border-black shadow-lg">
                  <motion.div
                    drag
                    dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
                    dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                    whileHover={{ scale: 1.2, rotate: 12, boxShadow: "0 0 16px #fde047" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ cursor: "grab" }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#fde047"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
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
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Sobre Mí</h2>
            <p className="text-lg text-gray-700 mb-8 text-center md:text-left max-w-xl">
              Desarrollador Frontend con una sólida trayectoria profesional de 9 años, especializado recientemente en el ecosistema moderno de JavaScript a través de un Máster. Potencio mi productividad con herramientas de IA como GitHub Copilot y Cursor. Colaborador en proyectos Open Source, con profundo conocimiento en React, TypeScript, Vite y Docker.
            </p>
            <a
              href="/CV_MarcosGiannini_Frontend.pdf"
              download
              className="bg-blue-500 text-white font-bold px-8 py-4 rounded-full border-4 border-black shadow hover:bg-blue-600 transition-colors duration-300 mb-12"
            >
              Descargar CV
            </a>
            {/* Bloque de habilidades fusionado desde el antiguo componente Skills */}
            <div id="skills" className="w-full">
              <motion.h3
                className="text-2xl font-bold mb-8 text-center md:text-left"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9 }}
              >
                Mis Habilidades
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    className="p-4 rounded-xl border-2 border-black bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                    variants={skillItem}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      {cat.title}
                    </h4>
                    <motion.ul
                      className="flex flex-wrap gap-2"
                      variants={skillsContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {cat.items.map((tech) => (
                        <motion.li
                          key={tech}
                          className="px-3 py-1 rounded-full border border-gray-300 bg-gray-100 text-xs font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors duration-300"
                          variants={skillItem}
                        >
                          {tech}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
