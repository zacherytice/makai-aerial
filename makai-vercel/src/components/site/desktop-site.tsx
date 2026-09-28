import { CtaBlock, CtaGhost, CtaNav } from "@/components/site/cta";
import { Journey } from "@/components/site/journey";
import { RequestForm } from "@/components/site/request-form";
import { ScrollParallax } from "@/components/site/scroll-parallax";
import { SmoothScroll } from "@/components/site/smooth-scroll";

/**
 * The desktop site. The journey is the spine: the scroll drives a five leg
 * flight through five different kinds of aerial work. Everything after it is
 * still, architected to be read.
 */

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#area", label: "Service area" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    alt: "A luxury custom home mid-construction in North Texas, seen from a drone.",
    copy: "Recurring aerial photography and video documenting a build from foundation through completion.",
    image: "/assets/site/svc-progress.jpg",
    meta: "Recurring visits",
    name: "Construction progress",
  },
  {
    alt: "A premium private golf course in North Texas, seen from a drone.",
    copy: "Professional aerial imagery showcasing golf courses, fairways, greens, facilities and surrounding property.",
    image: "/assets/site/svc-golf.jpg",
    meta: "Courses and facilities",
    name: "Golf course photography and video",
  },
  {
    alt: "A newly completed luxury home marketed for sale, seen from a drone.",
    copy: "Cinematic aerial photography and video for new homes and luxury residential listings.",
    image: "/assets/site/svc-homes.jpg",
    meta: "Listings and handover",
    name: "New home and realtor video",
  },
  {
    alt: "A large commercial construction project under way in North Texas, seen from a drone.",
    copy: "Aerial documentation, photography, video and progress monitoring for commercial projects.",
    image: "/assets/site/svc-commercial.jpg",
    meta: "Progress monitoring",
    name: "Commercial construction",
  },
  {
    alt: "A completed commercial development in North Texas, seen from a drone.",
    copy: "Professional aerial imagery showing commercial properties, developments and the land around them.",
    image: "/assets/site/svc-realestate.jpg",
    meta: "Sites and developments",
    name: "Commercial real estate",
  },
];

const COMMUNITIES = [
  "Argyle",
  "Bartonville",
  "Colleyville",
  "Flower Mound",
  "Frisco",
  "Highland Park",
  "Northlake",
  "Prosper",
  "Southlake",
  "Trophy Club",
  "University Park",
  "Westlake",
];

