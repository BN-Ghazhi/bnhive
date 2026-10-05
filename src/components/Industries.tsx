import { industries } from "@/content/site";
import { Glyph } from "./icons";
import { Reveal, Spotlight } from "./motion";
import SectionHeading from "./SectionHeading";

export default function Industries() {
  return (
    <section id="industries" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Industries"
          title="Technology for every sector."
          subtitle="We build for the sectors that move Africa forward."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.name} delay={(i % 3) * 90} variant="scale">
              <Spotlight className="group flex h-full items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10">
                <span className="bg-brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md shadow-brand-500/25 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Glyph name={ind.icon} className="h-5.5 w-5.5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-navy-950">{ind.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{ind.text}</p>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
