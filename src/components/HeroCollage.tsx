"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { hero } from "@/content/site";
import { ArrowRight } from "./icons";

type Slot = "browser" | "screen" | "phone";

// Positions for the floating chips around the logo (percent of the logo box).
const chipSpots = [
  "top-[6%] left-[4%]",
  "top-[14%] right-[0%]",
  "top-[46%] -left-[6%]",
  "top-[52%] -right-[4%]",
  "bottom-[8%] left-[10%]",
  "bottom-[2%] right-[14%]",
];

/** A slot's images stacked on top of each other; only the current set is opaque. */
function Fade({ slot, set, sizes }: { slot: Slot; set: number; sizes: string }) {
  return (
    <>
      {hero.slides.map((s, i) => (
        <Image
          key={s[slot].src}
          src={s[slot].src}
          alt={i === set ? `${s[slot].label} screenshot` : ""}
          aria-hidden={i !== set}
          fill
          sizes={sizes}
          className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
            i === set ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}

/** Orbit rings with travelling dots. Always visible, behind the logo and the screens. */
function Orbits() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 -top-[9%] -bottom-[9%] flex justify-center"
      aria-hidden
    >
      <div className="relative aspect-square h-full">
        <div className="bg-brand-gradient-violet absolute inset-[22%] rounded-full opacity-30 blur-3xl" />
        <div className="animate-spin-slower absolute inset-[3%] rounded-full border-2 border-dashed border-brand-500/35">
          <span className="absolute top-1/2 -left-2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-violet-brand shadow-[0_0_14px_rgba(89,33,254,0.8)]" />
        </div>
        <div className="animate-spin-slow absolute inset-[16%] rounded-full border-2 border-brand-500/30">
          <span className="bg-brand-gradient absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full shadow-[0_0_16px_rgba(32,123,255,0.9)]" />
        </div>
        <div className="animate-spin-slower absolute inset-[29%] rounded-full border border-cyan-brand/45 [animation-direction:normal]">
          <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-brand shadow-[0_0_12px_rgba(25,212,255,0.9)]" />
        </div>
      </div>
    </div>
  );
}

/** The BnHive logo with floating tech chips. */
function LogoOrbit() {
  return (
    <div className="relative aspect-square h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/brand/logo-mark.png"
          alt="BnHive"
          width={443}
          height={512}
          priority
          className="animate-float relative h-auto w-[46%] drop-shadow-[0_30px_40px_rgba(32,123,255,0.35)]"
        />
      </div>
      {hero.chips.map((c, i) => (
        <span
          key={c}
          className={`animate-float absolute ${chipSpots[i % chipSpots.length]} rounded-xl border border-white/80 bg-white/80 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-navy-900 shadow-lg shadow-brand-500/10 backdrop-blur sm:px-3 sm:py-1.5 sm:text-sm`}
          style={{ animationDelay: `${-i * 1.1}s`, animationDuration: `${5 + (i % 3)}s` }}
        >
          <span className="bg-brand-gradient mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle" />
          {c}
        </span>
      ))}
    </div>
  );
}

/** Product screens: a browser window, a dark app screen and a phone. */
function Collage({ set }: { set: number }) {
  const slide = hero.slides[set];
  return (
    <div className="relative h-full w-full">
      {/* browser window */}
      <div className="animate-float absolute top-0 left-0 w-[86%] overflow-hidden rounded-xl border border-brand-100 bg-white shadow-2xl shadow-brand-500/20 [animation-duration:7s]">
        <div className="flex items-center gap-1.5 border-b border-brand-100 bg-brand-50/70 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate rounded-md bg-white px-2 py-0.5 text-[10px] text-navy-600">
            {slide.browser.label}
          </span>
        </div>
        <div className="relative aspect-[16/10] bg-white">
          <Fade slot="browser" set={set} sizes="(min-width: 1024px) 480px, 86vw" />
        </div>
      </div>

      {/* dark app screen */}
      <div className="animate-float absolute bottom-[2%] left-[4%] w-[46%] overflow-hidden rounded-lg border border-navy-800 bg-navy-950 shadow-2xl shadow-navy-950/30 [animation-delay:-2s] [animation-duration:8s]">
        <div className="relative aspect-[16/10]">
          <Fade slot="screen" set={set} sizes="(min-width: 1024px) 260px, 46vw" />
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            LIVE
          </span>
        </div>
      </div>

      {/* phone */}
      <div className="animate-float absolute right-0 bottom-0 w-[30%] overflow-hidden rounded-[1.4rem] border-[5px] border-navy-950 bg-navy-950 shadow-2xl shadow-navy-950/40 [animation-delay:-4s] [animation-duration:6s]">
        <div className="relative aspect-[9/19]">
          <Fade slot="phone" set={set} sizes="(min-width: 1024px) 170px, 30vw" />
        </div>
      </div>
    </div>
  );
}

/**
 * Hero visual: the visitor switches between the logo and each set of product
 * screens with the arrows, the dots, a swipe or the keyboard arrow keys.
 * Slide 0 is the logo; slides 1..n are the screen sets.
 */
export default function HeroCollage() {
  const total = hero.slides.length + 1;
  const [slide, setSlide] = useState(0);
  const [lastSet, setLastSet] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = (next: number) => {
    const n = (next + total) % total;
    if (n > 0) setLastSet(n - 1);
    setSlide(n);
  };

  const showLogo = slide === 0;
  // Keep the last screen set mounted while fading back to the logo.
  const set = showLogo ? lastSet : slide - 1;
  const label = showLogo ? "BnHive" : hero.slides[set].browser.label;

  return (
    <div
      className="relative mx-auto w-full max-w-xl rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 lg:max-w-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our work"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(slide + 1);
        if (e.key === "ArrowLeft") go(slide - 1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(slide + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="bg-brand-gradient-violet pointer-events-none absolute inset-[12%] rounded-full opacity-25 blur-3xl" />
      <div data-hero-visual className="relative aspect-[6/5]">
        <Orbits />
        <div
          aria-hidden={!showLogo}
          className={`absolute inset-0 flex justify-center transition-all duration-700 ease-in-out ${
            showLogo ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"
          }`}
        >
          <LogoOrbit />
        </div>
        <div
          aria-hidden={showLogo}
          className={`absolute inset-[6%] transition-all duration-700 ease-in-out ${
            showLogo
              ? "pointer-events-none translate-y-4 scale-95 opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }`}
        >
          <Collage set={set} />
        </div>
      </div>

      {/* controls */}
      <div className="relative mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(slide - 1)}
          aria-label="Previous"
          className="rounded-full border border-brand-200 bg-white p-2.5 text-navy-950 shadow-md transition hover:scale-110 hover:border-brand-500 hover:text-brand-600"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={i === 0 ? "Show logo" : `Show ${hero.slides[i - 1].browser.label}`}
              aria-current={i === slide}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === slide ? "bg-brand-gradient w-7" : "w-2.5 bg-brand-200 hover:bg-brand-500"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(slide + 1)}
          aria-label="Next"
          className="rounded-full border border-brand-200 bg-white p-2.5 text-navy-950 shadow-md transition hover:scale-110 hover:border-brand-500 hover:text-brand-600"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {label}, {slide + 1} of {total}
      </p>
    </div>
  );
}
