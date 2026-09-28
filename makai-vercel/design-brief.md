# Makai Aerial — design brief (Phase 0 contract)

Ground-up redesign. Replaces the previous "Build Record" site entirely.

## Design read

For builders, realtors, golf courses and commercial developers across Dallas-Fort
Worth who need a project photographed and documented from the air. The register
is cinematic and technical at once: a professional aerial production company that
happens to fly drones, not a local drone operator.

## Concept spine

**One aircraft, five assignments.** The desktop site is a single continuous
flight. The visitor's scroll is the throttle: the camera closes on the drone,
passes through its lens, and comes out over one project after another, each a
different kind of aerial work. Every world is a job Makai Aerial gets hired for.
Mobile is not this site at all: it is a fast, quiet portfolio of the same five
assignments, built for a thumb.

## Delivery tier

`spectacle` — Lenis smooth scroll bridged to the GSAP ticker, the multi-leg
scroll-scrub film (A4) as the Tier-1 mechanic, plus a pinned services sequence
and a full-bleed branding close. The desktop is the cinema.

## Locked palette

The user's own established brand palette, carried over deliberately. This is a
redesign of a live brand, not a new one, so brand continuity outranks the
palette rotation; the build differs from the previous one on five other axes
(see the ledger).

- `--mk-paper` `#ECEEEE` cool concrete off-white
- `--mk-raise` `#F5F6F6` lifted panel
- `--mk-line` `#D3D8D8` hairline on paper
- `--mk-ink` `#131719` deep charcoal
- `--mk-muted` `#5C6467` concrete grey
- `--mk-accent` `#1F4D3C` deep site green (the single accent)
- `--mk-night` `#101613` the film's own ground

Defense: one accent hue at two tints, deep for light surfaces and `#8FC3AA` for
the dark film. Family is cool concrete plus charcoal plus deep green: no
graphite-and-ember, no near-black-and-neon, no beige-and-brass, no violet glow.

## Locked type

- Display: **Outfit** (500/600/700), uppercase, tracking `-0.032em`
- Body: **Outfit** (300/400)
- Data, stage labels, field labels: **IBM Plex Mono** (400/500), uppercase, `0.14em`

Google Fonts, which the CSP permits. No serif.

## Corner language

Soft `12px` on capsules, inputs, panels and mobile cards; square on media bands
and section rules. Written rule, applied page-wide.

## Animation mode

Animation mode: animated-website

### Journey shape

`multi-leg`, Architecture A (continuous forward flight). Five worlds means five
legs, and a world change cannot be faked inside one take. Each leg is generated
from the previous leg's ACTUAL last rendered frame, uploaded as its start image,
so position continuity is exact at every seam; velocity continuity comes from
prompting the same slow exit drift on both sides of each seam.

### Journey (one chapter per leg, in flight order)

1. **Approach** — `01 / NORTH TEXAS` — **SEE YOUR PROJECT FROM ABOVE.** The
   drone low and close over an Argyle lot; the camera closes on it and passes
   through its lens. Actions: REQUEST A FLIGHT, VIEW SERVICES.
2. **Construction progress** — `02 / CONSTRUCTION PROGRESS` — **FOUNDATION TO
   COMPLETION.** Recurring aerial photography and video documenting a build
   through every stage. Tags: recurring visits, same flight lines, progress
   archive.
3. **Golf course** — `03 / GOLF COURSE PHOTOGRAPHY` — **THE COURSE FROM ABOVE.**
   Fairways, greens, bunkering and the clubhouse, flown properly.
4. **New home, for sale** — `04 / NEW HOME VIDEO` — **A VIEW BUYERS CANNOT GET
   ON FOOT.** Cinematic aerial photography and video for new and luxury listings.
5. **Commercial construction** — `05 / COMMERCIAL CONSTRUCTION` — **PROGRESS,
   DOCUMENTED FROM ABOVE.** Aerial photography, video and progress monitoring for
   commercial projects, rising away at the end into the branding close.

### World grammar

One byte-identical style preamble across every leg:

photoreal professional commercial drone cinematography, North Texas, late
afternoon into early evening; real professional carbon-black camera drone with a
clearly visible gimbal camera, close, sharp and correctly proportioned; cinematic
grade of cool concrete `#8C9498`, sunlit white stucco `#E9E6DF`, deep twilight sky
`#1B2733` into `#0E1418`, warm interior glass glow `#E8D2AE`; low warm sun from
the upper left with long deep shadows; locked exposure and white balance, no
flicker, minimal motion blur, no on-screen text, no captions, no logos, no
watermarks, no user interface; one unbroken camera move, no cuts, slow steady
motion, easing only at the very start and end; the lower left of the frame stays
low in detail so chapter copy can read over it. Only the subject and focal action
change between legs.

