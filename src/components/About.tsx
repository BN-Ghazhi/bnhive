import Image from "next/image";
import { about, team } from "@/content/site";
import { CheckIcon } from "./icons";
import { Reveal, Spotlight } from "./motion";
import SectionHeading from "./SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="About BnHive" title={about.title} />
            <Reveal delay={120} className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>
          <div className="grid content-start gap-4">
            {[
              { label: "Our vision", text: about.vision },
              { label: "Our mission", text: about.mission },
            ].map((v, i) => (
              <Reveal key={v.label} variant="right" delay={i * 140}>
                <Spotlight className="rounded-2xl border border-brand-100 bg-linear-to-br from-white to-brand-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10">
                  <p className="flex items-center gap-3 font-display text-lg font-semibold text-navy-950">
                    <span className="bg-brand-gradient h-3 w-3 shrink-0 rotate-45 rounded-[3px]" />
                    {v.label}
                  </p>
                  <p className="mt-2 leading-relaxed text-navy-600">{v.text}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <h3 className="font-display text-2xl font-bold text-navy-950">Why BnHive Technologies</h3>
            <ul className="mt-6 space-y-4">
              {about.why.map((w, i) => (
                <Reveal as="li" key={w} delay={i * 80} className="flex gap-3 text-navy-900">
                  <span className="bg-brand-gradient mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {w}
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal
            variant="right"
            className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-10"
          >
            <div className="animate-drift-b pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="hex-pattern-light pointer-events-none absolute inset-0 opacity-20" />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold">{about.productsTitle}</h3>
              <p className="mt-2 text-white/65">
                Client-specific software and reusable products that can evolve into SaaS platforms.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {about.products.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-white/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {team.length > 0 && (
          <>
            <h3 className="mt-20 font-display text-2xl font-bold text-navy-950">Meet the team</h3>
            <ul className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {team.map((m, i) => (
                <li key={`${m.name}-${i}`}>
                  <div className="bg-brand-gradient-violet relative aspect-square overflow-hidden rounded-2xl">
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="hex-pattern-light absolute inset-0" />
                        <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold text-white">
                          {initials(m.name)}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="mt-4 font-semibold text-navy-950">{m.name}</p>
                  <p className="text-sm text-navy-600">{m.role}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
