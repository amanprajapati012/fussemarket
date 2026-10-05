# Frontend Setup

1. `npm install`
2. Copy `.env.example` to `.env.local` if it isn't already there, and set
   `NEXT_PUBLIC_API_URL` to your backend URL (default: http://localhost:5000/api)
3. `npm run dev` — runs at http://localhost:3000
4. `npm run build && npm run start` — production build

## Where things live
- `app/(site)/` — all public pages (home, about, services, contact, ...)
- `app/admin/` — the admin panel (`/admin/login` to sign in)
- `app/src/components/Homepage/` — homepage sections
- `app/src/layout/` — Header (hover mega-menu) and Footer
- `app/src/data/` — fallback content, used only if the backend is unreachable
- `app/globals.css` — every color/theme variable lives here, change once to re-theme the whole site
- Replace `/public/logo.png` and `/public/logo-white.png` with your real logo files
- Content shown on Services / Team / Testimonials / Clients sections comes from
  the backend API when it's running — otherwise the static fallbacks in
  `app/src/data/` are shown so the site never looks broken.
