import { techStack } from "@/content/site";

export default function TechMarquee() {
  const items = Array.from(new Set(techStack.flatMap((t) => t.items)));
  // Rendered twice so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <section aria-label="Technologies we use" className="border-y border-brand-100 bg-white py-6">
      <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="animate-marquee flex w-max gap-3">
          {row.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= items.length}
              className="flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/60 px-4 py-2 text-sm font-semibold whitespace-nowrap text-navy-900"
            >
              <span className="bg-brand-gradient h-1.5 w-1.5 rounded-full" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
