import {
  Globe,
  LayoutDashboard,
  Cpu,
  Search,
  Briefcase,
  Server,
  Megaphone,
  Landmark,
  MessagesSquare,
  Newspaper,
  FileCheck,
  Building2,
  UserCheck,
  Receipt,
  Percent,
  BookOpen,
  ShieldAlert,
  Lock,
  ShoppingBag,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

// Maps Service.icon (a plain string in src/data/services.ts) to its lucide-react component.
// Keeping icon names as data-layer strings (not component references) keeps src/data/*.ts
// free of framework imports — see architecture.md's data-layer boundary.
export const serviceIcons: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  Cpu,
  Search,
  Briefcase,
  Server,
  Megaphone,
  Landmark,
  MessagesSquare,
  Newspaper,
};

// Maps ComplianceArea.icon (src/data/compliance.ts) to its lucide-react component — same
// data-layer boundary rationale as serviceIcons above.
export const complianceIcons: Record<string, LucideIcon> = {
  FileCheck,
  Building2,
  UserCheck,
  Receipt,
  Percent,
  BookOpen,
  Briefcase,
  ShieldAlert,
  Lock,
  ShoppingBag,
  LayoutGrid,
};
