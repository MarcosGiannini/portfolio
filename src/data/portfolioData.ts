export const portfolioData = {
  name: "Marcos Giannini",
  contact: {
    phone: "+1 (234) 567-890",
    email: "hola@john.com"
  },
  sections: {
    hero: {
      title: "Desarrollador Frontend",
      subtitle: "Apasionado por crear experiencias web con React, Next.js y TypeScript.",
      button: "Ver mis proyectos",
    },
    contact: {
      title: {
        desktop: "Let's create something amazing together",
        mobile: "Let's Connect!",
      },
      description:
        "Ready to transform your ideas into reality? Let's chat about your project!",
      form: {
        title: "Send me a message",
        fields: [
          { name: "name", label: "Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "message", label: "Message", type: "textarea" },
        ],
        submitButton: "Send Message",
      },
    },
    skills_info: {
      yoe: "1+",
      number_of_projects: "25+"
    },
    skills: [
      {
        icon: "Code",
        name: "HTML/CSS/JS",
        color: "yellow",
        subtitle: "Foundation of web structure and styling",
      },
      {
        icon: "Layout",
        name: "Responsive Design",
        color: "purple",
        subtitle: "Ensuring seamless display across devices",
      },
      {
        icon: "Zap",
        name: "React/Next.js",
        color: "red",
        subtitle: "Dynamic and component-based frontend framework",
      },
      {
        icon: "Sparkles",
        name: "UI/UX Integration",
        color: "blue",
        subtitle: "Merging visuals with functionality for user-friendly interfaces",
      },
    ],
    projects: [
      {
        title: "Sistema de Diseño (Stack&Flow)",
        desc: "Creación de un sistema de diseño para unificar la estética y funcionalidad de productos web, documentado con Storybook.",
        tech: ["React", "TypeScript", "Storybook", "TailwindCSS", "RadixUI"],
        url: "https://egdev6-design-system.netlify.app/",
        repo: "https://github.com/egdev6/design-system",
        image: "/designSystem.png"
      },
      {
        title: "Quick Mock (Open Source)",
        desc: "Herramienta de prototipado rápido para UIs de baja fidelidad en la que colaboro activamente.",
        tech: ["React", "TypeScript", "Konva", "Playwright", "Vitest"],
        url: "https://www.quickmock.net/",
        repo: "https://github.com/Lemoncode/quickmock",
        image: "/quickmock.png"
      },
      {
        title: "Portal de Datos de Embalses (TFM)",
        desc: "Desarrollo de un portal de datos para centralizar información de embalses, implementado como un monorepo con frontend en Next.js y backend en NestJS.",
        tech: ["Next.js", "d3.js", "NestJS", "MongoDB", "Turborepo"],
        url: "",
        repo: "https://github.com/Lemoncode/embalse-info",
        image: "/embalses.jpeg"
      },
      {
        title: "Mi Portfolio Personal",
        desc: "Portfolio interactivo personal para mostrar mis proyectos y habilidades. Construido con Next.js y TailwindCSS, animado con Framer Motion y asistido por IA.",
        tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
        url: "",
        repo: "https://github.com/MarcosGiannini/portfolio",
        image: "/portfolio.png"
      },
    ],
    tech_stack: {
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
    },
  },
  footer: {
    socialLinks: [
      { name: "GitHub", url: "#" },
      { name: "LinkedIn", url: "#" },
    ],
  },
};
