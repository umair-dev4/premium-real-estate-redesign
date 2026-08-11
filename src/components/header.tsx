"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = isHome && !scrolled && !open;
  // Keep logo + toggle legible over the dark overlay when the menu is open.
  const chrome = light || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        !light
          ? "border-b border-black/[0.06] bg-paper shadow-[0_6px_30px_rgba(22,27,76,0.06)]"
          : "border-b border-transparent"
      }`}
    >
      {/* Top bar — kept above the overlay so the toggle stays clickable */}
      <div className="relative z-50 mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Hellenic Homes — home"
          className="group flex items-center gap-3"
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-xl transition-colors duration-300 ${
              chrome
                ? "bg-white/15 text-white ring-1 ring-white/30"
                : "bg-ink text-white"
            }`}
          >
            <span className="font-display text-lg font-bold leading-none">H</span>
          </span>
          <span className="leading-none">
            <span
              className={`block font-display text-[1.05rem] font-bold tracking-tight transition-colors ${
                chrome ? "text-white" : "text-ink"
              }`}
            >
              Hellenic Homes
            </span>
            <span
              className={`mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.32em] transition-colors ${
                chrome ? "text-white/65" : "text-stone"
              }`}
            >
              Chania · Crete
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[0.84rem] font-medium tracking-wide transition-colors ${
                light
                  ? "text-white/85 hover:bg-white/10 hover:text-white"
                  : "text-ink/75 hover:bg-ink/[0.06] hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-[0.82rem] font-semibold tracking-wide transition-all duration-300 md:inline-block ${
              light
                ? "bg-clay text-white hover:bg-white hover:text-ink"
                : "bg-ink text-white hover:bg-clay"
            }`}
          >
            Book a consultation
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
              chrome
                ? "text-white hover:bg-white/15"
                : "text-ink hover:bg-ink/[0.06]"
            }`}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink text-white transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-12 pt-28">
          <nav className="flex flex-col">
            {mainNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-white/10 py-5"
              >
                <span className="text-xs text-clay-soft">0{i + 1}</span>
                <span className="font-display text-3xl font-bold text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-white"
            >
              Book a consultation
            </Link>
            <div className="mt-7 flex flex-col gap-2 text-sm text-white/65">
              <a href={site.phoneHref} className="link-underline w-fit">
                {site.phone}
              </a>
              <a href={site.emailHref} className="link-underline w-fit">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
