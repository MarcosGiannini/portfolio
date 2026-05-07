import type { Project, SkillCategory, SocialLink } from "@/types/portfolio";

// Translatable fields for Phase 6.
export const portfolioData = {
  name: "Marcos Giannini",
  seo: {
    title: "Marcos Giannini | Desarrollador Frontend",
    description:
      "Portfolio de Marcos Giannini, Frontend Engineer especializado en React, Next.js, TypeScript y productos digitales reales.",
    siteUrl: "https://portfolio-pi-vert-12.vercel.app",
    ogImage: "/og-image.jpg",
    ogImageAlt: "Marcos Giannini, Frontend Engineer",
  },
  contact: {
    email: "marcogfa@gmail.com",
  },
  navigation: {
    menuLabels: {
      open: "Abrir menú",
      close: "Cerrar menú",
    },
    items: [
      { id: "home", label: "Inicio" },
      { id: "about", label: "Sobre Mí" },
      { id: "portfolio", label: "Proyectos" },
      { id: "contact", label: "Contacto" },
    ],
  },
  splash: {
    startButton: "START",
    continuePrompt: "PRESS START TO CONTINUE",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe.",
    backHome: "Volver al inicio",
  },
  sections: {
    hero: {
      title: {
        beforeIcon: "Desarrollador",
        afterIcon: "Frontend",
        iconTitle: "Frontend Power!",
        iconAriaLabel: "Rayo dinámico",
      },
      subtitle: "Apasionado por crear experiencias web con React, Next.js y TypeScript.",
      button: "Ver mis proyectos",
      buttonAriaLabel: "Navegar a la sección de proyectos",
    },
    about: {
      title: "Sobre Mí",
      imageAlt: "Foto personal de Marcos Giannini",
      bio: [
        "Frontend Engineer en el equipo de Digital Experience de NTT DATA, con más de 8 años construyendo interfaces y productos web. Trabajo en el ciclo completo: desde la arquitectura de componentes hasta el deploy en producción.",
        "En paralelo, desarrollo proyectos propios: **Super Teacher**, una plataforma SaaS de aprendizaje con Next.js, Supabase y Stripe; **Lenoy Editorial**, el sitio web de una editorial independiente; este **portfolio**, que evoluciona como producto vivo; e **Ines Game**, un videojuego 2D en Godot con visión comercial a largo plazo.",
      ],
      cvButton: "Descargar CV",
      skillsTitle: "Mis Habilidades",
      skillCategories: [
        { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Framer Motion"] },
        { title: "Backend", items: ["Node.js", "NestJS", "MongoDB"] },
        { title: "Herramientas", items: ["Git", "GitHub", "Docker", "Jest", "Vitest", "Playwright"] },
        { title: "IA & Productividad", items: ["GitHub Copilot", "Cursor", "Prompt Engineering"] },
      ] satisfies SkillCategory[],
    },
    contact: {
      title: {
        desktop: "Hablemos",
        mobile: "Hablemos",
      },
      description: "¿Interesado en mi perfil? ¡Envíame un mensaje!",
      successMessage: "¡Gracias por tu mensaje! Te responderé pronto.",
      form: {
        title: "Envíame un mensaje",
        fields: [
          { name: "name", label: "Nombre", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "message", label: "Mensaje", type: "textarea" },
        ],
        submitButton: "Enviar mensaje",
        submittingButton: "Enviando...",
        validationLabels: {
          form: "Formulario",
        },
      },
    },
    projects: {
      title: "Proyectos",
      underConstructionLabel: "Web en construcción",
      underConstructionAriaLabel: "En construcción",
      items: [
        {
          title: "Super Teacher",
          desc: "Plataforma SaaS de aprendizaje para docentes. Gestión de clases, alumnos y pagos con Stripe. En desarrollo activo.",
          tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "TailwindCSS"],
          url: "",
          repo: "https://github.com/MarcosGiannini/v0-teacher-starter-kit-maite",
          badge: "EN DESARROLLO",
        },
        {
          title: "Lenoy Editorial",
          desc: "Sitio web corporativo para editorial independiente. Catálogo de libros, sección de autores y formulario de contacto.",
          tech: ["Next.js", "TypeScript", "TailwindCSS"],
          url: "",
          repo: "https://github.com/MarcosGiannini/lenoy-editorial-web",
          badge: "EN DESARROLLO",
        },
        {
          title: "Portfolio Marcos Giannini",
          desc: "Portfolio personal en evolución constante. Un producto vivo para demostrar criterio frontend, arquitectura, diseño de interacción y mejora continua.",
          tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
          url: "https://portfolio-pi-vert-12.vercel.app/",
          repo: "https://github.com/MarcosGiannini/portfolio",
          image: "/portfolio.png",
          badge: "EN EVOLUCIÓN",
        },
        {
          title: "Ines Game",
          desc: "Videojuego de plataformas 2D en Godot. Proyecto a largo plazo orientado a movimiento fluido, tono mágico y publicación comercial futura.",
          tech: ["Godot 4", "GDScript", "Game Design", "Arquitectura modular"],
          url: "",
          repo: "https://github.com/MarcosGiannini/ines-game",
          badge: "LARGO PLAZO",
        },
      ] satisfies Project[],
    },
  },
  footer: {
    credit: "Diseñado y construido por",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/MarcosGiannini" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/marcosgiannini-dev/" },
    ] satisfies SocialLink[],
  },
};
