import {
  Code2,
  Smartphone,
  Cloud,
  TrendingUp,
  ShieldCheck,
  Headset,
  Database,
  Globe,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Backend stores the icon as a plain string (e.g. "Code2") so admins
// can pick a name without shipping React components through the API.
// Add new entries here whenever a new icon name is used in the admin.
const icons: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Cloud,
  TrendingUp,
  ShieldCheck,
  Headset,
  Database,
  Globe,
  Layers,
  Sparkles,
};

export default function IconMap({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = icons[name] || Sparkles;
  return <Icon size={size} className={className} />;
}
