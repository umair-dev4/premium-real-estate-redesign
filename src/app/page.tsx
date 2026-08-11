import { projectData } from "@/lib/projects";
import { Hero } from "@/components/sections/hero";
import { HomeAbout } from "@/components/sections/home-about";
import { Stats } from "@/components/sections/stats";
import { RecentProperties } from "@/components/sections/recent-properties";
import { Regions } from "@/components/sections/regions";
import { Testimonials } from "@/components/sections/proof";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";

export default async function HomePage() {
  const recent = projectData.slice(0, 6);

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
