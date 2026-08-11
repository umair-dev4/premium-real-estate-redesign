import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export type LegalSection = {
  heading: string;
  body: string[];
};

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-paper">
      <section className="border-b border-ink/10 pt-36 pb-14 sm:pt-44">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-stone">
              <span className="h-px w-8 bg-clay" />
              Legal
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1] text-ink">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-sm text-stone">Last updated · {updated}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-pretty text-[0.95rem] leading-relaxed text-stone">
                {intro}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 hidden border-t border-ink/12 pt-5 lg:block">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-stone">
                  On this page
                </p>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.heading}>
                      <a
                        href={`#sec-${i}`}
                        className="link-underline w-fit text-ink/70 hover:text-ink"
                      >
                        {String(i + 1).padStart(2, "0")} · {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {sections.map((s, i) => (
              <Reveal key={s.heading}>
                <div
                  id={`sec-${i}`}
                  className="scroll-mt-28 border-t border-ink/12 py-9 first:border-t-0 first:pt-0"
                >
                  <h2 className="font-display text-2xl text-ink">
                    <span className="text-clay">{String(i + 1).padStart(2, "0")}.</span>{" "}
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-pretty text-[0.97rem] leading-relaxed text-stone">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="mt-10 rounded-[20px] border border-black/[0.08] bg-paper p-7">
                <p className="font-display text-xl text-ink">
                  Questions about this policy?
                </p>
                <p className="mt-2 text-sm text-stone">
                  We&apos;re happy to help — reach the studio directly.
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a href={site.emailHref} className="link-underline text-ink">
                    {site.email}
                  </a>
                  <a href={site.phoneHref} className="link-underline text-ink">
                    {site.phone}
                  </a>
                  <Link href="/contact" className="link-underline text-ink">
                    Contact form
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
