"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export function Carousel({
  children,
  tone = "light",
  duration = 6000,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  duration?: number;
}) {
  const slides = Children.toArray(children);
  const n = slides.length;
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (n <= 1) return;
    let raf = 0;
    let start: number | null = null;
    let currentP = 0;
    const loop = (now: number) => {
      if (start === null) start = now - currentP * duration;
      if (!pausedRef.current) {
        currentP = (now - start) / duration;
        if (currentP >= 1) {
          setProgress(1);
          setIndex((i) => (i + 1) % n);
          return;
        }
        setProgress(currentP);
      } else {
        start = now - currentP * duration;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [index, n, duration]);

  const go = (i: number) => setIndex((i + n) % n);

  const arrowCls =
    tone === "dark"
      ? "border-white/30 text-white hover:bg-white hover:text-ink"
      : "border-black/15 text-ink hover:bg-ink hover:text-white";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="w-full shrink-0">
              {s}
            </div>
          ))}
        </div>
      </div>

      {n > 1 && (
        <div className="mt-9 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group p-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-7 bg-clay"
                      : tone === "dark"
                        ? "w-1.5 bg-white/35 group-hover:bg-white/60"
                        : "w-1.5 bg-black/20 group-hover:bg-black/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="mr-2 hidden h-1.5 w-28 overflow-hidden rounded-full bg-black/[0.08] sm:block">
              <div
                className={`h-full rounded-full ${
                  tone === "dark" ? "bg-clay-soft" : "bg-clay/60"
                }`}
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${arrowCls}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next"
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${arrowCls}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
