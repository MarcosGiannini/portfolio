import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import ProjectPortfolio from "@/components/ProjectPortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "../data/portfolioData";
import SEO from "@/components/Seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "portfolio", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Portfolio"
        description="Welcome to my portfolio showcasing my skills, projects, and experience as a web developer."
      />
      <div
        className={`min-h-screen bg-white text-black ${montserrat.variable} ${inter.variable} font-sans`}
      >
        <Header activeSection={activeSection} name={portfolioData?.name} />
        <main className="overflow-clip">
          <Hero data={portfolioData?.sections?.hero} />
          <TechStack data={portfolioData?.sections?.tech_stack} />
          <Skills
            data={portfolioData?.sections?.skills}
            skillsInfo={portfolioData?.sections?.skills_info}
          />
          <ProjectPortfolio data={portfolioData?.sections?.projects} />
          <Contact
            data={portfolioData?.sections?.contact}
            contactInfo={portfolioData?.contact}
          />
        </main>
        <Footer
          contactInfo={portfolioData?.contact}
          name={portfolioData?.name}
        />
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
};

export default Portfolio;
