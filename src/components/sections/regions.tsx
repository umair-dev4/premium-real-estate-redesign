import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { IMG } from "@/lib/images";

const regions = [
  { name: "Chania Town", img: IMG.chaniaHarbor, count: 9 },
  { name: "Almyrida", img: IMG.seasideSunny, count: 6 },
  { name: "Kolymvari", img: IMG.oceanviewSunset, count: 4 },
  { name: "Apokoronas", img: IMG.stoneAlley, count: 7 },
  { name: "Akrotiri", img: IMG.villaSea, count: 5 },
  { name: "Kato Stalos", img: IMG.villaPatio, count: 3 },
];

export function Regions() {
  return (
    <section id="regions" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                Locations
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.04] tracking-tight text-ink">
                Our Regions
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-stone">
                Discover the home you&apos;ve been waiting for — from the
                Venetian harbour of Chania to the quiet coves of West Crete.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Browse all regions
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {regions.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 80}>
              <Link
                href="/projects"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[20px]"
              >
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/70">
                      {r.count} properties
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">
                      {r.name}
                    </h3>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-clay">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
