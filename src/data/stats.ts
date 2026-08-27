import type { Stat } from "@/types";

// PLACEHOLDER DATA — real agency stats have not been supplied yet (see
// progress-tracker.md -> Known Gaps). Replace with real numbers before launch.
export const stats: Stat[] = [
  { id: "projects-delivered", value: 120, suffix: "+", label: "Projects Delivered" },
  { id: "clients-served", value: 85, suffix: "+", label: "Clients Served" },
  { id: "years-active", value: 8, label: "Years Active" },
  { id: "team-specialists", value: 20, suffix: "+", label: "Team Specialists" },
];
