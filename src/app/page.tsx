"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SplashScreen from "@/components/layout/SplashScreen";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Packs from "@/components/sections/Packs";
import ProjectPortfolio from "@/components/sections/ProjectPortfolio";
import { portfolioData } from "@/data/portfolioData";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SECTION_IDS = ["home", "about", "portfolio", "packs", "contact"];

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);
  const activeSection = useActiveSection(SECTION_IDS, { enabled: !showSplash });
  const prefersReducedMotion = useReducedMotion();

  return (
    <main>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen data={portfolioData.splash} onStart={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
          >
            <Header activeSection={activeSection} name={portfolioData.name} navigation={portfolioData.navigation} />
            <Hero data={portfolioData.sections.hero} />
            <AboutMe data={portfolioData.sections.about} />
            <ProjectPortfolio
              data={portfolioData.sections.projects.items}
              title={portfolioData.sections.projects.title}
              underConstructionLabel={portfolioData.sections.projects.underConstructionLabel}
              underConstructionAriaLabel={portfolioData.sections.projects.underConstructionAriaLabel}
            />
            <Packs data={portfolioData.sections.packs} />
            <Contact data={portfolioData.sections.contact} contactInfo={portfolioData.contact} />
            <Footer name={portfolioData.name} credit={portfolioData.footer.credit} socialLinks={portfolioData.footer.socialLinks} />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
