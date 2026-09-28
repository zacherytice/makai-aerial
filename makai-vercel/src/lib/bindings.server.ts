// Deployment-neutral server bindings.
//
// The original Higgsfield export included a Cloudflare Workers-only binding
// import. That is not needed for the public site to render on Vercel, and the
// flight-request handler already falls back to email when no DB is configured.
// Keeping this accessor portable lets the same site run on Vercel without
// requiring the Cloudflare Workers runtime.
import type {
  D1Database,
  DurableObjectNamespace,
  KVNamespace,
  R2Bucket,
} from "@cloudflare/workers-types";

type AppEnv = {
  DB?: D1Database;
  STORAGE?: R2Bucket;
  KV?: KVNamespace;
  CONTAINER?: DurableObjectNamespace;
  HF_ENV?: string;
  APP_SLUG?: string;
};

export function bindings(): AppEnv {
  return {};
}
