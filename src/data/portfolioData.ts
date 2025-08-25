export const portfolioData = {
  name: "Marcos Giannini",
  contact: {
  email: "marcogfa@gmail.com"
  },
  sections: {
    hero: {
      title: "Desarrollador Frontend",
      subtitle: "Apasionado por crear experiencias web con React, Next.js y TypeScript.",
      button: "Ver mis proyectos",
    },
    contact: {
      title: {
        desktop: "Hablemos",
        mobile: "Hablemos",
      },
      description:
        "¿Interesado en mi perfil? ¡Envíame un mensaje!",
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
    
  },
  footer: {
    socialLinks: [
  { name: "GitHub", url: "https://github.com/MarcosGiannini" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/marcosgiannini-dev/" },
    ],
  },
};
