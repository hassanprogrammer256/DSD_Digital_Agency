import type { Testimonial } from "@/types";

import avatar1 from "@/assets/images/testimonials/avatar-5.jpg";
import avatar2 from "@/assets/images/testimonials/avatar-68.jpg";
import avatar3 from "@/assets/images/testimonials/avatar-49.jpg";

export const testimonials: Testimonial[] = [
  {
    id: "rania-khalil",
    quote:
      "DSD rebuilt our site from the ground up and our mobile conversion rate nearly doubled within two months. They actually understood what our business needed, not just what we asked for.",
    name: "Rania Khalil",
    role: "Founder, Meridian Retail",
    avatar: avatar1,
  },
  {
    id: "samuel-adeyemi",
    quote:
      "Our organic traffic had been flat for a year before we brought DSD in. Within a quarter they'd fixed the technical issues nobody else had even flagged, and the rankings followed.",
    name: "Samuel Adeyemi",
    role: "Marketing Director, Atlas Logistics",
    avatar: avatar2,
  },
  {
    id: "julia-marchetti",
    quote:
      "The team shipped our mobile app to both stores on schedule and it's held up perfectly under real usage. Communication throughout was clear and honest about tradeoffs.",
    name: "Julia Marchetti",
    role: "Product Lead, Pulse Fitness",
    avatar: avatar3,
  },
];
