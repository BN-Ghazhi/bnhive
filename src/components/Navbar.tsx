"use client";

import { useEffect, useState } from "react";
import { nav, whatsappLink } from "@/content/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import Logo from "./Logo";
import { ScrollProgress } from "./motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-brand-100/80 bg-white/75 shadow-sm shadow-brand-500/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 ${
            scrolled ? "h-16" : "h-16 sm:h-20"
          }`}
        >
          <a href="#top" aria-label="BnHive home" onClick={() => setOpen(false)} className="transition hover:opacity-80">
            <Logo priority className="h-8 w-auto sm:h-9" />
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-transparent p-1 md:flex">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-brand-50 text-brand-600"
                        : "text-navy-600 hover:bg-brand-50/60 hover:text-brand-500"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gradient btn-shine hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-500/40 md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Let&apos;s talk
          </a>

          <button
            type="button"
            className="rounded-full p-2 text-navy-950 transition hover:bg-brand-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </nav>

        <div
          className={`grid overflow-hidden transition-all duration-500 ease-out md:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-brand-100 px-5 pb-6">
              <ul className="flex flex-col py-2">
                {nav.map((item, i) => (
                  <li
                    key={item.href}
                    className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                    style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 text-base font-medium ${
                        active === item.href ? "text-brand-600" : "text-navy-900 hover:text-brand-500"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gradient flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
