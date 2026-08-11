import { db } from "@/db";
import { projects } from "@/db/schema";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { PageHero } from "@/components/page-hero";
import { IMG } from "@/lib/images";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Properties",
  description:
    "Villas, residences, apartments and boutique hotels designed and built by Hellenic Homes across West Crete.",
};

export default async function ProjectsPage() {
  const all = await db.select().from(projects).orderBy(projects.position);

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Portfolio"
        title="Properties across"
        accent="West Crete."
        subtitle="A selection of villas, residences, apartments and boutique hotels — each designed, constructed and delivered by our team in Chania."
        image={IMG.villaSea}
      />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <ProjectsExplorer projects={all} />
        </div>
      </section>
    </div>
  );
}
