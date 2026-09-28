import { useEffect } from "react";

/**
 * Scroll-linked parallax for still imagery. Transform only, never opacity, which
 * keeps every section visible in a full-page render: the image is cropped taller
 * than its frame and slides inside it. Reads `data-parallax="<percent>"` on the
 * image itself and uses its parent as the trigger.
 *
 * Reduced motion is honoured by doing nothing at all, which leaves the images
 * statically centred.
 */
export function ScrollParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let disposed = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      try {
        const [gsapModule, triggerModule] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (disposed) {
          return;
        }
        const gsap = gsapModule.gsap ?? gsapModule.default;
        const ScrollTrigger = triggerModule.ScrollTrigger ?? triggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        const nodes = Array.from(
          document.querySelectorAll<HTMLElement>("[data-parallax]"),
        );

        const tweens = nodes.map((node) => {
          const depth = Number(node.dataset.parallax ?? "12");
          return gsap.fromTo(
            node,
            { yPercent: -depth / 2 },
            {
              ease: "none",
              scrollTrigger: {
                end: "bottom top",
                scrub: true,
                start: "top bottom",
                trigger: node.parentElement ?? node,
              },
              yPercent: depth / 2,
            },
          );
        });

        cleanup = () => {
          tweens.forEach((tween) => tween.scrollTrigger?.kill());
          tweens.forEach((tween) => tween.kill());
        };
      } catch {
        // A still image is a complete experience on its own.
      }
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return null;
}
