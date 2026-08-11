import { Reveal } from "@/components/reveal";
import { IMG } from "@/lib/images";

export function Chania() {
  return (
    <section id="chania" className="scroll-mt-20 overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
        {/* Imagery */}
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={IMG.chaniaHarbor}
                alt="The Venetian harbour of Chania, Crete"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-[16px] bg-ink px-5 py-4 text-white shadow-xl">
              <p className="font-display text-3xl font-bold leading-none">04</p>
              <p className="mt-1 max-w-[8rem] text-[0.72rem] uppercase tracking-[0.14em] text-white/65">
                Among Greece&apos;s top destinations
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-stone">
              <span className="h-px w-8 bg-clay" />
              The place
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-ink">
              A Venetian town, a Cretan way of life.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 space-y-4 text-pretty text-[0.97rem] leading-relaxed text-stone">
              <p>
                In recent years Chania has seen a remarkable rise in tourism,
                becoming one of the top destinations in Greece alongside Athens,
                Santorini and Mykonos — a Venetian town wrapped around a harbour
                where mountains meet the sea.
              </p>
              <p>
                The famous Cretan hospitality is still very much alive. Locals
                welcome visitors freely, neighbours share garden produce, and a
                genuine, unhurried spirit makes living here unlike anywhere
                else.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-9 grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                ["Blue Flag", "beaches minutes away"],
                ["Year-round", "international airport"],
                ["Mild winters", "320+ days of sun"],
                ["Strong demand", "for quality stays"],
              ].map(([a, b]) => (
                <li key={a} className="border-t border-black/[0.08] pt-3">
                  <p className="font-display text-base font-semibold text-ink">
                    {a}
                  </p>
                  <p className="text-[0.82rem] text-stone">{b}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
