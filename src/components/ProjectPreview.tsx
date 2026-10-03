"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { whatsappLink, type Project } from "@/content/site";
import { ArrowRight, CheckIcon, CloseIcon, WhatsAppIcon } from "./icons";

/** Full-screen preview of a project: screenshot gallery plus details. */
export default function ProjectPreview({
  project,
  onClose,
  cover,
}: {
  project: Project | null;
  onClose: () => void;
  cover: (project: Project) => React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const shots = project?.images ?? [];
  const phone = project?.frame === "phone";

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project) {
      if (!dialog.open) dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [project]);

  function go(delta: number) {
    if (shots.length < 2) return;
    setIndex((i) => (i + delta + shots.length) % shots.length);
  }

  const shot = shots[index];

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      aria-label={project ? `${project.title} preview` : undefined}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(72rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-navy-950/75 backdrop:backdrop-blur-sm open:animate-card-in"
    >
      {project && (
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-3 right-3 z-10 rounded-full bg-white/90 p-2 text-navy-600 shadow-md backdrop-blur transition hover:bg-white hover:text-navy-950 lg:shadow-none"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          {/* Gallery */}
          <div className="flex min-w-0 shrink-0 flex-col justify-center bg-navy-950 lg:flex-[1.7] lg:shrink">
            <div
              className={`relative w-full ${phone ? "h-[55dvh] lg:h-[min(80dvh,46rem)]" : "aspect-[16/10]"}`}
            >
              {shot ? (
                <Image
                  key={shot.src}
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-contain"
                  loading="eager"
                />
              ) : (
                <div className="group absolute inset-0 overflow-hidden">{cover(project)}</div>
              )}
              {shots.length > 1 && (
                <>
                  <GalleryButton side="left" onClick={() => go(-1)} />
                  <GalleryButton side="right" onClick={() => go(1)} />
                  <span className="absolute right-3 bottom-3 rounded-full bg-navy-950/70 px-2.5 py-1 text-xs font-medium text-white">
                    {index + 1} / {shots.length}
                  </span>
                </>
              )}
            </div>
            {shot && <p className="px-5 pt-3 text-sm text-white/80">{shot.caption}</p>}
            {shots.length > 1 && (
              <ul className="flex gap-2 overflow-x-auto px-5 pt-3 pb-4">
                {shots.map((s, i) => (
                  <li key={s.src} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
                      aria-current={i === index}
                      className={`relative block h-12 overflow-hidden rounded-md ring-2 transition ${
                        phone ? "w-7" : "w-20"
                      } ${i === index ? "ring-cyan-brand" : "opacity-60 ring-transparent hover:opacity-100"}`}
                    >
                      <Image src={s.src} alt="" fill sizes="80px" className="object-cover object-top" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col p-6 sm:p-8 lg:min-h-0 lg:overflow-y-auto">
            <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {project.category}
            </span>
            <h3 className="mt-3 pr-8 font-display text-2xl font-bold text-navy-950">{project.title}</h3>
            {project.client !== project.title && (
              <p className="mt-1 text-sm text-navy-600">for {project.client}</p>
            )}
            <p className="mt-4 text-navy-600">{project.summary}</p>
            {project.highlights && (
              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-navy-900">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
            {project.result && (
              <p className="mt-5 text-sm font-semibold text-brand-600">✦ {project.result}</p>
            )}
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:shadow-lg"
                >
                  Visit {new URL(project.link).hostname}
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              <a
                href={whatsappLink(`Hi BnHive! I saw ${project.title} on your site and I'd like something similar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:border-brand-500 hover:text-brand-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Want something like this?
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function GalleryButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous screenshot" : "Next screenshot"}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-navy-950 shadow-lg transition hover:scale-110 hover:bg-white ${
        side === "left" ? "left-3" : "right-3"
      }`}
    >
      <ArrowRight className={`h-5 w-5 ${side === "left" ? "rotate-180" : ""}`} />
    </button>
  );
}
