import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-teal-deep">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/92 via-teal-deep/70 to-teal-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/85 via-transparent to-teal-deep/50" />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-white/70">
            <span className="h-px w-8 bg-clay-soft" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-white">
            {title}{" "}
            {accent && <span className="text-clay-soft">{accent}</span>}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
