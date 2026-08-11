import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { IMG } from "@/lib/images";

export function HomeAbout() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={IMG.villaTwilight}
                alt="A Hellenic Homes villa overlooking the sea at twilight"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-[16px] bg-ink px-6 py-4 text-white shadow-xl">
              <p className="font-display text-3xl font-bold leading-none">20+</p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-white/65">
                Years in West Crete
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-stone">
              <span className="h-px w-8 bg-clay" />
              About Hellenic Homes
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-ink">
              A single team, from first idea to finished key.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 space-y-4 text-pretty text-[0.97rem] leading-relaxed text-stone">
              <p>
                Hellenic Homes is a property developer in Chania with over two
                decades of experience designing and constructing villas,
                residences and boutique hotels across West Crete.
              </p>
              <p>
                Because design, engineering, construction and management sit
                under one roof, a single accountable team carries every project —
                allowing the work to be both refined and reliable, and built to
                last.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/[0.08] pt-6">
              {[
                ["Design", "Architecture & interiors"],
                ["Build", "In-house construction"],
                ["Care", "Management & rentals"],
              ].map(([a, b]) => (
                <div key={a}>
                  <p className="font-display text-base font-semibold text-ink">
                    {a}
                  </p>
                  <p className="text-[0.8rem] text-stone">{b}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-clay"
            >
              Discover our story
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
