"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroProps {
  data: {
    title: {
      beforeIcon: string;
      afterIcon: string;
      iconTitle: string;
      iconAriaLabel: string;
    };
    subtitle: string;
    button: string;
    buttonAriaLabel: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  const prefersReducedMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : delay,
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b-4 border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-primary)] scroll-snap-align-start"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50 [background-image:radial-gradient(var(--text-primary)_1px,transparent_1px),radial-gradient(var(--accent-cyan)_1px,transparent_1px)] [background-position:0_0,52px_44px] [background-size:112px_112px,176px_176px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-[-18%] bottom-[-24%] h-3/5 opacity-50 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--accent-cyan)_34%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--accent-magenta)_30%,transparent)_1px,transparent_1px)] [background-size:76px_76px] [transform:perspective(420px)_rotateX(64deg)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_3px,color-mix(in_srgb,var(--text-primary)_8%,transparent)_4px)] opacity-30 mix-blend-screen"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_28%_32%,color-mix(in_srgb,var(--accent-cyan)_18%,transparent),transparent_32%),radial-gradient(circle_at_78%_72%,color-mix(in_srgb,var(--accent-magenta)_14%,transparent),transparent_36%)]"
      />

      <div className="container relative z-10 mx-auto px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start">
          <motion.p
            className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-cyan)] sm:text-sm"
            custom={0.05}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            &gt; NTT DATA — DIGITAL EXPERIENCE TEAM
          </motion.p>

          <motion.h1
            className="mt-5 max-w-5xl font-heading text-6xl font-black uppercase leading-[0.9] tracking-normal text-[var(--text-primary)] drop-shadow-[4px_0_0_var(--accent-magenta)] sm:text-8xl lg:text-9xl"
            custom={0.16}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            MARCOS GIANNINI
          </motion.h1>

          <motion.p
            className="mt-6 font-mono text-lg font-bold uppercase tracking-[0.18em] text-[var(--accent-green)] sm:text-xl"
            custom={0.27}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            Frontend Engineer
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl"
            custom={0.38}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
            custom={0.49}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <Button
              href="#portfolio"
              size="lg"
              aria-label={data.buttonAriaLabel}
              className="w-full font-mono uppercase tracking-[0.16em] sm:w-auto"
            >
              Ver proyectos
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              aria-label="Navegar a la sección de contacto"
              className="w-full font-mono uppercase tracking-[0.16em] sm:w-auto"
            >
              Contratar
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
