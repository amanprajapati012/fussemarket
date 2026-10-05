"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Reputation Assessment",
    description:
      "We review your current online presence, customer reviews, search results, brand mentions, and other relevant reputation signals.",
    icon: Search,
  },
  {
    number: "02",
    title: "Identify Key Concerns",
    description:
      "We identify recurring complaints, negative feedback, inconsistent information, and other areas that may require attention.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Set Reputation Goals",
    description:
      "We define clear priorities based on your business, customers, industry, existing reputation, and areas that need improvement.",
    icon: Target,
  },
  {
    number: "04",
    title: "Monitoring Setup",
    description:
      "We establish monitoring across relevant review platforms, search results, social channels, and other important online sources.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Response & Communication",
    description:
      "We develop appropriate approaches for handling reviews, customer feedback, and reputation-related conversations.",
    icon: MessageSquare,
  },
  {
    number: "06",
    title: "Reputation Improvement",
    description:
      "We work on improving the quality and consistency of your online presence while addressing relevant reputation concerns.",
    icon: TrendingUp,
  },
  {
    number: "07",
    title: "Ongoing Monitoring",
    description:
      "We continue tracking reviews, mentions, feedback, and changes in your online reputation to identify new issues.",
    icon: CheckCircle2,
  },
  {
    number: "08",
    title: "Performance Reporting",
    description:
      "We provide regular reports covering reputation activity, feedback trends, reviews, mentions, and important observations.",
    icon: BarChart3,
  },
  {
    number: "09",
    title: "Review & Optimisation",
    description:
      "Based on ongoing results and feedback, we refine the approach and focus on areas that need continued attention.",
    icon: FileText,
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
              Online Reputation Management Process
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            A structured approach to understand your current reputation,
            address concerns, manage feedback, and maintain a consistent
            online presence.
          </p>
        </div>

        {/* Process Cards */}
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
                Reputation management requires consistent attention.
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                We monitor, respond, review, and refine the approach as your
                business and online presence evolve.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
              Reputation Management
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}