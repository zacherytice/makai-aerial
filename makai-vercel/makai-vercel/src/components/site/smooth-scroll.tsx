import { useEffect } from "react";

/**
 * Smooth scroll, bridged to the GSAP ticker so the scrub reads as a damped
 * camera move rather than a raw wheel jump. Renders nothing and touches no
 * browser global at module top level, so it is safe under SSR.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      return;
    }

    // Native momentum scrolling beats a smoothed one on touch, and skipping
    // Lenis there frees a rAF loop while the scrub controller is seeking video.
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    let disposed = false;
    let destroy: (() => void) | undefined;

    void (async () => {
      try {
        const [lenisModule, gsapModule] = await Promise.all([
          import("lenis"),
          import("gsap"),
        ]);
        if (disposed) {
          return;
        }
        const Lenis = lenisModule.default;
        const gsap = gsapModule.gsap ?? gsapModule.default;

        const lenis = new Lenis({
          duration: 1.15,
          smoothWheel: true,
          wheelMultiplier: 0.95,
          touchMultiplier: 1.6,
        });

        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        destroy = () => {
          gsap.ticker.remove(tick);
          lenis.destroy();
        };
      } catch {
        // Native scrolling is a complete experience on its own.
      }
    })();

    return () => {
      disposed = true;
      destroy?.();
    };
  }, []);

  return null;
}
