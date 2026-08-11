"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const INTERESTS = [
  "General enquiry",
  "Buy a property",
  "Build or construct",
  "Sell or value",
  "Project management",
  "Investment",
];

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone-light focus:border-clay focus:bg-white";
const labelCls =
  "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();

    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setError("Please enter your name and a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${String(data.phone ?? "")}`,
        `Interest: ${String(data.interest ?? "")}`,
        "",
        String(data.message ?? ""),
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[24rem] flex-col items-start justify-center rounded-[24px] border border-black/[0.06] bg-white p-8 shadow-[0_10px_40px_rgba(22,27,76,0.08)]">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-clay text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink">
          Thank you.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
          Your email app has opened with the enquiry ready. Send that email to
          deliver it to our team in Chania.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 font-semibold uppercase tracking-[0.14em] text-clay"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_10px_40px_rgba(22,27,76,0.08)] sm:p-8"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl font-bold text-ink">
          Free Private Inquiry
        </h3>
        <span className="rounded-full bg-clay/12 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-clay">
          24h reply
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Full name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Optional" className={inputCls} />
        </div>
        <div>
          <label htmlFor="interest" className={labelCls}>Interest</label>
          <select id="interest" name="interest" defaultValue={INTERESTS[0]} className={inputCls}>
            {INTERESTS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelCls}>Your message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A villa near the sea, a renovation in town, an investment…"
          className={`${inputCls} resize-none`}
        />
      </div>

      {status === "error" && error && (
        <p className="mt-4 rounded-xl bg-clay/10 px-4 py-3 text-sm text-clay">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-ink disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send inquiry"}
        {status !== "loading" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  );
}
