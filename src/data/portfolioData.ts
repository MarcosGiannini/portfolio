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
        title: "Envíame un mensaje",
        fields: [
          { name: "name", label: "Nombre", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "message", label: "Mensaje", type: "textarea" },
        ],
        submitButton: "Enviar mensaje",
      },
    },
    
    projects: [
      {
        title: "Super Teacher",
        desc: "Plataforma SaaS de aprendizaje para docentes. Gestión de clases, alumnos y pagos con Stripe. En desarrollo activo.",
        tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "TailwindCSS"],
        url: "",
        repo: "https://github.com/MarcosGiannini/v0-teacher-starter-kit-maite",
        image: "/super-teacher.png",
        badge: "EN DESARROLLO"
      },
      {
        title: "Lenoy Editorial",
        desc: "Sitio web corporativo para editorial independiente. Catálogo de libros, sección de autores y formulario de contacto.",
        tech: ["Next.js", "TypeScript", "TailwindCSS"],
        url: "",
        repo: "https://github.com/MarcosGiannini/lenoy-editorial-web",
        image: "/lenoy-editorial.png",
        badge: "EN DESARROLLO"
      },
      {
        title: "Redux E-commerce Showcase",
        desc: "Aplicación de carrito de la compra para demostrar el manejo avanzado de estado global en React utilizando Redux Toolkit y TypeScript de forma profesional.",
        tech: ["React", "Redux Toolkit", "TypeScript", "TailwindCSS", "Vite"],
        url: "https://redux-ecommerce-showcase.vercel.app/",
        repo: "https://github.com/MarcosGiannini/redux-ecommerce-showcase",
        image: "/redux-showcase.png"
      },
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

    ],
    
  },
  footer: {
    socialLinks: [
  { name: "GitHub", url: "https://github.com/MarcosGiannini" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/marcosgiannini-dev/" },
    ],
  },
};
