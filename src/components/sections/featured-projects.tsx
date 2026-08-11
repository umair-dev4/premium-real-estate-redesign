import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                Featured Listing
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.04] tracking-tight text-ink">
                Featured Properties
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-stone">
                A selection of our most exclusive villas, residences and
                boutique hotels across West Crete.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-clay"
            >
              View all properties
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <ProjectCard project={p} eager={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
