"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "./icons";

/** A single horizontal row the visitor scrolls themselves (swipe, trackpad, scrollbar or the arrows). */
export default function ScrollRow({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setEdges({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    const id = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(id);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="scroll-row flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 focus-visible:outline-none"
      >
        {children}
      </div>
      {!edges.start && (
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="absolute top-1/2 -left-3 hidden -translate-y-1/2 rounded-full border border-brand-100 bg-white p-2 text-navy-950 shadow-lg transition hover:scale-110 hover:text-brand-600 sm:block"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>
      )}
      {!edges.end && (
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute top-1/2 -right-3 hidden -translate-y-1/2 rounded-full border border-brand-100 bg-white p-2 text-navy-950 shadow-lg transition hover:scale-110 hover:text-brand-600 sm:block"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
