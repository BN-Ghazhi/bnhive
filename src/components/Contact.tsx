"use client";

import { useState, type FormEvent } from "react";
import { contact, services, site, whatsappLink } from "@/content/site";
import { MailIcon, PinIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./motion";

type Form = { name: string; email: string; service: string; budget: string; message: string };

const empty: Form = { name: "", email: "", service: "", budget: "", message: "" };

function compose(f: Form) {
  const lines = [`Hi BnHive! I'm ${f.name}.`];
  if (f.service) lines.push(`I'm interested in: ${f.service}`);
  if (f.budget) lines.push(`Budget: ${f.budget}`);
  lines.push("", f.message);
  if (f.email) lines.push("", `Email: ${f.email}`);
  return lines.join("\n");
}

const field =
  "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-navy-950 placeholder:text-navy-600/50 focus:border-brand-500 transition duration-200 hover:border-brand-200 focus:ring-4 focus:ring-brand-500/15 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<Form>(empty);
  const set = (k: keyof Form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function sendWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(whatsappLink(compose(form)), "_blank", "noopener,noreferrer");
  }

  function sendEmail() {
    const subject = `Project enquiry from ${form.name || "website"}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(compose(form))}`;
  }

  return (
    <section id="contact" className="bg-linear-to-b from-white to-brand-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-5">
        <Reveal variant="left" className="lg:col-span-2">
          <p className="text-sm font-semibold tracking-wide text-brand-500 uppercase">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg text-navy-600">{contact.subtitle}</p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-4 rounded-2xl bg-whatsapp p-5 text-white shadow-lg shadow-whatsapp/25 transition duration-300 btn-shine hover:-translate-y-1 hover:shadow-xl hover:shadow-whatsapp/35"
          >
            <WhatsAppIcon className="h-9 w-9 shrink-0" />
            <span>
              <span className="block font-semibold">Chat with us on WhatsApp</span>
              <span className="block text-sm text-white/85">{site.whatsappDisplay}</span>
            </span>
          </a>

          <ul className="mt-6 space-y-4 text-navy-600">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-brand-500">
                <MailIcon className="h-5 w-5 text-brand-500" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PinIcon className="h-5 w-5 text-brand-500" />
              {site.location}
            </li>
          </ul>
        </Reveal>

        <Reveal variant="right" delay={120} className="lg:col-span-3">
          <form
            onSubmit={sendWhatsApp}
            className="rounded-3xl border border-brand-100 bg-white p-6 shadow-xl shadow-brand-500/10 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy-950">Your name *</span>
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  className={field}
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy-950">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  className={field}
                  placeholder="jane@company.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy-950">What do you need?</span>
                <select value={form.service} onChange={set("service")} className={field}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Something else</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-navy-950">Budget</span>
                <select value={form.budget} onChange={set("budget")} className={field}>
                  <option value="">Select a range</option>
                  {contact.budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-navy-950">
                  Tell us about your project *
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  className={field}
                  placeholder="What are you building, who is it for, and when do you need it?"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white transition btn-shine hover:-translate-y-0.5 hover:shadow-lg hover:shadow-whatsapp/30 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={(e) => {
                  const formEl = e.currentTarget.form;
                  if (formEl?.reportValidity()) sendEmail();
                }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-200 px-6 py-3.5 font-semibold text-navy-950 transition hover:bg-brand-50"
              >
                <MailIcon className="h-5 w-5" />
                Send via email
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-navy-600">
              Your message opens in WhatsApp or your email app, ready to send.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
