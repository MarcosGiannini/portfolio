import { useState, useEffect, useRef } from 'react';
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
  const currentSectionRef = useRef('home');
  // Eliminado showScrollTop no utilizado

  useEffect(() => {
    const sectionIds = ['home', 'about', 'portfolio', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (process.env.NODE_ENV !== 'production') {
      console.log('[Observer Setup] Secciones registradas:', sectionElements.map(el => el.id));
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        // 1. Log de todas las entradas observadas con su estado (solo en desarrollo)
        if (process.env.NODE_ENV !== 'production') {
          console.log('[Observer Tick] Entradas:', entries.map(e => ({
            id: e.target.id,
            isIntersecting: e.isIntersecting,
            ratio: Number(e.intersectionRatio.toFixed(3))
          })));
        }

        const visibleSections = entries.filter((e) => e.isIntersecting);
        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          const nextId = mostVisible.target.id;
          if (nextId !== currentSectionRef.current) {
            if (process.env.NODE_ENV !== 'production') {
              console.log('[ActiveSection] Cambiando a:', nextId);
            }
            currentSectionRef.current = nextId;
            setActiveSection(nextId);
          }
        }
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // --- PARTE VISUAL (JSX) ---
  return (
    <>
      <Head>
        <title>Marcos Giannini | Desarrollador Frontend</title>
      </Head>

      <main>
        <Header activeSection={activeSection} name={portfolioData?.name} />
        
  <Hero data={portfolioData.sections.hero} />
        
  <AboutMe />
        
  <ProjectPortfolio data={portfolioData.sections.projects} />

  <Contact data={portfolioData.sections.contact} contactInfo={portfolioData.contact} />

        <Footer contactInfo={portfolioData.contact} name={portfolioData.name} />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Portfolio;