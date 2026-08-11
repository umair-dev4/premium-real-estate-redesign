import { Reveal } from "@/components/reveal";
import { InquiryForm } from "@/components/inquiry-form";
import { site } from "@/lib/site";

const benefits = [
  "No obligation to proceed",
  "Off-market access included",
  "Matched to your ideal advisor",
  "Response within 24 hours",
];

const Check = () => (
  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-clay/12 text-clay">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export function CtaContact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-stone">
                <span className="h-px w-8 bg-clay" />
                Get in Touch
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.04] tracking-tight text-ink">
                Get in Touch
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-stone">
                Tell us what you have in mind — buying, building, or simply
                understanding what your West Crete property may be worth. Our
                team responds personally.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm font-medium text-ink">
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/[0.08] pt-6">
                <a href={site.phoneHref} className="group flex flex-col">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone-light">
                    Call
                  </span>
                  <span className="font-display text-lg font-semibold text-ink group-hover:text-clay">
                    {site.phone}
                  </span>
                </a>
                <a href={site.emailHref} className="group flex flex-col">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone-light">
                    Email
                  </span>
                  <span className="font-display text-lg font-semibold text-ink group-hover:text-clay">
                    {site.email}
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <InquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
