"use client";

import { useEffect, useRef, useState } from "react";
import { process, whatsappLink } from "@/content/site";
import { Glyph, WhatsAppIcon } from "./icons";
import { Reveal } from "./motion";

export default function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0); // px of the timeline line that is filled
  const [reached, setReached] = useState(-1); // index of the last step the line has reached

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      // The line "head" sits at 55% of the viewport height.
      const head = window.innerHeight * 0.55 - rect.top;
      const lineEnd = rect.height - 40;
      setFill(Math.max(0, Math.min(head, lineEnd)));
      const items = Array.from(list.querySelectorAll<HTMLElement>(":scope > li"));
      let last = -1;
      items.forEach((el, i) => {
        if (el.offsetTop + 28 <= head) last = i;
      });
      setReached(last);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="process" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="hex-pattern pointer-events-none absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_at_left,black,transparent_60%)]" />
      <div className="animate-drift-b pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-violet-brand/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-500 uppercase">
              <span className="bg-brand-gradient h-px w-6" />
              How we work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              From problem to production <span className="text-brand-gradient-animated">— and beyond.</span>
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              A clear, collaborative process that takes your idea from first conversation to a live, supported
              product — with no surprises along the way.
            </p>

            <div className="mt-8 hidden gap-3 sm:flex">
              {[
                { k: "7", v: "Clear steps" },
                { k: "1", v: "Team, end to end" },
                { k: "∞", v: "Support after launch" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="flex-1 rounded-2xl border border-brand-100 bg-white/80 p-4 backdrop-blur"
                >
                  <p className="text-brand-gradient font-display text-2xl font-bold">{s.k}</p>
                  <p className="mt-0.5 text-xs font-medium text-navy-600">{s.v}</p>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink("Hi BnHive! I'd like to start a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gradient btn-shine mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start your project
            </a>
          </Reveal>
        </div>

        {/* Timeline */}
        <ol ref={listRef} className="relative space-y-5">
          {/* track + animated fill */}
          <span
            aria-hidden
            className="absolute top-7 bottom-10 left-7 w-0.5 -translate-x-1/2 rounded-full bg-brand-100"
          />
          <span
            aria-hidden
            className="absolute top-7 left-7 w-0.5 -translate-x-1/2 rounded-full bg-linear-to-b from-violet-brand via-brand-500 to-cyan-brand transition-[height] duration-150 ease-out"
            style={{ height: fill }}
          />

          {process.map((p, i) => {
            const on = i <= reached;
            return (
              <li key={p.step} className="relative flex gap-5 sm:gap-6">
                <span
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ${
                    on
                      ? "bg-brand-gradient scale-100 border-transparent text-white shadow-lg shadow-brand-500/30"
                      : "scale-90 border-brand-100 bg-white text-brand-500"
                  }`}
                >
                  <Glyph name={p.icon} className="h-6 w-6" />
                  {on && (
                    <span className="bg-brand-gradient absolute inset-0 -z-10 animate-ping rounded-2xl opacity-20 [animation-iteration-count:1]" />
                  )}
                </span>

                <Reveal variant="right" delay={60} className="flex-1">
                  <div
                    className={`group rounded-2xl border p-5 transition-all duration-500 sm:p-6 ${
                      on
                        ? "border-brand-200 bg-white shadow-xl shadow-brand-500/10"
                        : "border-brand-100 bg-white/70"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold text-navy-950 sm:text-xl">
                        {p.title}
                      </h3>
                      <span
                        className={`font-display text-sm font-bold transition-colors duration-500 ${
                          on ? "text-brand-500" : "text-brand-200"
                        }`}
                      >
                        {p.step}
                      </span>
                    </div>
                    <p className="mt-2 leading-relaxed text-navy-600">{p.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
