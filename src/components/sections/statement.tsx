import { Reveal } from "@/components/reveal";

export function Statement() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                The Practice
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 font-display text-sm italic text-stone">
                Chania · West Crete
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <p className="font-display text-[clamp(1.7rem,3.4vw,2.9rem)] font-bold leading-[1.18] text-ink text-balance">
                Hellenic Homes is a property developer in Chania — combining{" "}
                <span className="italic text-clay">twenty years</span> of
                experience with the discipline to design and build places that
                last.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                <p className="text-pretty text-[0.95rem] leading-relaxed text-stone">
                  We design and construct villas, residences, boutique hotels
                  and mixed-use buildings across West Crete. Every project is
                  carried by a single in-house team — from land and design
                  through construction to a turnkey handover.
                </p>
                <p className="text-pretty text-[0.95rem] leading-relaxed text-stone">
                  Our reputation rests on two things the market rarely delivers
                  together: refined, contemporary architecture and the
                  structural precision that lets it endure. Clarity,
                  craftsmanship and long-term value guide every decision.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
