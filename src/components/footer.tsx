import Link from "next/link";
import { site } from "@/lib/site";

function Instagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
function LinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 17v-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function Facebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 8.5h2.5M14 8.5V7a1.5 1.5 0 011.5-1.5H17M14 8.5V11h3M14 8.5c0 3 .5 8.5-2.5 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const socialIcons: Record<string, (typeof Instagram)> = {
  Instagram,
  LinkedIn,
  Facebook,
};

const practiceLinks = [
  { label: "Properties", href: "/projects" },
  { label: "Regions", href: "/#regions" },
  { label: "About", href: "/about" },
  { label: "Questions", href: "/about#faq" },
  { label: "Contact", href: "/contact" },
];

const disciplineLinks = [
  { label: "Construction", href: "/about#disciplines" },
  { label: "Real Estate", href: "/about#disciplines" },
  { label: "Project Management", href: "/about#disciplines" },
  { label: "Development", href: "/about#disciplines" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/65">
      {/* Closing CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="eyebrow flex items-center gap-3 text-white/45">
              <span className="h-px w-8 bg-clay" />
              Start a project
            </p>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.1] text-white">
              Have something in mind for
              <br className="hidden sm:block" /> <span className="italic">West Crete?</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href={site.phoneHref}
              className="group flex flex-col"
            >
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                Call the studio
              </span>
              <span className="link-underline w-fit font-display text-2xl text-white">
                {site.phone}
              </span>
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-clay hover:text-white"
            >
              Enquire
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1320px] px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Hellenic Homes — home">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white">
                <span className="font-display text-base leading-none">H</span>
              </span>
              <span className="leading-none">
                <span className="block font-display text-[1.05rem] tracking-[0.14em] text-white">
                  HELLENIC
                </span>
                <span className="mt-0.5 block text-[0.62rem] font-medium uppercase tracking-[0.42em] text-white/50">
                  Homes
                </span>
              </span>
            </Link>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/50">
              {site.legalName} designs and constructs villas, residences and
              boutique hotels across West Crete — with clarity, craft and
              long-term value.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {site.social.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-clay hover:bg-clay hover:text-white"
                  >
                    {Icon ? <Icon /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Practice */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-white/35">Practice</p>
            <ul className="mt-6 space-y-3 text-sm">
              {practiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline w-fit text-white/65 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-white/35">Disciplines</p>
            <ul className="mt-6 space-y-3 text-sm">
              {disciplineLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline w-fit text-white/65 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-white/35">Studio</p>
            <address className="mt-6 space-y-3 text-sm not-italic text-white/65">
              <p className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 shrink-0 text-clay-soft">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                {site.address.line1}, {site.address.line2}
              </p>
              <p className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-clay-soft">
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L19 13l2 5v3a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                <a href={site.phoneHref} className="link-underline hover:text-white">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-clay-soft">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                <a href={site.emailHref} className="link-underline hover:text-white">
                  {site.email}
                </a>
              </p>
            </address>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-white/45">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400/80" />
              {site.hours}
            </div>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p>© {new Date().getFullYear()} {site.legalName}</p>
            <Link href="/privacy" className="link-underline hover:text-white/70">Privacy</Link>
            <Link href="/terms" className="link-underline hover:text-white/70">Terms</Link>
          </div>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
              Designed &amp; built in Chania, Crete
            </p>
            <a href="#top" className="link-underline flex items-center gap-1.5 hover:text-white/70">
              Back to top
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Oversized watermark wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden px-3 sm:px-7">
        <p className="text-center font-display text-[20vw] leading-[0.78] tracking-tight text-white/[0.04]">
          Hellenic
        </p>
      </div>
    </footer>
  );
}
