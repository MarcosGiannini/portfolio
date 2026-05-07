"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { SkillCategory } from "@/types/portfolio";

interface AboutMeProps {
  data: {
    title: string;
    imageAlt: string;
    bio: string[];
    cvButton: string;
    skillsTitle: string;
    skillCategories: SkillCategory[];
  };
}

const skillsContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const skillItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 0.84, 0.44, 1] },
  },
};

const quickFacts = [
  { label: "8+ años experiencia", variant: "cyan" },
  { label: "NTT DATA", variant: "magenta" },
  { label: "SaaS builder", variant: "green" },
  { label: "Freelance selectivo", variant: "yellow" },
] as const;

const renderBio = (paragraph: string) => {
  const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const text = part.slice(2, -2);
      return <strong key={part}>{text}</strong>;
    }

    return part;
  });
};

const AboutMe = ({ data }: AboutMeProps) => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden border-b-4 border-[var(--border)] bg-[var(--bg-base)] py-24 text-[var(--text-primary)] scroll-snap-align-start"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_3px,color-mix(in_srgb,var(--text-primary)_7%,transparent)_4px)] opacity-25 mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,color-mix(in_srgb,var(--accent-cyan)_12%,transparent),transparent_28%),radial-gradient(circle_at_82%_62%,color-mix(in_srgb,var(--accent-magenta)_12%,transparent),transparent_34%)]"
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-3">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
              &gt; CREDIBILITY MODULE
            </p>
            <h2 className="font-heading text-4xl font-black uppercase leading-none text-[var(--text-primary)] sm:text-5xl">
              {data.title}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <Card className="flex flex-col gap-6 border-4 bg-[color-mix(in_srgb,var(--bg-surface)_86%,transparent)] p-5 sm:p-6">
              <div className="relative aspect-square w-full overflow-hidden border-4 border-[var(--border)] bg-[var(--bg-elevated)] shadow-[var(--glow-cyan)]">
                <Image
                  src="/mifoto.jpg"
                  alt={data.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_4px,color-mix(in_srgb,var(--bg-base)_24%,transparent)_5px)]"
                />
              </div>

              <div>
                <p className="font-heading text-3xl font-black uppercase leading-none text-[var(--text-primary)]">
                  Marcos Giannini
                </p>
                <p className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent-green)]">
                  Frontend Engineer
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {quickFacts.map((fact) => (
                  <Badge
                    key={fact.label}
                    label={fact.label}
                    variant={fact.variant}
                  />
                ))}
              </div>
            </Card>

            <Card className="flex flex-col justify-between gap-8 border-4 bg-[color-mix(in_srgb,var(--bg-surface)_78%,transparent)] p-6 sm:p-8">
              <div>
                <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-magenta)]">
                  BIO / CONTEXTO PROFESIONAL
                </p>
                <div className="space-y-5 text-lg leading-8 text-[var(--text-secondary)]">
                  {data.bio.map((paragraph) => (
                    <p key={paragraph} className="[&_strong]:text-[var(--text-primary)]">
                      {renderBio(paragraph)}
                    </p>
                  ))}
                </div>
              </div>

              <Button
                href="/CV_MarcosGiannini_Frontend.pdf"
                download
                size="lg"
                className="w-full font-mono uppercase tracking-[0.14em] sm:w-fit"
              >
                {data.cvButton}
              </Button>
            </Card>
          </div>

          <div id="skills" className="mt-14">
            <div className="mb-7 flex flex-col gap-2">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
                  STACK / TOOLING
                </p>
                <h3 className="mt-2 font-heading text-3xl font-black uppercase text-[var(--text-primary)]">
                  {data.skillsTitle}
                </h3>
              </div>
            </div>

            <motion.div
              className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              variants={skillsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {data.skillCategories.map((cat) => (
                <motion.div
                  key={cat.title}
                  className="h-full"
                  variants={skillItem}
                >
                  <Card className="flex h-full flex-col gap-5 border-4 bg-[var(--bg-surface)] p-5">
                    <h4 className="flex items-center gap-3 font-mono text-base font-black uppercase tracking-[0.12em] text-[var(--text-primary)]">
                      <span className="h-3 w-3 bg-[var(--accent-cyan)] shadow-[var(--glow-cyan)]" />
                      {cat.title}
                    </h4>
                    <motion.ul
                      className="flex flex-wrap gap-2"
                      variants={skillsContainer}
                    >
                      {cat.items.map((tech) => (
                        <motion.li
                          key={tech}
                          className="border-2 border-[var(--border-accent)] bg-[color-mix(in_srgb,var(--accent-cyan)_10%,var(--bg-base))] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-base)]"
                          variants={skillItem}
                        >
                          {tech}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
