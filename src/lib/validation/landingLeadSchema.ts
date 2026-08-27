import { z } from "zod";

// Deliberately just name + email — every extra field on a landing-page form measurably cuts
// conversion. Phone/company/etc. belong in the CRM after the first touch, not on this form.
export const landingLeadSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
});

export type LandingLeadValues = z.infer<typeof landingLeadSchema>;
