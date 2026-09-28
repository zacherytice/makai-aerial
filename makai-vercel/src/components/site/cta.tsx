/**
 * Bespoke CTA garments. One component per placement, each with its own
 * interaction identity. No shared button utility anywhere on the site.
 */

type LabelProps = {
  href: string;
  label: string;
};

/** Nav CTA: a solid ink capsule whose arrow travels and whose tail extends. */
export function CtaNav({ href, label }: LabelProps) {
  return (
    <a className="mk-cta-nav" href={href}>
      <span className="mk-cta-nav__text">{label}</span>
      <span aria-hidden="true" className="mk-cta-nav__arrow">
        <svg viewBox="0 0 24 12" width="24" height="12" fill="none">
          <path
            d="M0 6h20M14.5 1.5 20 6l-5.5 4.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      </span>
    </a>
  );
}

/** Journey primary: a capsule that flood-fills from the left, inverting the label. */
export function CtaFlood({ href, label }: LabelProps) {
  return (
    <a className="mk-cta-flood" href={href}>
      <span aria-hidden="true" className="mk-cta-flood__fill" />
      <span className="mk-cta-flood__text">{label}</span>
    </a>
  );
}

/** Journey secondary: a diamond marker that turns, with a dotted leader drawing out. */
export function CtaLeader({ href, label }: LabelProps) {
  return (
    <a className="mk-cta-leader" href={href}>
      <span aria-hidden="true" className="mk-cta-leader__mark" />
      <span className="mk-cta-leader__text">{label}</span>
      <span aria-hidden="true" className="mk-cta-leader__rule" />
    </a>
  );
}

/** Journey departure: staggered chevrons slide in ahead of the label. */
export function CtaChevron({ href, label }: LabelProps) {
  return (
    <a className="mk-cta-chevron" href={href}>
      <span aria-hidden="true" className="mk-cta-chevron__marks">
        <i />
        <i />
        <i />
      </span>
      <span className="mk-cta-chevron__label">{label}</span>
    </a>
  );
}

/** Branding close: an understated wide block that lifts and inverts on hover. */
export function CtaBlock({ href, label }: LabelProps) {
  return (
    <a className="mk-cta-block" href={href}>
      <span className="mk-cta-block__label">{label}</span>
      <span aria-hidden="true" className="mk-cta-block__rule" />
    </a>
  );
}

/** Branding close secondary: an outlined capsule whose border thickens inward and whose label tightens. */
export function CtaGhost({ href, label }: LabelProps) {
  return (
    <a className="mk-cta-ghost" href={href}>
      <span className="mk-cta-ghost__label">{label}</span>
    </a>
  );
}

/** Mobile: a full width solid block with an arrow that runs to the edge. */
export function CtaMobile({ href, label }: LabelProps) {
  return (
    <a className="mb-cta" href={href}>
      <span className="mb-cta__label">{label}</span>
      <span aria-hidden="true" className="mb-cta__arrow">
        <svg viewBox="0 0 24 12" width="24" height="12" fill="none">
          <path
            d="M0 6h20M14.5 1.5 20 6l-5.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </span>
    </a>
  );
}

/** Request form submit: a framed block whose bottom edge sweeps a fill. */
export function CtaFrame({
  label,
  pending,
}: {
  label: string;
  pending?: boolean;
}) {
  return (
    <button className="mk-cta-frame" type="submit" disabled={pending}>
      <span aria-hidden="true" className="mk-cta-frame__fill" />
      <span className="mk-cta-frame__text">
        <span>{label}</span>
        <span aria-hidden="true">{pending ? "Sending the request" : label}</span>
      </span>
    </button>
  );
}
