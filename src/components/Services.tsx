import { services, techStack } from "@/content/site";
import { Glyph } from "./icons";
import { Reveal, Spotlight } from "./motion";
import SectionHeading from "./SectionHeading";
import ScrollRow from "./ScrollRow";
import TechLogo from "./TechLogo";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What we do"
          title="We build digital solutions."
          subtitle="From a single app to a full SaaS platform — one team for all of it."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <Spotlight
                as="article"
                className="group h-full rounded-2xl border border-brand-100 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-brand-gradient group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/30">
                  <Glyph name={s.icon} className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.description}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <h3 className="font-display text-2xl font-bold text-navy-950">Our technology stack</h3>
              <p className="text-sm text-navy-600">Scroll to see more →</p>
            </div>
            <div className="mt-8">
              <ScrollRow label="Our technology stack">
                {techStack.map((t) => (
                  <div key={t.area} className="shrink-0 snap-start">
                    <p className="text-xs font-semibold tracking-wide whitespace-nowrap text-brand-500 uppercase">
                      {t.area}
                    </p>
                    <ul className="mt-3 flex gap-2.5">
                      {t.items.map((i) => (
                        <li
                          key={i}
                          title={i}
                          className="flex w-[4.75rem] flex-col items-center gap-1.5 rounded-xl border border-brand-100 bg-white px-1.5 py-3 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
                        >
                          <TechLogo name={i} />
                          <span className="text-[11px] leading-tight font-medium text-navy-900">{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ScrollRow>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
