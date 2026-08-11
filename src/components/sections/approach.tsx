import { Reveal } from "@/components/reveal";
import { process } from "@/lib/data";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-stone">
                  <span className="h-px w-8 bg-clay" />
                  The approach
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06] text-ink">
                  From the first idea
                  <br />
                  to the <span className="italic">final key.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-sm text-pretty text-[0.95rem] leading-relaxed text-stone">
                  A single, accountable team carries every project through four
                  deliberate stages — so owners always know what is happening,
                  and why.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="relative">
              {process.map((step, i) => (
                <Reveal as="li" key={step.index} delay={i * 70}>
                  <div className="flex gap-6 border-b border-ink/12 pb-10 pt-10 first:pt-0 last:border-b-0">
                    <div className="flex flex-col items-center">
                      <span className="font-display text-3xl text-clay">
                        {step.index}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-stone">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
