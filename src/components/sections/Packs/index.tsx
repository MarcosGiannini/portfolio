import type { Pack } from "@/types/portfolio";
import PackCard from "./PackCard";

interface PacksProps {
  data: {
    title: string;
    eyebrow: string;
    description: string;
    availabilityNote: string;
    items: Pack[];
  };
}

export default function Packs({ data }: PacksProps) {
  return (
    <section
      id="packs"
      className="relative overflow-hidden border-b-4 border-[var(--border)] bg-[var(--bg-base)] py-24 text-[var(--text-primary)] scroll-snap-align-start"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_3px,color-mix(in_srgb,var(--text-primary)_6%,transparent)_4px)] opacity-20 mix-blend-screen"
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
            {data.eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-black uppercase leading-none text-[var(--text-primary)] md:text-5xl">
            {data.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
            {data.description}
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-mono text-xs font-bold uppercase leading-6 tracking-[0.14em] text-[var(--text-muted)]">
            {data.availabilityNote}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {data.items.map((pack) => (
            <PackCard key={pack.name} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  );
}
