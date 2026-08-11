"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/db/schema";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${
              active === cat
                ? "bg-ink text-paper"
                : "border border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-stone">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {active !== "All" ? ` in ${active}` : ""}
      </p>

      <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
