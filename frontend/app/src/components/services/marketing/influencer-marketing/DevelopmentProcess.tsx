"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Megaphone,
  Search,
  Target,
  UserCheck,
  Users,
  Video,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand Brand & Goals",
    description:
      "We understand your brand, campaign objective, target audience, budget, and what you want the campaign to achieve.",
    icon: Target,
  },
  {
    number: "02",
    title: "Audience & Market Research",
    description:
      "We study your target audience, market, competitors, and relevant creator categories to define the right direction.",
    icon: Search,
  },
  {
    number: "03",
    title: "Creator Identification",
    description:
      "We identify creators who are relevant to your industry, audience, location, content style, and campaign requirements.",
    icon: Users,
  },
  {
    number: "04",
    title: "Creator Shortlisting",
    description:
      "Potential creators are reviewed based on audience relevance, content quality, engagement, reach, and brand suitability.",
    icon: UserCheck,
  },
  {
    number: "05",
    title: "Campaign Planning",
    description:
      "We finalise campaign objectives, content formats, deliverables, timelines, communication requirements, and approvals.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Outreach & Coordination",
    description:
      "We coordinate with selected creators, discuss campaign requirements, manage communication, and confirm deliverables.",
    icon: CheckCircle2,
  },
  {
    number: "07",
    title: "Content Production & Approval",
    description:
      "Creators develop campaign content while we coordinate briefs, reviews, feedback, revisions, and final approvals.",
    icon: Video,
  },
  {
    number: "08",
    title: "Campaign Launch & Monitoring",
    description:
      "Once approved, the campaign goes live and we monitor content publishing, reach, engagement, and overall campaign activity.",
    icon: Megaphone,
  },
  {
    number: "09",
    title: "Reporting & Review",
    description:
      "We review campaign performance and provide clear insights on reach, engagement, content performance, and measurable results.",
    icon: BarChart3,
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Influencer Marketing Process
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            A clear process that takes your influencer campaign from planning
            and creator selection to execution and performance reporting.
          </p>
        </div>

        {/* Process Scroll */}
        <div className="relative mt-12 md:mt-16">
          <div className="flex gap-5 overflow-x-auto px-1 pb-7 pt-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative w-[310px] shrink-0 snap-start overflow-hidden p-6 sm:w-[350px] md:w-[380px] md:p-7"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:-translate-y-1">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold tracking-wider text-[var(--text-muted)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {step.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Fusse Market
                    </span>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--brand-blue)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                      Step {step.number}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Scroll Hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-medium text-[var(--text-muted)]">
            <span className="h-px w-8 bg-[var(--border)]" />
            <span>Scroll to explore the process</span>
            <span className="h-px w-8 bg-[var(--border)]" />
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 md:mt-14 md:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                From creator selection to campaign reporting.
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                We keep the campaign process organised, transparent, and
                aligned with your brand requirements.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
              Influencer Marketing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}