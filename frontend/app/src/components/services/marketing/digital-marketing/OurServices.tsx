"use client";

import {
  ArrowUpRight,
  BarChart3,
  FileText,
  Mail,
  Megaphone,
  Search,
  Share2,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Search Engine Optimization",
    description:
      "Improve search visibility, organic traffic, and rankings with a data-driven SEO strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Paid Media & PPC",
    description:
      "Reach the right audience with targeted paid campaigns designed around measurable results.",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "Content Marketing",
    description:
      "Create valuable, relevant content that attracts your audience and supports your growth goals.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Build a stronger social presence with engaging content, campaigns, and audience-focused strategies.",
    icon: Share2,
  },
  {
    number: "05",
    title: "Lead Generation",
    description:
      "Turn digital reach into qualified leads through focused campaigns and conversion strategies.",
    icon: Target,
  },
  {
    number: "06",
    title: "Email Marketing",
    description:
      "Build meaningful customer relationships with personalized and performance-focused email campaigns.",
    icon: Mail,
  },
  {
    number: "07",
    title: "Conversion Rate Optimization",
    description:
      "Improve your website and campaigns to turn more visitors into leads and customers.",
    icon: TrendingUp,
  },
  {
    number: "08",
    title: "Analytics & Reporting",
    description:
      "Track campaign performance with clear insights that help you make smarter marketing decisions.",
    icon: BarChart3,
  },
  {
    number: "09",
    title: "Digital Marketing Strategy",
    description:
      "Build an integrated marketing strategy across channels based on your goals, audience, and market.",
    icon: Users,
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Digital Marketing Services
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-brand)]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-wider text-[var(--text-muted)]">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Fusse Market
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--brand-blue)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--gradient-brand)] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}