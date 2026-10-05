// Fallback services shown when the backend API has none / is unreachable.
// Shape matches ApiService so components can use either source directly.

export interface ServiceItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  icon: string;
  features: string[];
}

export const defaultServices: ServiceItem[] = [
  {
    _id: "1",
    title: "Custom Software Development",
    slug: "custom-software-development",
    category: "Software & Product",
    shortDescription: "Tailored software built around your exact business workflow.",
    icon: "Code2",
    features: ["Custom Portals", "Business Websites", "Feature Enhancements", "Maintenance"],
  },
  {
    _id: "2",
    title: "Mobile Application Development",
    slug: "mobile-application-development",
    category: "Software & Product",
    shortDescription: "Native and cross-platform apps that scale with your users.",
    icon: "Smartphone",
    features: ["iOS & Android", "React Native", "App Store Launch", "Post-launch Support"],
  },
  {
    _id: "3",
    title: "Cloud Infrastructure",
    slug: "cloud-infrastructure",
    category: "Infrastructure & Cloud",
    shortDescription: "Secure, scalable cloud environments engineered for growth.",
    icon: "Cloud",
    features: ["AWS / Azure / GCP", "Migration", "DevOps Automation", "24/7 Monitoring"],
  },
  {
    _id: "4",
    title: "Digital Marketing & Growth",
    slug: "digital-marketing-growth",
    category: "Marketing",
    shortDescription: "Data-driven marketing strategies that convert traffic into revenue.",
    icon: "TrendingUp",
    features: ["SEO", "Performance Ads", "Content Strategy", "Analytics"],
  },
  {
    _id: "5",
    title: "Quality Assurance & Testing",
    slug: "quality-assurance-testing",
    category: "Testing & QA",
    shortDescription: "Rigorous manual and automated testing before every release.",
    icon: "ShieldCheck",
    features: ["Manual Testing", "Automation", "Continuous Testing", "Security Audits"],
  },
  {
    _id: "6",
    title: "Managed IT Support",
    slug: "managed-it-support",
    category: "Strategy & Support",
    shortDescription: "Round-the-clock support keeping your systems always online.",
    icon: "Headset",
    features: ["Application Support", "Infra Support", "Customer Support", "SLAs"],
  },
];
