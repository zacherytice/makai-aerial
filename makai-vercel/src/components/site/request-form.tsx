import { useState, type FormEvent } from "react";

import { CtaFrame } from "@/components/site/cta";
import { submitFlightRequest } from "@/lib/api/flight-requests.functions";

const PROJECT_TYPES = [
  "Construction progress",
  "Golf course photography and video",
  "New home and realtor video",
  "Commercial construction",
  "Commercial real estate",
] as const;

type Status = "idle" | "sending" | "sent" | "error";

type FieldErrors = Partial<
  Record<"name" | "site" | "projectType" | "brief", string>
>;

export function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [alert, setAlert] = useState("");
  const [reference, setReference] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = {
      brief: String(new FormData(form).get("brief") ?? "").trim(),
      company: String(new FormData(form).get("company") ?? "").trim(),
      flightDate: String(new FormData(form).get("flightDate") ?? "").trim(),
      name: String(new FormData(form).get("name") ?? "").trim(),
      projectType: String(new FormData(form).get("projectType") ?? "").trim(),
      site: String(new FormData(form).get("site") ?? "").trim(),
    };

    const next: FieldErrors = {};
    if (payload.name.length < 2) {
      next.name = "Enter the name we should ask for";
    }
    if (payload.site.length < 2) {
      next.site = "Enter the address or the community";
    }
    if (!payload.projectType) {
      next.projectType = "Choose what you need shot";
    }
    if (payload.brief.length < 12) {
      next.brief = "Describe the site and what you need captured";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      setAlert("Check the fields marked below.");
      return;
    }

    setStatus("sending");
    setAlert("");

    try {
      const result = await submitFlightRequest({ data: payload });
      if (result.ok) {
        setReference(result.reference);
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setAlert(result.message);
      }
    } catch {
      setStatus("error");
      setAlert(
        "That did not send. Email zachery@makaiaerial.com and we will pick it up.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="mk-sent">
        <p className="mk-field__label">Request logged</p>
        <p className="mk-sent__ref">REF {reference}</p>
        <p className="mk-form__note">
          Zachery reads every request. You will have a flight plan and a price
          within one working day.
        </p>
        <button
          className="mk-cta-frame"
          onClick={() => {
            setStatus("idle");
            setReference("");
          }}
          type="button"
        >
          <span aria-hidden="true" className="mk-cta-frame__fill" />
          <span className="mk-cta-frame__text">
            <span>Send another</span>
            <span aria-hidden="true">Send another</span>
          </span>
        </button>
      </div>
    );
  }

  const pending = status === "sending";

  return (
    <form className="mk-form" noValidate onSubmit={onSubmit}>
      <div className="mk-form__grid">
        <div className="mk-field">
          <label className="mk-field__label" htmlFor="fr-name">
            Name
          </label>
          <input
            aria-invalid={Boolean(errors.name)}
            className="mk-field__input"
            id="fr-name"
            name="name"
            placeholder="Who we should ask for"
            type="text"
          />
          {errors.name ? <p className="mk-field__error">{errors.name}</p> : null}
        </div>

        <div className="mk-field">
          <label className="mk-field__label" htmlFor="fr-company">
            Company
          </label>
          <input
            className="mk-field__input"
            id="fr-company"
            name="company"
            placeholder="Optional"
            type="text"
          />
        </div>

        <div className="mk-field">
          <label className="mk-field__label" htmlFor="fr-site">
            Site address
          </label>
          <input
            aria-invalid={Boolean(errors.site)}
            className="mk-field__input"
            id="fr-site"
            name="site"
            placeholder="Street, community or coordinates"
            type="text"
          />
          {errors.site ? <p className="mk-field__error">{errors.site}</p> : null}
        </div>

        <div className="mk-field">
          <label className="mk-field__label" htmlFor="fr-project">
            What you need shot
          </label>
          <select
            aria-invalid={Boolean(errors.projectType)}
            className="mk-field__select"
            defaultValue=""
            id="fr-project"
            name="projectType"
          >
            <option disabled value="">
              Choose a service
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p className="mk-field__error">{errors.projectType}</p>
          ) : null}
        </div>

        <div className="mk-field">
          <label className="mk-field__label" htmlFor="fr-date">
            Preferred first flight
          </label>
          <input
            className="mk-field__input"
            id="fr-date"
            name="flightDate"
            placeholder="Flexible is fine"
            type="text"
          />
        </div>

        <div className="mk-field mk-field--wide">
          <label className="mk-field__label" htmlFor="fr-brief">
            The site and what you need captured
          </label>
          <textarea
            aria-invalid={Boolean(errors.brief)}
            className="mk-field__area"
            id="fr-brief"
            name="brief"
            placeholder="Address, site extent, current stage, access, and the deliverable you need."
          />
          {errors.brief ? <p className="mk-field__error">{errors.brief}</p> : null}
        </div>
      </div>

      {alert ? (
        <p className="mk-form__alert" role="alert">
          {alert}
        </p>
      ) : null}

      <div className="mk-form__foot">
        <CtaFrame label="REQUEST A FLIGHT" pending={pending} />
        <p className="mk-form__note">
          No obligation. We confirm airspace and site access before anything is
          quoted.
        </p>
      </div>
    </form>
  );
}
