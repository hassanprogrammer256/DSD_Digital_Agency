import {
  Globe,
  LayoutDashboard,
  Cpu,
  Search,
  Server,
  Megaphone,
  MessagesSquare,
  Newspaper,
  Share2,
  PenTool,
  Palette,
  Brush,
  Clapperboard,
  Apple,
  Smartphone,
  Layers,
  Store,
  ShoppingCart,
  Bot,
  Sparkles,
  GraduationCap,
  ShoppingBag,
  Building2,
  Stethoscope,
  Plane,
  Truck,
  HeartHandshake,
  Dumbbell,
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
  Server,
  Megaphone,
  MessagesSquare,
  Newspaper,
  Share2,
  PenTool,
  Palette,
  Brush,
  Clapperboard,
  Apple,
  Smartphone,
  Layers,
  Store,
  ShoppingCart,
  Bot,
  Sparkles,
};

// Maps Industry.icon (src/data/industries.ts) to its lucide-react component — same data-layer
// boundary rationale as serviceIcons above. Clapperboard/Cpu are also used in serviceIcons;
// icons are shared freely across separate maps, they're just data-layer strings either way.
export const industryIcons: Record<string, LucideIcon> = {
  GraduationCap,
  ShoppingBag,
  Building2,
  Stethoscope,
  Plane,
  Truck,
  HeartHandshake,
  Dumbbell,
  Clapperboard,
  Cpu,
};
