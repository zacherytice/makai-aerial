import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const flightRequestSchema = z.object({
  brief: z.string().trim().min(12).max(4000),
  company: z.string().trim().max(120).default(""),
  flightDate: z.string().trim().max(40).default(""),
  name: z.string().trim().min(2).max(120),
  projectType: z.string().trim().min(2).max(80),
  site: z.string().trim().min(2).max(180),
});

export type FlightRequestResult =
  | { ok: true; reference: string }
  | { ok: false; message: string };

function getConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    to: process.env.FLIGHT_REQUEST_TO ?? "zachery@makaiaerial.com",
    from:
      process.env.FLIGHT_REQUEST_FROM ??
      "Makai Aerial <onboarding@resend.dev>",
  };
}

export const submitFlightRequest = createServerFn({ method: "POST" })
  .validator(flightRequestSchema)
  .handler(async ({ data }): Promise<FlightRequestResult> => {
    const config = getConfig();

    if (!config.apiKey) {
      console.error(
        "Missing RESEND_API_KEY; flight request email is not configured.",
      );
      return {
        ok: false,
        message:
          "The request form is temporarily offline. Email zachery@makaiaerial.com and we will pick it up.",
      };
    }

    const reference = crypto.randomUUID().slice(0, 8).toUpperCase();
    const submittedAt = new Date().toISOString();

    const emailText = [
      `New Makai Aerial flight request — REF ${reference}`,
      "",
      `Name: ${data.name}`,
      `Company: ${data.company || "Not provided"}`,
      `Site address: ${data.site}`,
      `Service: ${data.projectType}`,
      `Preferred first flight: ${data.flightDate || "Flexible"}`,
      "",
      "What they need captured:",
      data.brief,
      "",
      `Submitted: ${submittedAt}`,
      `Reference: ${reference}`,
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        subject: `New flight request — ${data.name} — ${reference}`,
        text: emailText,
        reply_to: config.to,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend flight request failed", response.status, details);
      return {
        ok: false,
        message:
          "That did not send. Email zachery@makaiaerial.com and we will pick it up.",
      };
    }

    return { ok: true, reference };
  });
