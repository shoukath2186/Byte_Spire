import {
  Layout,
  Code,
  ShoppingBag,
  PenTool,
  TrendingUp,
  Server,
  Cloud,
  BarChart,
  Code2,
  Globe,
  Zap,
  ShieldCheck,
  Smartphone,
  Cpu,
  Monitor,
  Sparkles,
  CreditCard,
  Truck,
} from "lucide-react";

const ICON_MAP = {
  layout: Layout,
  code: Code,
  "shopping-bag": ShoppingBag,
  "pen-tool": PenTool,
  "trending-up": TrendingUp,
  server: Server,
  cloud: Cloud,
  "bar-chart": BarChart,
  globe: Globe,
  zap: Zap,
  shield: ShieldCheck,
  smartphone: Smartphone,
  cpu: Cpu,
  monitor: Monitor,
  sparkles: Sparkles,
  "credit-card": CreditCard,
  truck: Truck,
};

export function resolveIcon(icon) {
  if (!icon) return Code2;
  if (typeof icon === "string") {
    return ICON_MAP[icon.toLowerCase()] || Code2;
  }
  return icon;
}

