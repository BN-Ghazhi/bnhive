"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { projects, testimonials, type Project } from "@/content/site";
import { ArrowRight } from "./icons";
import { Reveal, Spotlight } from "./motion";
import SectionHeading from "./SectionHeading";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))] as const;

const coverGradients: Record<Project["category"], string> = {
  Web: "linear-gradient(135deg, #207bff, #19d4ff)",
  Mobile: "linear-gradient(135deg, #5921fe, #207bff)",
  Software: "linear-gradient(135deg, #0c2257, #207bff)",
};

function Cover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
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

export default function Work() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our work"
            title="Projects we're proud of."
            subtitle="A selection of products we've designed and built for clients across industries."
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

        <Reveal>
          <div
            key={active}
            className={`mt-12 grid gap-6 sm:grid-cols-2 ${projects.length <= 4 ? "" : "lg:grid-cols-3"}`}
          >
            {shown.map((p, i) => {
              const body = (
                <>
                  <div className={`relative overflow-hidden ${projects.length <= 4 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                    <Cover project={p} />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-950 backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="flex items-center justify-between gap-3 font-display text-xl font-semibold text-navy-950">
                      {p.title}
                      {p.link && (
                        <ArrowRight className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-hover:translate-x-1" />
                      )}
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
                    {p.link && (
                      <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                        Visit {new URL(p.link).hostname}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </p>
                    )}
                  </div>
                </>
              );
              const cls =
                "animate-card-in group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/15";
              const style = { "--delay": `${i * 70}ms` } as CSSProperties;
              return p.link ? (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                  style={style}
                >
                  {body}
                </a>
              ) : (
                <Spotlight as="article" key={p.title} className={cls} style={style}>
                  {body}
                </Spotlight>
              );
            })}
          </div>
        </Reveal>

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