export function DesktopSite() {
  return (
    <main className="dk">
      <SmoothScroll />
      <ScrollParallax />

      <header className="mk-nav">
        <span aria-hidden="true" className="mk-nav__scrim" />
        <div className="mk-shell mk-nav__inner">
          <a className="mk-nav__brand" href="#top">
            <svg
              aria-hidden="true"
              className="mk-nav__mark"
              fill="none"
              height="26"
              viewBox="0 0 32 32"
              width="26"
            >
              <path
                d="M4 11V5.5A1.5 1.5 0 0 1 5.5 4H11M21 4h5.5A1.5 1.5 0 0 1 28 5.5V11M28 21v5.5a1.5 1.5 0 0 1-1.5 1.5H21M11 28H5.5A1.5 1.5 0 0 1 4 26.5V21"
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="1.6"
              />
              <rect fill="currentColor" height="7" rx="1" width="7" x="12.5" y="12.5" />
            </svg>
            <span>Makai Aerial</span>
          </a>
          <nav aria-label="Site" className="mk-nav__links">
            {NAV_LINKS.map((link) => (
              <a className="mk-nav__link" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <CtaNav href="#contact" label="REQUEST A FLIGHT" />
        </div>
      </header>

      {/* The journey: the scroll is the throttle, five assignments in flight. */}
      <Journey />

      <section className="mk-close" id="close">
        <span aria-hidden="true" className="mk-close__media">
          <img
            alt=""
            data-parallax="16"
            height={933}
            loading="lazy"
            src="/assets/site/close-overview.jpg"
            width={2200}
          />
        </span>
        <div className="mk-shell mk-close__inner">
          <h2 className="mk-close__title mk-reveal">See your project from above.</h2>
          <p className="mk-close__lede mk-reveal" style={{ animationDelay: "70ms" }}>
            Professional aerial photography, video and construction documentation
            throughout the DFW area.
          </p>
          <div className="mk-close__actions">
            <CtaBlock href="#contact" label="REQUEST A FLIGHT" />
            <CtaGhost href="#services" label="VIEW SERVICES" />
          </div>
        </div>
      </section>

      <section className="mk-section mk-section--ruled" id="services">
        <div className="mk-shell">
          <div className="mk-head">
            <p className="mk-eyebrow mk-reveal">Services</p>
            <h2 className="mk-display mk-reveal" style={{ animationDelay: "70ms" }}>
              Five kinds of aerial work.
            </h2>
            <p className="mk-lede mk-reveal" style={{ animationDelay: "140ms" }}>
              One aircraft and one crew across North Texas, from a slab pour in
              Argyle to a finished course, a listing, or a commercial shell going
              up.
            </p>
          </div>

          <ol className="mk-svc">
            {SERVICES.map((service, index) => (
              <li
                className={
                  index % 2 === 1 ? "mk-svc__row mk-svc__row--flip" : "mk-svc__row"
                }
                key={service.name}
              >
                <figure className="mk-svc__frame">
                  <img
                    alt={service.alt}
                    data-parallax="14"
                    height={1738}
                    loading="lazy"
                    src={service.image}
                    width={1400}
                  />
                </figure>
                <div className="mk-svc__body">
                  <span className="mk-svc__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mk-svc__name">{service.name}</h3>
                  <p className="mk-svc__copy">{service.copy}</p>
                  <span className="mk-meta">{service.meta}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mk-section mk-section--ruled mk-section--grid" id="area">
        <div className="mk-shell">
          <div className="mk-area">
            <h2 className="mk-area__statement mk-reveal">
              Serving Dallas-Fort Worth.
            </h2>
            <p className="mk-area__note mk-reveal" style={{ animationDelay: "70ms" }}>
              Makai Aerial works one market. We fly North Texas residential and
              commercial construction, luxury homes and golf courses, and the
              communities around them.
            </p>
            <ul className="mk-area__list">
              {COMMUNITIES.map((community) => (
                <li key={community}>{community}</li>
              ))}
            </ul>
            <p className="mk-area__rule">Not a nationwide operator. DFW only.</p>
          </div>
        </div>
      </section>

      <section className="mk-section mk-section--ruled" id="contact">
        <div className="mk-shell">
          <div className="mk-head">
            <p className="mk-eyebrow mk-reveal">Request a flight</p>
            <h2 className="mk-display mk-reveal" style={{ animationDelay: "70ms" }}>
              Tell us about the site.
            </h2>
            <p className="mk-lede mk-reveal" style={{ animationDelay: "140ms" }}>
              Give us the address and what you need shot. We reply within one
              working day with a flight plan and a price.
            </p>
          </div>

          <div className="mk-contact">
            <RequestForm />
            <div className="mk-details">
              <div className="mk-detail">
                <span className="mk-detail__key">Contact</span>
                <a className="mk-detail__val" href="mailto:zachery@makaiaerial.com">
                  zachery@makaiaerial.com
                </a>
              </div>
              <div className="mk-detail">
                <span className="mk-detail__key">Phone</span>
                <a className="mk-detail__val" href="tel:+18179389790">
                  (817) 938-9790
                </a>
              </div>
              <div className="mk-detail">
                <span className="mk-detail__key">Location</span>
                <span className="mk-detail__val">Dallas-Fort Worth, Texas</span>
              </div>
              <div className="mk-detail">
                <span className="mk-detail__key">Response</span>
                <span className="mk-detail__val">One working day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mk-footer">
        <div className="mk-shell">
          <div className="mk-footer__cols">
            <div>
              <p className="mk-footer__head">Services</p>
              <ul className="mk-footer__list">
                {SERVICES.map((service) => (
                  <li key={service.name}>
                    <a href="#services">{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mk-footer__head">Coverage</p>
              <ul className="mk-footer__list">
                {COMMUNITIES.slice(0, 6).map((community) => (
                  <li key={community}>
                    <a href="#area">{community}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mk-footer__head">Company</p>
              <ul className="mk-footer__list">
                <li>
                  <a href="#close">Overview</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Request a flight</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mk-footer__head">Contact</p>
              <ul className="mk-footer__list">
                <li>
                  <a href="mailto:zachery@makaiaerial.com">
                    zachery@makaiaerial.com
                  </a>
                </li>
                <li>
                  <a href="tel:+18179389790">(817) 938-9790</a>
                </li>
                <li>
                  <span>Dallas-Fort Worth, Texas</span>
                </li>
              </ul>
            </div>
          </div>

          <p aria-hidden="true" className="mk-footer__wordmark">
            Makai Aerial
          </p>

          <div className="mk-footer__base">
            <span className="mk-meta">Aerial photography, video and documentation</span>
            <span className="mk-meta">Copyright 2026 Makai Aerial</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
