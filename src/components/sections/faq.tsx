"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/data";

function FaqItem({
  q,
  a,
  defaultOpen,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-ink/12">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group/faq flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg text-ink sm:text-xl">{q}</span>
        <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-colors duration-300 group-hover/faq:border-clay group-hover/faq:text-clay">
          <span className="absolute h-px w-3 bg-current" />
          <span
            className={`absolute h-3 w-px bg-current transition-transform duration-300 ${
              open ? "rotate-90 opacity-0" : "opacity-100"
            }`}
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 pr-10 text-pretty text-[0.95rem] leading-relaxed text-stone">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-stone">
                  <span className="h-px w-8 bg-clay" />
                  Questions
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.06] text-ink">
                  What clients usually ask first.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-sm text-pretty text-[0.95rem] leading-relaxed text-stone">
                  Every situation is different. If your question isn&apos;t here,
                  we&apos;re happy to speak directly.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <div className="border-t border-ink/12">
                {faqs.map((f, i) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
