import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/sections/cta-contact";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Contact",
  description:
    "Speak with the Hellenic Homes team in Chania, Crete about buying, building or investing in property across West Crete.",
};

export default function ContactPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Contact"
        title="Begin a project"
        accent="in Crete."
        subtitle="Tell us a little about what you have in mind. Our team in Chania will get back to you with clear next steps."
        image={IMG.oceanviewSunset}
      />
      <CtaContact />
    </div>
  );
}
