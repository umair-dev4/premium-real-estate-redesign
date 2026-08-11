import Link from "next/link";
import type { Project } from "@/db/schema";

export function ProjectCard({
  project,
  eager = false,
}: {
  project: Project;
  eager?: boolean;
}) {
  const specs: { value: string; label: string }[] = [];
  if (project.units && project.units > 1) {
    specs.push({ value: String(project.units), label: "Units" });
  }
  if (project.areaSqm) {
    specs.push({ value: project.areaSqm.toLocaleString(), label: "m²" });
  }
  if (project.year) {
    specs.push({ value: String(project.year), label: "Year" });
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-white shadow-[0_2px_18px_rgba(22,27,76,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(22,27,76,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur">
            {project.category}
          </span>
        </div>
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-clay px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white">
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-clay">
              {project.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-stone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="text-clay">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              {project.location}
            </p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-ink transition-colors duration-300 group-hover:bg-clay group-hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {specs.length > 0 && (
          <div className="mt-5 flex items-center gap-5 border-t border-black/[0.07] pt-4">
            {specs.map((s) => (
              <div key={s.label}>
                <p className="font-display text-lg font-semibold text-ink">
                  {s.value}
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.12em] text-stone-light">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
