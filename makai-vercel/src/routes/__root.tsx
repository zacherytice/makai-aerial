import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
// Page metadata: browser title, favicon and the social og / twitter tags.
import appMetaJson from "../app-meta.json";
import { SITE_THEME_COLOR } from "../lib/site-tokens";

const DEFAULT_TITLE = "Makai Aerial";
const DEFAULT_DESCRIPTION =
  "Premium aerial photography, video and construction documentation for Dallas-Fort Worth.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
  marketplace_cover_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

// Every image path in app-meta.json is root-relative, so it resolves against
// whoever serves the page. No absolute host is baked in anywhere.
function assetUrl(value: string | null | undefined): string | null {
  return value ?? null;
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = assetUrl(meta.og_image_url);
  const favicon = assetUrl(meta.favicon_url);
  const ogVideo = assetUrl(meta.og_video_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: SITE_THEME_COLOR },
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { name: "twitter:image", content: ogImage },
          ]
        : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        crossOrigin: "anonymous" as const,
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap",
        rel: "stylesheet",
      },
      { href: "/assets/head/favicon-32.png", rel: "icon", sizes: "32x32", type: "image/png" },
      { href: "/assets/head/favicon-16.png", rel: "icon", sizes: "16x16", type: "image/png" },
      { href: "/assets/head/favicon-48.png", rel: "icon", sizes: "48x48", type: "image/png" },
      { href: "/assets/head/favicon.ico", rel: "icon" },
      { href: "/assets/head/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
      { href: "/site.webmanifest", rel: "manifest" },
      { rel: "stylesheet", href: appCss },
      ...(favicon ? [{ rel: "icon", href: favicon }] : []),
    ],
  };
}

function NotFoundComponent() {
  return (
    <div className="site-fallback">
      <h1 className="site-fallback__title">Page not found</h1>
      <p className="site-fallback__body">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link className="site-fallback__link" to="/">
        Go home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="site-fallback">
      <h1 className="site-fallback__title">This page did not load</h1>
      <p className="site-fallback__body">
        Something went wrong. Try refreshing, or head back home.
      </p>
      <div className="site-fallback__actions">
        <button
          className="site-fallback__link"
          onClick={() => {
            void router.invalidate();
            reset();
          }}
          type="button"
        >
          Try again
        </button>
        <a className="site-fallback__link" href="/">
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. */}
      <Outlet />
    </QueryClientProvider>
  );
}
