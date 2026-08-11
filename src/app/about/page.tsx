import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { Disciplines } from "@/components/sections/disciplines";
import { Approach } from "@/components/sections/approach";
import { Chania } from "@/components/sections/chania";
import { Stats } from "@/components/sections/stats";
import { Faq } from "@/components/sections/faq";
import { CtaContact } from "@/components/sections/cta-contact";
import { team } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "About",
  description:
    "Hellenic Homes is a property developer in Chania, Crete with over twenty years of experience designing and building across West Crete.",
};

const cardCls =
  "rounded-[20px] border border-black/[0.06] bg-white shadow-[0_2px_18px_rgba(22,27,76,0.04)]";

const values = [
  {
    title: "Clarity",
    body: "Transparent budgets, programmes and reporting — owners always know where a project stands and why.",
  },
  {
    title: "Craft",
    body: "Refined contemporary architecture built with Cretan materials and uncompromising site quality.",
  },
  {
    title: "Long-term value",
    body: "Decisions made for decades of performance, not the cheapest first cost — energy, structure and finish.",
  },
  {
    title: "One team",
    body: "Design, construction and management under a single roof, accountable from land to handover.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="About"
        title="Twenty years building"
        accent="West Crete."
        subtitle="Hellenic Homes S.A. is a property developer in Chania — a single studio of architects, engineers and builders carrying projects from first idea to finished key."
        image={IMG.villaTwilight}
      />

      {/* Story */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={IMG.villaTwilight}
                alt="A Hellenic Homes villa at twilight"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                The story
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-[1.12] tracking-tight text-ink">
                Experience paired with the discipline to deliver.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-7 space-y-5 text-pretty text-[0.97rem] leading-relaxed text-stone">
                <p>
                  Founded in Chania, Hellenic Homes has grown over more than two
                  decades into one of West Crete&apos;s most trusted names in
                  design, construction and development — delivering villas,
                  residences, boutique hotels and mixed-use buildings across the
                  region.
                </p>
                <p>
                  What sets the studio apart is integration. The same team that
                  selects the land and shapes the vision also engineers, builds,
                  finishes and manages the result. That continuity is what allows
                  the work to be both refined and reliable — and to last.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 border-l-2 border-clay pl-4 font-display text-lg font-semibold text-ink">
                &ldquo;We build places that last — for the people who live in
                them and the island they belong to.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Disciplines />
      <Approach />
      <Stats />

      {/* Values */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.08] tracking-tight text-ink">
              What guides every decision.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className={`${cardCls} h-full p-7`}>
                  <span className="font-display text-3xl font-bold text-clay/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-stone">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Chania />

      {/* Leadership */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-stone">
                  <span className="h-px w-8 bg-clay" />
                  Leadership
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.08] tracking-tight text-ink">
                  The people behind the work.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <p className="max-w-xs text-sm leading-relaxed text-stone">
                A multidisciplinary team of engineers, architects and managers
                working under one roof in Chania.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 70}>
                <div className={`${cardCls} h-full p-6`}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-clay/12 font-display text-lg font-bold text-clay">
                    {m.name.charAt(0)}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-clay">
                    {m.role}
                  </p>
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-stone">
                    {m.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <CtaContact />
    </div>
  );
}
