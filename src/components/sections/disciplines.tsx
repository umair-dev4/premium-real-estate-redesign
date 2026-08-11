import { Reveal } from "@/components/reveal";
import { disciplines } from "@/lib/data";

export function Disciplines() {
  return (
    <section id="disciplines" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                What we do
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.3rem)] font-bold leading-[1.05] text-ink">
                Four disciplines,
                <br />
                <span className="italic">one accountable team.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-sm text-pretty text-[0.95rem] leading-relaxed text-stone">
              Owners and investors work with a single studio that carries a
              project from first idea to finished key — and beyond.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[16px] bg-black/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal
              key={d.index}
              delay={i * 90}
              className="group flex flex-col bg-cream p-7 transition-colors duration-500 hover:bg-paper sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl text-ink/15 transition-colors duration-500 group-hover:text-clay">
                  {d.index}
                </span>
                <span className="h-px w-8 bg-ink/20 transition-all duration-500 group-hover:w-14 group-hover:bg-clay" />
              </div>

              <h3 className="mt-8 font-display text-2xl text-ink">{d.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-snug text-clay">
                {d.summary}
              </p>
              <p className="mt-4 text-[0.86rem] leading-relaxed text-stone">
                {d.detail}
              </p>

              <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5">
                {d.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-[0.82rem] text-ink/80"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-clay" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
