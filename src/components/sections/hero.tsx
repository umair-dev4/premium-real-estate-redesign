"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IMG } from "@/lib/images";

type Slide = {
  img: string;
  eyebrow: string;
  title: string;
  text: string;
};

const slides: Slide[] = [
  {
    img: IMG.hero,
    eyebrow: "Luxury Property · Chania, Crete",
    title: "Make a move for your future in Crete.",
    text: "We design and build extraordinary villas, residences and boutique hotels across West Crete — presented with clarity, craft and absolute discretion.",
  },
  {
    img: IMG.oceanviewSunset,
    eyebrow: "Seafront Living",
    title: "Wake up to the Cretan Sea.",
    text: "Front-line villas and apartments where the horizon becomes part of the architecture — built for year-round coastal life.",
  },
  {
    img: IMG.chaniaHarbor,
    eyebrow: "Heritage, Reimagined",
    title: "Restoring Chania's landmarks.",
    text: "From historic consulates to boutique hotels, we preserve the soul of old buildings while renewing them for modern life.",
  },
  {
    img: IMG.villaPool,
    eyebrow: "Boutique Hospitality",
    title: "Hotels built to be remembered.",
    text: "Award-winning resort and boutique-hotel construction — architecture designed to delight guests for decades to come.",
  },
];

const DURATION = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // Autoplay timer (rAF) — pauses cleanly on hover.
  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    let currentP = 0;

    const loop = (now: number) => {
      if (start === null) start = now - currentP * DURATION;
      if (!pausedRef.current) {
        currentP = (now - start) / DURATION;
        if (currentP >= 1) {
          setProgress(1);
          setIndex((i) => (i + 1) % slides.length);
          return;
        }
        setProgress(currentP);
      } else {
        start = now - currentP * DURATION;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [index]);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured properties"
      className="relative min-h-[100svh] w-full overflow-hidden bg-teal-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.img}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority={i === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/92 via-teal-deep/55 to-teal-deep/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-transparent to-teal-deep/45" />
        </div>
      ))}

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1320px] flex-col justify-center px-5 pb-36 pt-32 sm:px-8">
        <div key={index} className="max-w-2xl animate-[heroIn_0.8s_ease-out]">
          <p className="eyebrow flex items-center gap-3 text-white/75">
            <span className="h-px w-10 bg-clay-soft" />
            {slide.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold leading-[0.98] tracking-tight text-white">
            {slide.title}
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            {slide.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              Book a private consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide text-white ring-1 ring-white/35 backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore properties
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
          {/* Counter + dots */}
          <div className="flex items-center gap-5">
            <span className="font-display text-sm font-bold text-white">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="text-white/40">
                {" "}
                / {String(slides.length).padStart(2, "0")}
              </span>
            </span>
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.title}`}
                  className="group p-1"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-7 bg-clay-soft"
                        : "w-1.5 bg-white/40 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Arrows + social proof */}
          <div className="flex items-center gap-5">
            <p className="hidden text-sm text-white/65 lg:block">
              Trusted by <span className="font-semibold text-white">250+</span>{" "}
              owners
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] w-full bg-white/15">
          <div
            className="h-full bg-clay-soft"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
