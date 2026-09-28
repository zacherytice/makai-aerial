/**
 * Scene data for the desktop scroll-scrub journey.
 *
 * Journey shape: multi-leg, Architecture A (continuous forward flight). Five
 * worlds means five legs, each generated from the PREVIOUS leg's actual last
 * rendered frame, uploaded as its start image. Position continuity is therefore
 * exact at every seam; velocity continuity comes from prompting the same slow
 * exit drift on both sides of each seam.
 *
 * There is no mobileClip: the phone gets a completely different site, so this
 * engine never mounts there.
 *
 * Keep this array a module constant. Changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { JourneyActions } from "@/components/site/journey-actions";
import { createElement } from "react";

/** Brand tokens for the journey layer, from the design brief. */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#8FC3AA",
  background: "#101613",
  ink: "#F0F2EF",
  muted: "#9BA39D",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    align: "left",
    actions: createElement(JourneyActions, { variant: "approach" }),
    body: "Professional aerial photography, video and construction documentation throughout Dallas-Fort Worth.",
    clip: "/assets/world/leg-01.mp4",
    id: "leg-approach",
    kicker: "01 / NORTH TEXAS",
    label: "Approach",
    linger: 0.12,
    objectPosition: "50% 50%",
    poster: "/assets/world/leg-01-poster.jpg",
    scroll: 2.2,
    title: "SEE YOUR PROJECT FROM ABOVE.",
  },
  {
    align: "right",
    body: "Recurring aerial photography and video that follows a build through every stage, from the first slab to the finished home.",
    clip: "/assets/world/leg-02.mp4",
    id: "leg-progress",
    kicker: "02 / CONSTRUCTION PROGRESS",
    label: "Construction",
    objectPosition: "50% 50%",
    poster: "/assets/world/leg-02-poster.jpg",
    scroll: 2,
    tags: ["Recurring visits", "Same flight lines", "Progress archive"],
    title: "FOUNDATION TO COMPLETION.",
  },
  {
    align: "left",
    body: "Fairways, greens, bunkering, water and facilities, flown and framed the way a course deserves to be shown.",
    clip: "/assets/world/leg-03.mp4",
    id: "leg-golf",
    kicker: "03 / GOLF COURSE PHOTOGRAPHY",
    label: "Golf",
    objectPosition: "50% 50%",
    poster: "/assets/world/leg-03-poster.jpg",
    scroll: 1.8,
    title: "THE COURSE FROM ABOVE.",
  },
  {
    align: "right",
    body: "Cinematic aerial photography and video for new and luxury residential listings, from the front elevation to the whole lot.",
    clip: "/assets/world/leg-04.mp4",
    id: "leg-homes",
    kicker: "04 / NEW HOME VIDEO",
    label: "New homes",
    objectPosition: "50% 50%",
    poster: "/assets/world/leg-04-poster.jpg",
    scroll: 1.8,
    title: "A VIEW BUYERS CANNOT GET ON FOOT.",
  },
  {
    align: "left",
    actions: createElement(JourneyActions, { variant: "departure" }),
    body: "Aerial photography, video and progress monitoring for commercial construction and commercial real estate projects.",
    clip: "/assets/world/leg-05.mp4",
    id: "leg-commercial",
    kicker: "05 / COMMERCIAL CONSTRUCTION",
    label: "Commercial",
    linger: 0.18,
    objectPosition: "50% 50%",
    poster: "/assets/world/leg-05-poster.jpg",
    scroll: 2,
    title: "PROGRESS, DOCUMENTED FROM ABOVE.",
  },
];
