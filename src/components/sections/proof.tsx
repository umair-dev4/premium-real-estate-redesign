import { Reveal } from "@/components/reveal";
import { Carousel } from "@/components/carousel";
import { partners, testimonials } from "@/lib/data";

const PER = 3;
const slides = Array.from(
  { length: Math.ceil(testimonials.length / PER) },
  (_, i) => testimonials.slice(i * PER, i * PER + PER)
);

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-teal-deep text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-white/60">
                <span className="h-px w-8 bg-clay-soft" />
                Testimonial
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.04] tracking-tight text-white">
                Words That Carry Real Weight
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              See what owners and investors say about working with our team
              across West Crete.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <Carousel tone="dark">
            {slides.map((group, gi) => (
              <div key={gi} className="grid gap-6 md:grid-cols-3">
                {group.map((t) => (
                  <figure
                    key={t.author}
                    className="flex h-full flex-col rounded-[20px] bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
                  >
                    <span
                      aria-hidden
                      className="font-display text-5xl font-bold leading-none text-clay/40"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="-mt-5 flex-1 text-pretty text-[0.95rem] leading-relaxed text-ink/85">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-black/[0.07] pt-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-clay/12 font-display text-sm font-bold text-clay">
                        {t.author.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">
                          {t.author}
                        </span>
                        <span className="text-[0.8rem] text-stone">
                          {t.context}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </Carousel>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/12 pt-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
              Featured on
            </p>
            {[...partners.map((p) => p.name), "Forbes", "ArchDaily"].map((b) => (
              <span
                key={b}
                className="font-display text-lg font-bold tracking-tight text-white/30"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
