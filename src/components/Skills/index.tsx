import { motion, Variants } from 'framer-motion';

interface Category {
  title: string;
  items: string[];
}

const categories: Category[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'Framer Motion'
    ]
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'MongoDB']
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Docker', 'Jest', 'Vitest', 'Playwright']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,0.84,0.44,1] } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          Mis Habilidades
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="p-6 rounded-2xl border-2 border-black bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {cat.title}
              </h3>
              <motion.ul
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
              >
                {cat.items.map((tech) => (
                  <motion.li
                    key={tech}
                    className="px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-sm font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors duration-300"
                    variants={itemVariants}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
