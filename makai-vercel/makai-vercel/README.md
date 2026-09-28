# Makai Aerial

Premium aerial photography, video and construction documentation for Dallas-Fort
Worth. Two deliberately different experiences in one codebase:

- **Desktop** is a cinematic scroll-driven film. The scroll is the throttle
  through five worlds: drone approach and lens push, construction progress from
  slab to finished home, a golf course, a new luxury home for sale, and
  commercial construction rising away.
- **Mobile** is a separate, light site. No scroll-scrub, no video, no pinning:
  a hero still, four service blocks, the DFW coverage band, contact and footer
  on an ordinary vertical scroll.

Both are chosen before the first paint, so a phone never starts a video fetch.

## Stack

React 19 + TanStack Start (SSR), Vite, TypeScript. The build emits an SSR worker
bundle plus static assets, which is what the deploy config in `wrangler.jsonc`
expects. Styling is plain CSS in `src/styles.css`; there is no CSS framework.

## Getting started

```bash
npm install
npm run dev          # local dev server
npm run build        # builds dist/server + dist/client
npm run typecheck
```

## What is where

| Path | What it is |
|---|---|
| `src/routes/index.tsx` | Picks the desktop or mobile tree, in the layout phase |
| `src/components/site/desktop-site.tsx` | The desktop page: journey, branding close, services, coverage, form, footer |
| `src/components/site/mobile-site.tsx` | The mobile page. Completely separate |
| `src/components/scroll-scrub/` | The scroll-scrub engine: Blob-backed seeking, seek coalescing, lazy segment loading, exact-frame posters, iOS priming, reduced motion, teardown |
| `src/scroll-scrub-scenes.ts` | The five film legs and their chapter copy |
| `src/components/site/scroll-parallax.tsx` | Transform-only parallax on the still imagery |
| `src/components/site/smooth-scroll.tsx` | Lenis smooth scroll bridged to the GSAP ticker |
| `public/assets/world/` | The five film legs and their exact first-frame posters |
| `public/assets/site/` | Desktop and mobile stills |
| `migrations/` | The D1 schema for the flight request form |

## The film

`public/assets/world/leg-01.mp4` through `leg-05.mp4`, five legs of about 15
seconds each. Each was generated from the previous leg's actual last rendered
frame, so the camera never jumps between worlds. They are encoded H.264, GOP 8
with scene-cut keyframes disabled, audio stripped, `faststart`, 28 MiB total.
Each leg's `-poster.jpg` is the exact first frame of the encoded clip, which is
what holds the frame until the browser paints a real decoded one.

If you ever re-encode: keep the GOP small and scene-cut keyframes off. The page
scrubs by assigning `currentTime`, so a sparse or unpredictable keyframe layout
is what makes a scrub stutter.

## Deploying

This Vercel-ready export uses TanStack Start with Nitro.

```bash
npm install
npm run build
```

On Vercel, import this project and deploy it as a TanStack Start application. The
site is fully self-contained for its public experience; the flight request form
falls back to email unless a database is configured.

### Custom domain

Add `makaiaerial.com` and `www.makaiaerial.com` under the Vercel project's
Domains settings, then follow the DNS records Vercel provides.

## The flight request form

The form posts to a server function that writes to a D1 database bound as `DB`.
Without that binding the form still renders and still validates, and falls back
to telling the visitor to email. Setup is in the comments in `wrangler.jsonc`,
and the schema is `migrations/0001_flight_requests.sql`.

## Dependencies you should know about

- **Fonts** load from Google Fonts (`fonts.googleapis.com`), declared in
  `src/routes/__root.tsx` and allowed by the CSP in
  `src/lib/security-headers.server.ts`. To go fully self-hosted, drop the woff2
  files into `public/fonts/`, add `@font-face` rules to `src/styles.css`, remove
  the Google Fonts link, and change `font-src` to `'self'`.
- **`cloudflare:workers`** is imported by `src/lib/bindings.server.ts` to read
  the D1 binding. That is a Cloudflare runtime built-in, not a package.
- **GSAP and Lenis** are pulled in dynamically inside effects, so they never
  touch the module graph on the server and are not part of the first paint.

## What was removed to make this standalone

This project was extracted from a platform-hosted build. Removed: the vendored
Higgsfield UI packages (`@higgsfield/quanta`, `fnf`, `fnf-react`,
`app-landing`) and the whole unused app surface that imported them (layouts,
generation cards, galleries, the design inspector runtime), the platform's build
scripts and manifest, and the platform-only security header origins
(`auth.higgsfield.app` in `frame-src`). Nothing in this project imports a
Higgsfield package or calls a Higgsfield URL.


### Vercel flight request email

The Request a Flight form sends submissions through Resend. Set `RESEND_API_KEY`, `FLIGHT_REQUEST_TO` (defaults to `zachery@makaiaerial.com`), and `FLIGHT_REQUEST_FROM` (defaults to `Makai Aerial <onboarding@resend.dev>`) in Vercel Environment Variables. For production, verify `makaiaerial.com` in Resend and use a From address on that verified domain.
