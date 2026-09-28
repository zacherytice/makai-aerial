import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

/**
 * The journey runs on every device, so a phone gets the same scrubbed
 * transition a desktop gets. The engine already owns the phone path: below
 * 860px, or on a coarse pointer, it loads each leg's lighter mobile encode
 * instead of the desktop one. Nothing here touches a browser global, so it
 * renders identically on the server.
 */
export function Journey() {
  return <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />;
}
