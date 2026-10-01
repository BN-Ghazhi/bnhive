import { Reveal } from "./motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-500 uppercase">
        <span className="bg-brand-gradient h-px w-6" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-navy-600">{subtitle}</p>}
    </Reveal>
  );
}
