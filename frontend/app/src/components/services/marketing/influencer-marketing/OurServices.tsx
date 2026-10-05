"use client";

import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Handshake,
  Megaphone,
  Search,
  Target,
  Users,
  Video,
} from "lucide-react";

const services = [
  {
    title: "Influencer Strategy",
    description:
      "Plan influencer campaigns around your brand goals, target audience, budget, and campaign requirements.",
    icon: Target,
  },
  {
    title: "Creator Discovery & Selection",
    description:
      "Find and shortlist relevant creators based on audience, content, engagement, location, and brand fit.",
    icon: Search,
  },
  {
    title: "Campaign Planning",
    description:
      "Define campaign objectives, content requirements, timelines, deliverables, and creator expectations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Creator Outreach & Coordination",
    description:
      "Manage creator communication, campaign discussions, deliverables, timelines, and collaboration details.",
    icon: Handshake,
  },
  {
    title: "Content Briefing & Management",
    description:
      "Provide clear content briefs and coordinate reviews, feedback, approvals, and required revisions.",
    icon: FileText,
  },
  {
    title: "Influencer Campaign Execution",
    description:
      "Manage campaigns from creator onboarding and content publishing to coordination and campaign completion.",
    icon: Megaphone,
  },
  {
    title: "Social Media Amplification",
    description:
      "Support influencer content with additional social media promotion to extend campaign reach and visibility.",
    icon: Video,
  },
  {
    title: "Campaign Tracking & Reporting",
    description:
      "Track campaign performance including reach, engagement, content results, and conversions where measurable.",
    icon: BarChart3,
  },
  {
    title: "Long-Term Creator Partnerships",
    description:
      "Build ongoing relationships with suitable creators for repeated campaigns and consistent brand communication.",
    icon: Users,
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Influencer Marketing Services
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            From finding the right creators to managing campaigns and
            reporting results, we handle the key parts of your influencer
            marketing campaign.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-brand)]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-medium text-[var(--text-muted)]">
                    Fusse Market
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--brand-blue)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}