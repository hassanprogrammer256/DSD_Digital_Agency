import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/lib/validation/contactSchema";
import type { LandingLeadValues } from "@/lib/validation/landingLeadSchema";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// No request ever goes to a DSD-owned server — EmailJS relays the message directly from the
// visitor's browser to the configured template/recipient (info@dsdgrp.com). Throws if the
// env vars aren't configured or the send itself fails — the caller (ContactPage) is
// responsible for catching and showing a human-readable toast, never a raw error.
export async function sendContactMessage(values: ContactFormValues): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured — VITE_EMAILJS_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY are missing from the environment.",
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: values.name,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
    },
    { publicKey: PUBLIC_KEY },
  );
}

// Landing-page leads go through the same EmailJS relay/template as the contact form — this
// project has no real CRM (Salesforce/HubSpot/etc.) account configured yet, so "send to CRM"
// is not implemented as a distinct integration here. See progress-tracker.md -> Known Gaps:
// wiring a real CRM (directly, or via Zapier/a native integration) needs real account
// credentials this project doesn't have. Until then, this is the same honest EmailJS-relay
// mechanism the Contact form already uses, tagged with which offer generated the lead.
export async function sendLandingPageLead(offerSlug: string, values: LandingLeadValues): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured — VITE_EMAILJS_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY are missing from the environment.",
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: values.name,
      from_email: values.email,
      subject: `Landing page lead — ${offerSlug}`,
      message: `New lead from the "${offerSlug}" landing page.\n\nName: ${values.name}\nEmail: ${values.email}`,
    },
    { publicKey: PUBLIC_KEY },
  );
}
