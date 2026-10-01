import Image from "next/image";
import { site } from "@/content/site";

// variant "dark" = navy lettering for light backgrounds; "light" = white lettering for dark backgrounds.
export default function Logo({
  variant = "dark",
  withTagline = false,
  className = "h-9 w-auto",
  priority = false,
}: {
  variant?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const src = withTagline
    ? variant === "dark"
      ? "/brand/logo-full-dark.png"
      : "/brand/logo-full.png"
    : variant === "dark"
      ? "/brand/logo-nav-dark.png"
      : "/brand/logo-nav-light.png";
  const [w, h] = withTagline ? [1400, 404] : [1389, 393];
  return <Image src={src} alt={site.name} width={w} height={h} className={className} priority={priority} />;
}
