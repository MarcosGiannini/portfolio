import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

// Importar nuestros componentes y datos
import { portfolioData } from '../data/portfolioData';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import ProjectPortfolio from '@/components/ProjectPortfolio';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
import SplashScreen from '@/components/SplashScreen';

const Portfolio = () => {
  // Estado para SplashScreen
  const [showSplash, setShowSplash] = useState(true);
  // Estado para sección activa (mantengo tu lógica original)
  const [activeSection, setActiveSection] = useState('home');
  const currentSectionRef = useRef('home');

  useEffect(() => {
    if (showSplash) return; // No observar secciones si está el splash
    const sectionIds = ['home', 'about', 'portfolio', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (process.env.NODE_ENV !== 'production') {
      console.log('[Observer Setup] Secciones registradas:', sectionElements.map(el => el.id));
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
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
  }, [showSplash]);

  return (
    <>
      <Head>
        <title>Marcos Giannini | Desarrollador Frontend</title>
      </Head>

      <main>
        <AnimatePresence>
          {showSplash && (
            <SplashScreen onStart={() => setShowSplash(false)} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!showSplash && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Header activeSection={activeSection} name={portfolioData?.name} />
              <Hero data={portfolioData.sections.hero} />
              <AboutMe />
              <ProjectPortfolio data={portfolioData.sections.projects} />
              <Contact data={portfolioData.sections.contact} contactInfo={portfolioData.contact} />
              <Footer name={portfolioData.name} socialLinks={portfolioData.footer.socialLinks} />
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Portfolio;