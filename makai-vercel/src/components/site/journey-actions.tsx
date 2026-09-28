import { CtaChevron, CtaFlood, CtaLeader } from "@/components/site/cta";

/**
 * Rendered inside the engine's chapter copy. Distinct garment per chapter so no
 * two CTAs on the page share a shape.
 */
export function JourneyActions({
  variant,
}: {
  variant: "approach" | "departure";
}) {
  if (variant === "departure") {
    return <CtaChevron href="#contact" label="REQUEST A FLIGHT" />;
  }

  return (
    <>
      <CtaFlood href="#contact" label="REQUEST A FLIGHT" />
      <CtaLeader href="#services" label="VIEW SERVICES" />
    </>
  );
}
