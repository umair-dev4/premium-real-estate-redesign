import { notFound } from "next/navigation";
import Link from "next/link";
import { eq, ne } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, slug))
    .limit(1);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, slug))
    .limit(1);

  if (!project) notFound();

  const more = await db
    .select()
    .from(projects)
    .where(ne(projects.slug, slug))
    .orderBy(projects.position)
    .limit(3);

  const specs = [
    project.category && ["Type", project.category],
    project.location && ["Location", project.location],
    project.status && ["Status", project.status],
    project.year && ["Year", String(project.year)],
    project.units && ["Units", String(project.units)],
    project.areaSqm && ["Area", `${project.areaSqm.toLocaleString()} m²`],
  ].filter(Boolean) as [string, string][];

  return (
    <article className="bg-paper">
      {/* Hero */}
      <section className="relative h-[78svh] min-h-[34rem] w-full overflow-hidden bg-ink">
        <img
          src={project.imageUrl}
          alt={project.title}
          fetchPriority="high"
          className="h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/20" />
        <div className="relative mx-auto flex h-full max-w-[1320px] flex-col justify-end px-5 pb-12 sm:px-8">
          <p className="eyebrow flex items-center gap-3 text-white/70">
            <span className="h-px w-8 bg-clay-soft" />
            {project.category}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.2rem,6vw,4.6rem)] font-bold leading-[1] text-white">
            {project.title}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-white/70">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            {project.location}
          </p>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 lg:grid-cols-6">
          {specs.map(([label, value]) => (
            <div key={label} className="bg-paper px-5 py-6">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-stone">
                {label}
              </p>
              <p className="mt-2 font-display text-lg text-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                Overview
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-2xl italic text-ink">
                {project.tagline}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="text-pretty text-[1.05rem] leading-relaxed text-ink/80">
                {project.description}
              </p>
            </Reveal>

            {project.highlights && project.highlights.length > 0 && (
              <Reveal delay={120}>
                <ul className="mt-9 grid grid-cols-2 gap-4">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 border-t border-ink/12 pt-3 text-sm text-ink/80"
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={160}>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-teal px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-clay"
              >
                Enquire about this project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                Gallery
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Reveal key={src} delay={(i % 2) * 90}>
                  <div
                    className={`overflow-hidden rounded-[20px] ${
                      i === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} — view ${i + 1}`}
                      loading="lazy"
                      className={`w-full object-cover ${
                        i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More projects */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-ink">
              More projects
            </h2>
            <Link
              href="/projects"
              className="link-underline text-sm font-medium uppercase tracking-[0.16em] text-ink"
            >
              All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
