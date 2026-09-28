import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useState } from "react";

import { DesktopSite } from "@/components/site/desktop-site";
import { MobileSite } from "@/components/site/mobile-site";

export const Route = createFileRoute("/")({
  // The home route inherits the site's committed page metadata from the root
  // route (title, favicon, og), so a shared link shows the owner's values.
  component: Index,
});

// On the server there is no layout phase, so the hook degrades to a plain
// effect there and never touches a browser global during render.
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Two deliberately different sites, chosen once at startup.
 *
 * The desktop tree is what the server renders. On the client this decides in the
 * layout phase, which runs before the browser paints and before any passive
 * effect, so a phone swaps to the light site before the desktop journey's
 * controller can start fetching a clip. A touch laptop keeps the desktop site:
 * the test is width plus hover capability, not touch points.
 */
function Index() {
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");

  useIsoLayoutEffect(() => {
    const narrow = window.matchMedia("(max-width: 899px)");
    const noHover = window.matchMedia("(any-hover: none)");

    const apply = () => {
      setMode(narrow.matches || noHover.matches ? "mobile" : "desktop");
    };

    apply();
    narrow.addEventListener("change", apply);
    noHover.addEventListener("change", apply);
    return () => {
      narrow.removeEventListener("change", apply);
      noHover.removeEventListener("change", apply);
    };
  }, []);

  return mode === "mobile" ? <MobileSite /> : <DesktopSite />;
}
