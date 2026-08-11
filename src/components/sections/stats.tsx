import { Reveal } from "@/components/reveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section id="results" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-stone">
              <span className="h-px w-8 bg-clay" />
              Our Result
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.04] tracking-tight text-ink">
              A record built on results.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone">
              Two decades of work recognised internationally for its design and
              build quality — the numbers behind our reputation in West Crete.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-12 lg:mt-16 lg:grid-cols-4 lg:divide-x lg:divide-black/[0.08]">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="lg:px-10 lg:first:pl-0"
            >
              <span className="block h-1 w-10 rounded-full bg-clay" />
              <p className="mt-5 font-display text-[clamp(2.4rem,4.5vw,3.4rem)] font-extrabold leading-none tracking-tight text-ink">
                {s.value}
              </p>
              <p className="mt-4 max-w-[14rem] text-[0.85rem] leading-relaxed text-stone">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
