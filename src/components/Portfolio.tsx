"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { projects, testimonials, type Project } from "@/content/site";
import { ArrowRight } from "./icons";
import { Reveal, Spotlight } from "./motion";
import ProjectPreview from "./ProjectPreview";
import SectionHeading from "./SectionHeading";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))] as const;

const coverGradients: Record<Project["category"], string> = {
  Web: "linear-gradient(135deg, #207bff, #19d4ff)",
  Mobile: "linear-gradient(135deg, #5921fe, #207bff)",
  Desktop: "linear-gradient(135deg, #0c2257, #207bff)",
  SaaS: "linear-gradient(135deg, #010e2e, #5921fe)",
};

function Cover({ project }: { project: Project }) {
  const shot = project.images?.[0];
  if (shot && project.frame === "phone") {
    // Phone screenshots: the top of the screen, large, rising out of the brand gradient.
    return (
      <div className="absolute inset-0" style={{ backgroundImage: coverGradients[project.category] }}>
        <div className="hex-pattern-light absolute inset-0" />
        <div className="absolute top-6 left-1/2 aspect-[9/20] w-[44%] max-w-56 -translate-x-1/2 overflow-hidden rounded-[1.4rem] border-4 border-navy-950 bg-navy-950 shadow-2xl shadow-navy-950/40 transition duration-700 group-hover:-translate-y-2">
          <Image
            src={shot.src}
            alt={shot.caption}
            fill
            sizes="(min-width: 1024px) 224px, 45vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }
  if (shot) {
    return (
      <div className="absolute inset-0 bg-navy-950">
        <Image
          src={shot.src}
          alt={shot.caption}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </div>
    );
  }
  return (
    <div
      className="absolute inset-0 transition duration-700 group-hover:scale-110"
      style={{ backgroundImage: coverGradients[project.category] }}
    >
      <div className="hex-pattern-light absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span className="font-display text-3xl font-bold tracking-tight text-white drop-shadow transition duration-700 group-hover:scale-90">
          {project.client}
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects we're proud of."
            subtitle="A selection of products we've designed and built across industries. Click any project to preview it."
          />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-300 active:scale-95 ${
                  active === f
                    ? "bg-brand-gradient text-white shadow-md shadow-brand-500/25"
                    : "border border-brand-200 bg-white text-navy-600 hover:border-brand-500 hover:text-brand-600"
                }`}
              >
                {f}
                <span
                  className={`rounded-full px-1.5 text-xs ${active === f ? "bg-white/25" : "bg-brand-50 text-brand-600"}`}
                >
                  {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Each card reveals on its own: a single reveal around the whole grid could
            never trigger on phones, where the stacked cards are taller than the screen. */}
        <div
          key={active}
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${projects.length <= 4 ? "" : "lg:grid-cols-3"}`}
        >
          {shown.map((p, i) => {
            const count = p.images?.length ?? 0;
            return (
              <Reveal key={p.title} delay={(i % 3) * 80} className="h-full">
                <Spotlight
                  as="article"
                  className="animate-card-in group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/15"
                  style={{ "--delay": `${i * 70}ms` } as CSSProperties}
                >
                  <div className={`relative overflow-hidden aspect-[16/10]`}>
                    <Cover project={p} />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-950 backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-navy-950">
                      {/* The stretched button makes the whole card open the preview. */}
                      <button
                        type="button"
                        onClick={() => setOpen(p)}
                        className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none after:focus-visible:rounded-2xl after:focus-visible:ring-2 after:focus-visible:ring-brand-500"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <p className="mt-2 flex-1 text-navy-600">{p.summary}</p>
                    {p.result && <p className="mt-4 text-sm font-semibold text-brand-600">✦ {p.result}</p>}
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      {count > 0 ? `View ${count} screenshot${count === 1 ? "" : "s"}` : "View details"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>

        <ProjectPreview
          key={open?.title}
          project={open}
          onClose={() => setOpen(null)}
          cover={(p) => <Cover project={p} />}
        />

        {testimonials.length > 0 && (
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative rounded-2xl border border-brand-100 bg-white p-8 shadow-sm"
              >
                <span className="text-brand-gradient absolute top-4 right-6 font-display text-6xl leading-none font-bold">
                  “
                </span>
                <blockquote className="text-lg leading-relaxed text-navy-900">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-navy-950">{t.name}</span>
                  <span className="text-navy-600"> · {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