### Mobile framing

Mobile is a DIFFERENT SITE, not a reduced one. No scroll-scrub, no video, no
pinned scenes, no 3D. A normal vertical scroll: one optimised hero still, four
service sections with large portrait photography and large type, a DFW service
area band, the contact block and the footer. Subtle fade-ups on mount only,
never viewport-gated. Every image is a responsive `srcset` of a single still.

### Delivery budget

Desktop clips ≤ 32 MiB across all five legs. Mobile ships no video at all.

### How the journey enacts the spine

The visitor does not read a list of services, they fly the assignments in
sequence, and the scroll is what carries them from one job to the next.

## Anti-convergence ledger

Previous build in this session: the light architectural single-shot "Build
Record" site.

| Axis | Previous | This build |
|---|---|---|
| Palette family | carried over: the user's own live brand palette | unchanged by design, justified above |
| Type pairing | Outfit / IBM Plex Mono | unchanged by design |
| Hero architecture | one continuous descent through a lens into ONE build | one continuous flight through FIVE assignments |
| Journey shape | `single-shot`, 5 seam-exact slices of one take | `multi-leg`, 5 real worlds, exact-frame handoffs |
| Section system | ledger rows plus asymmetric crops | pinned full-bleed service sequence plus mobile-first card stack |
| CTA garments | flood-fill capsule, diamond leader, staggered chevrons | new set, one per placement (see inventory) |

Six axes, four changed, two carried for brand continuity. Tier-1 (A4 scroll
scrub) is fixed for the animated website.

## Section plan — desktop (six sections)

| # | Section | Layout family |
|---|---|---|
| 1 | Journey (pinned multi-leg scroll-scrub) | full-bleed chapters + leg rail |
| 2 | Branding close | full-bleed pulled-up aerial with parallax, headline and CTA pair |
| 3 | Assignment ledger (five services) | alternating image and copy rows |
| 4 | Coverage | type-led DFW band with community list |
| 5 | Request a flight (quote form, D1 backed) | two-column form diptych |
| 6 | Footer | four columns over a hairline, oversized wordmark |

Eyebrow budget on desktop: ceil(6/3) = 2, used at sections 3 and 5 only. Mobile
cards carry a stage label in a mono kicker, which is not an eyebrow.

## Section plan — mobile (separate page, six sections)

| # | Section | Layout family |
|---|---|---|
| 1 | Hero still + headline + CTA | full-bleed portrait image with a copy plate |
| 2 | Construction progress | large portrait photo card + staged line |
| 3 | Golf course | large portrait photo card |
| 4 | New homes | large portrait photo card |
| 5 | Commercial construction | large portrait photo card |
| 6 | DFW coverage, contact, footer | stacked blocks |

Eyebrow budget on desktop: ceil(6/3) = 2. Mobile cards carry labels, not
eyebrows: ceil(6/3) = 2.

## Asset plan

Bespoke generated only, palette-locked, no stock.

1. **Film** — five legs, each ~15s, generated sequentially with exact-frame
   handoffs. Desktop encodes only; mobile ships no video.
2. **Scene-1 still** — the approved opening frame of leg 1. `refs/scene-01.png`.
3. **Mobile hero still** — portrait, drone filming a luxury North Texas home.
4. **Service stills x4** — portrait: construction progress, golf course, new
   home for sale, commercial construction. These serve the mobile cards and the
   desktop pinned panels.
5. **Branding close still** — wide pulled-up aerial over a DFW luxury
   development.
6. **Launch branding** — cover, OG and favicon for the new identity.

## CTA inventory (each its own component, own interaction identity)

| Intent | Placement | Garment |
|---|---|---|
| REQUEST A FLIGHT | Nav | ink capsule, arrow travels and the tail extends |
| REQUEST A FLIGHT | Journey 1 | capsule that flood-fills from the left |
| VIEW SERVICES | Journey 1 | diamond marker turns, dotted leader draws out |
| REQUEST A FLIGHT | Journey 5 | chevrons stagger in ahead of the label |
| REQUEST A FLIGHT | Branding close | wide understated block that lifts and inverts |
| REQUEST A FLIGHT | Request form | framed block that sweeps a fill |
| REQUEST A FLIGHT | Mobile hero and cards | full-width solid block with a travelling arrow |

Rationed garments (flood-fill, framed block, drawing underline) appear at most
once each page-wide.
