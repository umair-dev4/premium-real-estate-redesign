import { db } from "@/db";
import { projects } from "@/db/schema";
import { Hero } from "@/components/sections/hero";
import { HomeAbout } from "@/components/sections/home-about";
import { Stats } from "@/components/sections/stats";
import { RecentProperties } from "@/components/sections/recent-properties";
import { Regions } from "@/components/sections/regions";
import { Testimonials } from "@/components/sections/proof";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const all = await db.select().from(projects).orderBy(projects.position);
  const recent = all.slice(0, 6);

  return (
    <>
      <Hero />
      <HomeAbout />
      <Stats />
      <RecentProperties projects={recent} />
      <Regions />
      <Testimonials />
      <Team />
      <Faq />
    </>
  );
}
