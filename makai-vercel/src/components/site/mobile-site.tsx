import { CtaMobile } from "@/components/site/cta";
import { RequestForm } from "@/components/site/request-form";

/**
 * The phone site. Deliberately NOT the desktop experience reduced: no
 * scroll-scrub, no video, no pinned scenes, no 3D. One hero still, four service
 * blocks, the DFW coverage band, contact details and the footer, on a normal
 * vertical scroll. Every image is a single optimised still, so the whole page is
 * a handful of requests and nothing animates on the scroll thread.
 */

const MOBILE_SERVICES = [
  {
    copy: "Document every stage of your build. Foundation, framing, exterior, completion.",
    image: "/assets/site/svc-progress.jpg",
    label: "Construction progress",
    title: "Document every stage of your build.",
  },
  {
    copy: "Fairways, greens, bunkering, water and facilities, from the air.",
    image: "/assets/site/svc-golf.jpg",
    label: "Golf course",
    title: "Professional golf course photography and video.",
  },
  {
    copy: "Cinematic aerial photography and video for new and luxury listings.",
    image: "/assets/site/svc-homes.jpg",
    label: "New homes",
    title: "Aerial video for new and luxury homes.",
  },
  {
    copy: "Aerial documentation for commercial construction and commercial real estate, monitored as it goes up.",
    image: "/assets/site/svc-commercial.jpg",
    label: "Commercial",
    title: "Commercial construction and real estate documentation.",
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

export function MobileSite() {
  return (
    <main className="mb">
      <header className="mb-nav">
        <a className="mb-nav__brand" href="#top">
          <span className="mb-nav__mark" aria-hidden="true" />
          Makai Aerial
        </a>
        <a className="mb-nav__cta" href="#contact">
          Request a flight
        </a>
      </header>

      <section className="mb-hero" id="top">
        <img
          alt="A professional camera drone filming a completed luxury home in North Texas."
          className="mb-hero__img"
          decoding="async"
          fetchPriority="high"
          height={1738}
          src="/assets/site/mobile-hero.jpg"
          width={1400}
        />
        <div className="mb-hero__plate">
          <p className="mb-kicker">Dallas-Fort Worth, Texas</p>
          <h1 className="mb-h1">See your project from above.</h1>
          <p className="mb-lede">
            Professional aerial photography, video and construction documentation
            throughout DFW.
          </p>
          <CtaMobile href="#contact" label="Request a flight" />
        </div>
      </section>

      <section className="mb-intro">
        <h2 className="mb-h2">Five kinds of aerial work.</h2>
        <p className="mb-lede">
          Makai Aerial flies for builders, realtors, golf courses and commercial
          developers across North Texas.
        </p>
      </section>

      {MOBILE_SERVICES.map((service, index) => (
        <section className="mb-card" key={service.label}>
          <img
            alt={`${service.title} Aerial photography by Makai Aerial.`}
            className="mb-card__img"
            decoding="async"
            height={1738}
            loading="lazy"
            src={service.image}
            width={1400}
          />
          <div className="mb-card__body">
            <p className="mb-kicker">
              {String(index + 1).padStart(2, "0")} / {service.label}
            </p>
            <h2 className="mb-h3">{service.title}</h2>
            <p className="mb-body">{service.copy}</p>
          </div>
        </section>
      ))}

      <section className="mb-area" id="area">
        <p className="mb-kicker">Coverage</p>
        <h2 className="mb-h2">Serving Dallas-Fort Worth.</h2>
        <p className="mb-lede">
          Makai Aerial works one market: North Texas residential and commercial
          construction, luxury homes and golf courses.
        </p>
        <ul className="mb-area__list">
          {COMMUNITIES.map((community) => (
            <li key={community}>{community}</li>
          ))}
        </ul>
      </section>

      <section className="mb-contact" id="contact">
        <p className="mb-kicker">Request a flight</p>
        <h2 className="mb-h2">Tell us about the site.</h2>
        <p className="mb-lede">
          Give us the address and what you need shot. We reply within one working
          day with a flight plan and a price.
        </p>

        <div className="mb-details">
          <a className="mb-detail" href="mailto:zachery@makaiaerial.com">
            <span className="mb-detail__key">Email</span>
            <span className="mb-detail__val">zachery@makaiaerial.com</span>
          </a>
          <a className="mb-detail" href="tel:+18179389790">
            <span className="mb-detail__key">Phone</span>
            <span className="mb-detail__val">(817) 938-9790</span>
          </a>
          <div className="mb-detail">
            <span className="mb-detail__key">Location</span>
            <span className="mb-detail__val">Dallas-Fort Worth, Texas</span>
          </div>
        </div>

        <div className="mb-form">
          <RequestForm />
        </div>
      </section>

      <footer className="mb-footer">
        <p className="mb-footer__mark">Makai Aerial</p>
        <p className="mb-footer__line">Dallas-Fort Worth, Texas</p>
        <p className="mb-footer__line">
          <a href="mailto:zachery@makaiaerial.com">zachery@makaiaerial.com</a>
        </p>
        <p className="mb-footer__line">
          <a href="tel:+18179389790">(817) 938-9790</a>
        </p>
        <p className="mb-footer__note">
          Aerial photography, video and construction documentation. Copyright
          2026 Makai Aerial.
        </p>
      </footer>
    </main>
  );
}
