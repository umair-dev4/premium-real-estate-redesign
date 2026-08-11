import { Reveal } from "@/components/reveal";
import { Carousel } from "@/components/carousel";
import { team } from "@/lib/data";

const PER = 4;
const slides = Array.from(
  { length: Math.ceil(team.length / PER) },
  (_, i) => team.slice(i * PER, i * PER + PER)
);

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                Our Team
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06] tracking-tight text-ink">
                Meet the people behind the work.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-stone">
              A multidisciplinary team of architects, engineers and managers
              working under one roof in Chania.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <Carousel tone="light">
            {slides.map((group, gi) => (
              <div
                key={gi}
                className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4"
              >
                {group.map((m) => (
                  <div key={m.name} className="group">
                    <div className="overflow-hidden rounded-[20px] border border-black/[0.06] bg-paper">
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-clay">
                      {m.role}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
