import { nav, site, whatsappLink } from "@/content/site";
import { SocialIcon, WhatsAppIcon } from "./icons";
import Logo from "./Logo";

export default function Footer() {
  const socials = (Object.entries(site.socials) as [keyof typeof site.socials, string][]).filter(
    ([, href]) => href,
  );
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/70">
      <div className="bg-brand-gradient-violet absolute inset-x-0 top-0 h-1" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <a href="#top" aria-label="BnHive home">
            <Logo variant="light" withTagline className="h-16 w-auto" />
          </a>
          <p className="mt-5 max-w-xs text-sm">{site.description}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-cyan-brand">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-white">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-brand"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cyan-brand">
                {site.email}
              </a>
            </li>
          </ul>
          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-cyan-brand hover:text-cyan-brand"
                >
                  <SocialIcon name={name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
