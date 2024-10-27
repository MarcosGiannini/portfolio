export const portfolioData = {
  name: "John Doe",
  contact: {
    phone: "+1 (234) 567-890",
    email: "hola@john.com",
  },
  sections: {
    hero: {
      subtitle: "  Transforming ideas into seamless digital experiences",
      button: "Explore My Work",
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
    skills_info:{
        yoe:"3+",
        number_of_projects:"35+"
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
        subtitle:
          "Merging visuals with functionality for user-friendly interfaces",
      },
    ],
    projects: [
      {
        title: "E-commerce Platform",
        desc: "React, Next.js, Stripe",
        //image:
      },
      {
        title: "Social Media Dashboard",
        desc: "Vue.js, Vuex, Chart.js",
        //image:
      },
      {
        title: "Task Management App",
        desc: "React Native, Firebase",
        //image:
      },
      {
        title: "Portfolio Website",
        desc: "HTML, CSS, JavaScript",
        //image:
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
