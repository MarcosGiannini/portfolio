import { useState, useEffect } from 'react';
import Head from 'next/head';

// Importar nuestros componentes y datos
import { portfolioData } from '../data/portfolioData';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import ProjectPortfolio from '@/components/ProjectPortfolio';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact'; // Asumo que existe un componente Contact

const Portfolio = () => {
  // --- LÓGICA DEL COMPONENTE ---
  const [activeSection, setActiveSection] = useState('home');
  // Eliminado showScrollTop no utilizado

  useEffect(() => {
  const sectionIds = ['home', 'about', 'portfolio', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    console.log('[Observer Setup] Secciones registradas:', sectionElements.map(el => el.id));

    const observer = new window.IntersectionObserver(
      (entries) => {
        // 1. Log de todas las entradas observadas con su estado
        console.log('[Observer Tick] Entradas:', entries.map(e => ({
          id: e.target.id,
          isIntersecting: e.isIntersecting,
          ratio: Number(e.intersectionRatio.toFixed(3))
        })));

        const visibleSections = entries.filter((e) => e.isIntersecting);
        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          // 2. Log claro de la sección seleccionada
          if (mostVisible.target.id !== activeSection) {
            console.log('[ActiveSection] Cambiando a:', mostVisible.target.id);
          }
          setActiveSection(mostVisible.target.id);
        }
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [activeSection]);

  // --- PARTE VISUAL (JSX) ---
  return (
    <>
      <Head>
        <title>Marcos Giannini | Desarrollador Frontend</title>
      </Head>

      <main>
        <Header activeSection={activeSection} name={portfolioData?.name} />
        
        <div id="home">
          <Hero data={portfolioData.sections.hero} />
        </div>
        
        <div id="about">
          <AboutMe />
        </div>
        
        <div id="portfolio">
          <ProjectPortfolio data={portfolioData.sections.projects} />
        </div>

        <div id="contact">
          <Contact data={portfolioData.sections.contact} contactInfo={portfolioData.contact} />
        </div>

        <Footer contactInfo={portfolioData.contact} name={portfolioData.name} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Portfolio;