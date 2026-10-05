import {
  siDart,
  siDocker,
  siFastapi,
  siFlutter,
  siGo,
  siLinux,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRust,
  siSqlite,
  siTauri,
  siTypescript,
} from "simple-icons";
import Image from "next/image";

// Official logos for named technologies.
const brand: Record<string, { path: string; hex: string }> = {
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  Flutter: siFlutter,
  Dart: siDart,
  Rust: siRust,
  Tauri: siTauri,
  Go: siGo,
  Python: siPython,
  FastAPI: siFastapi,
  "Node.js": siNodedotjs,
  PostgreSQL: siPostgresql,
  SQLite: siSqlite,
  Linux: siLinux,
  Docker: siDocker,
};

// Colour icons (Fluent UI System Icons, MIT, see public/tech/LICENSE.txt)
// for items that aren't a single product.
const concept: Record<string, string> = {
  "VPS & Cloud": "/tech/cloud.svg",
  "REST APIs": "/tech/rest-api.svg",
  "Third-party integrations": "/tech/integrations.svg",
  LLMs: "/tech/llm.svg",
  "AI APIs": "/tech/ai-api.svg",
  "Intelligent workflows": "/tech/workflows.svg",
};

export default function TechLogo({ name }: { name: string }) {
  const b = brand[name];
  if (b) {
    return (
      <svg role="img" viewBox="0 0 24 24" aria-hidden className="h-7 w-7" fill={`#${b.hex}`}>
        <path d={b.path} />
      </svg>
    );
  }
  const src = concept[name];
  if (!src) return null;
  return <Image src={src} alt="" width={28} height={28} className="h-7 w-7" />;
}
