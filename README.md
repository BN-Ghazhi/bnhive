# bnhive website

Next.js + Tailwind CSS marketing site for bnhive.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Editing content

All copy lives in `src/content/site.ts` — company info, WhatsApp number, services,
portfolio projects, testimonials, team and contact options.

- **WhatsApp:** set `whatsappNumber` in international format, digits only (e.g. `2348012345678`).
- **Project images:** add files to `public/work/` and set `image: "/work/name.jpg"` on a project.
- **Team photos:** add files to `public/team/` and set `photo: "/team/name.jpg"`.

## Deploy

`npm run build` produces a fully static site. Deploy to Vercel, Netlify, or any Node host.
