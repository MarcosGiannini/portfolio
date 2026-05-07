"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SplashScreenProps {
  data: {
    startButton: string;
    continuePrompt: string;
  };
  onStart: () => void;
}

export default function SplashScreen({ data, onStart }: SplashScreenProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70 [background-image:radial-gradient(var(--text-primary)_1px,transparent_1px),radial-gradient(var(--text-secondary)_1px,transparent_1px),radial-gradient(var(--accent-cyan)_1px,transparent_1px)] [background-position:0_0,42px_64px,120px_32px] [background-size:96px_96px,144px_144px,220px_220px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-[-20%] bottom-[-18%] h-2/3 origin-bottom rotate-x-[62deg] opacity-80 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--accent-cyan)_42%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--accent-magenta)_44%,transparent)_1px,transparent_1px)] [background-size:72px_72px] [transform:perspective(360px)_rotateX(62deg)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_3px,color-mix(in_srgb,var(--text-primary)_10%,transparent)_4px)] opacity-35 mix-blend-screen"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent-cyan)_14%,transparent),transparent_34%),radial-gradient(circle_at_bottom,color-mix(in_srgb,var(--accent-magenta)_20%,transparent),transparent_42%)]"
      />

      <button
        type="button"
        onClick={onStart}
        className="absolute right-4 top-4 z-10 border-2 border-[var(--border)] bg-[var(--bg-base)] px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
        aria-label="Saltar pantalla de inicio"
      >
        Skip
      </button>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-cyan)] sm:text-sm"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.1, duration: 0.45 }}
        >
          Frontend Engineer
        </motion.p>

        <motion.p
          aria-hidden="true"
          className="mb-5 min-h-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-green)]"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: [0, 1, 1, 0] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { delay: 0.35, duration: 0.85, times: [0, 0.18, 0.72, 1] }
          }
        >
          INITIALIZING...
        </motion.p>

        <motion.h1
          className="font-heading text-5xl font-black uppercase leading-none tracking-normal text-[var(--text-primary)] sm:text-7xl lg:text-8xl"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  scale: 1,
                  textShadow: [
                    "0 0 0 var(--accent-cyan)",
                    "3px 0 0 var(--accent-cyan), -3px 0 0 var(--accent-magenta)",
                    "-2px 0 0 var(--accent-cyan), 2px 0 0 var(--accent-magenta)",
                    "0 0 0 var(--accent-cyan)",
                  ],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { delay: 0.95, duration: 0.7, times: [0, 0.35, 0.6, 1] }
          }
        >
          Marcos Giannini
        </motion.h1>

        <motion.button
          onClick={onStart}
          className="group relative mt-12 overflow-hidden border-4 border-[var(--border)] bg-[var(--accent-cyan)] px-12 py-5 font-mono text-2xl font-black uppercase tracking-[0.2em] text-[var(--bg-base)] shadow-[var(--shadow-brutal),inset_0_0_22px_color-mix(in_srgb,var(--accent-yellow)_50%,transparent),var(--glow-cyan)] transition-[transform,box-shadow,background-color,color] duration-200 before:absolute before:inset-y-0 before:left-[-45%] before:w-1/3 before:skew-x-[-18deg] before:bg-[color-mix(in_srgb,var(--text-primary)_72%,transparent)] before:opacity-0 before:transition-[left,opacity] before:duration-300 hover:-translate-y-1 hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] hover:shadow-[var(--shadow-brutal),inset_0_0_28px_color-mix(in_srgb,var(--accent-yellow)_62%,transparent),0_0_40px_color-mix(in_srgb,var(--accent-cyan)_82%,transparent)] hover:before:left-[120%] hover:before:opacity-80 active:translate-x-1 active:translate-y-1 active:scale-[0.98] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-base)]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 1.35, duration: 0.45 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
        >
          <span className="relative z-10 drop-shadow-[2px_0_0_var(--accent-magenta)]">
            {data.startButton}
          </span>
        </motion.button>

        <motion.p
          className="mt-6 text-center font-mono text-sm font-bold uppercase tracking-[0.24em] text-[var(--text-secondary)] motion-safe:animate-blink"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 1.65, duration: 0.35 }}
        >
          {data.continuePrompt}
        </motion.p>
      </div>

      <p className="absolute bottom-5 right-5 z-10 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
        © 2026 MARCOS.DEV
      </p>
    </motion.div>
  );
}
