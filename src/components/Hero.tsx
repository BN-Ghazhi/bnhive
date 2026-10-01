import Image from "next/image";
import type { CSSProperties } from "react";
import { hero, stats, whatsappLink } from "@/content/site";
import { ArrowRight, WhatsAppIcon } from "./icons";
import { CountUp, Reveal, RotatingWords } from "./motion";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

// Positions for the floating chips around the logo (percent of the visual box).
const chipSpots = [
  "top-[6%] left-[4%]",
  "top-[14%] right-[0%]",
  "top-[46%] -left-[6%]",
  "top-[52%] -right-[4%]",
  "bottom-[8%] left-[10%]",
  "bottom-[2%] right-[14%]",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pt-32 pb-20 sm:pt-40 sm:pb-24"
    >
      {/* background */}
      <div className="hex-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
      <div className="animate-drift-a pointer-events-none absolute -top-32 right-[-8%] h-[520px] w-[520px] rounded-full bg-cyan-brand/30 blur-[110px]" />
      <div className="animate-drift-b pointer-events-none absolute top-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-violet-brand/15 blur-[110px]" />
      <div className="animate-drift-a pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-brand-500/10 blur-[100px] [animation-delay:-6s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p
            style={delay(0)}
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-600 shadow-sm backdrop-blur"
          >
            <span className="bg-brand-gradient animate-pulse-dot h-2 w-2 rounded-full" />
            {hero.eyebrow}
          </p>

          <h1
            style={delay(120)}
            className="animate-rise mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight text-navy-950 sm:text-6xl"
          >
            {hero.title} <span className="text-brand-gradient-animated">{hero.highlight}</span>
          </h1>

          <p
            style={delay(240)}
            className="animate-rise mt-5 font-display text-xl font-semibold text-navy-900 sm:text-2xl"
          >
            {hero.buildPrefix} <RotatingWords words={hero.rotating} />
          </p>

          <p style={delay(360)} className="animate-rise mt-5 max-w-xl text-lg text-navy-600">
            {hero.subtitle}
          </p>

          <div style={delay(480)} className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gradient btn-shine inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy-950/15 bg-white/80 px-6 py-3.5 font-semibold text-navy-950 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* visual */}
        <div style={delay(300)} className="animate-rise relative mx-auto hidden aspect-square w-full max-w-md lg:block">
          <div className="absolute inset-[6%] rounded-full border border-dashed border-brand-200 animate-spin-slower" />
          <div className="absolute inset-[18%] rounded-full border border-brand-200/80 animate-spin-slow">
            <span className="bg-brand-gradient absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(32,123,255,0.8)]" />
          </div>
          <div className="bg-brand-gradient-violet absolute inset-[24%] rounded-full opacity-30 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={443}
              height={512}
              priority
              className="animate-float relative h-auto w-[46%] drop-shadow-[0_30px_40px_rgba(32,123,255,0.35)]"
            />
          </div>
          {hero.chips.map((c, i) => (
            <span
              key={c}
              className={`animate-float absolute ${chipSpots[i % chipSpots.length]} rounded-xl border border-white/80 bg-white/80 px-3 py-1.5 text-sm font-semibold text-navy-900 shadow-lg shadow-brand-500/10 backdrop-blur`}
              style={{ animationDelay: `${-i * 1.1}s`, animationDuration: `${5 + (i % 3)}s` }}
            >
              <span className="bg-brand-gradient mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle" />
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-5">
        <dl className="grid max-w-2xl grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="rounded-2xl border border-brand-100 bg-white/80 p-5 shadow-sm shadow-brand-500/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-brand-gradient font-display text-3xl font-bold sm:text-4xl">
                <CountUp value={s.value} />
              </dd>
              <dd className="mt-1 text-sm text-navy-600">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
