"use client";

import {
  Search,
  Target,
  Users,
  Layers3,
  Rocket,
  BarChart3,
  RefreshCw,
  FileText,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Strategy & Goals",
    description:
      "We understand your business goals and define a clear digital marketing strategy around them.",
    icon: Target,
  },
  {
    number: "02",
    title: "Market & Audience Research",
    description:
      "We study your market, competitors, customers, and audience to identify the right opportunities.",
    icon: Search,
  },
  {
    number: "03",
    title: "Audience & Channel Planning",
    description:
      "We select the right channels and create a focused plan to reach the audience that matters.",
    icon: Users,
  },
  {
    number: "04",
    title: "Campaign & Content Setup",
    description:
      "We prepare campaigns, content, landing pages, tracking, and everything needed for launch.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Campaign Launch",
    description:
      "Your campaigns go live across the selected channels with tracking and measurement in place.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Performance Monitoring",
    description:
      "We continuously monitor traffic, engagement, leads, conversions, and campaign performance.",
    icon: BarChart3,
  },
  {
    number: "07",
    title: "Optimization",
    description:
      "We analyze performance and continuously refine campaigns to improve results and efficiency.",
    icon: RefreshCw,
  },
  {
    number: "08",
    title: "Reporting & Insights",
    description:
      "Clear reports highlight performance, opportunities, and actionable insights for your business.",
    icon: FileText,
  },
  {
    number: "09",
    title: "Scale & Grow",
    description:
      "Once the right strategy is proven, we scale successful campaigns to support sustainable growth.",
    icon: TrendingUp,
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="section-eyebrow">Development Process</span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Our Digital Marketing{" "}
            <span className="text-brand-gradient">Process</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            A structured approach that takes your marketing from strategy to
            measurable growth.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-12">
          {/* Progress Line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-[var(--border-dark)] lg:block" />

          <div className="flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory [scrollbar-width:thin]">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative w-[310px] shrink-0 snap-start sm:w-[340px] md:w-[370px] lg:w-[380px]"
                >
                  {/* Step Indicator */}
                  <div className="relative z-10 mb-6 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-dark)] bg-[var(--background)] text-sm font-bold text-[var(--brand-pink)] shadow-[var(--shadow-sm)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                      {step.number}
                    </div>

                    {index < processSteps.length - 1 && (
                      <ArrowRight
                        size={18}
                        className="text-[var(--text-muted)] lg:hidden"
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div className="premium-card h-full min-h-[270px] p-6 md:p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:-translate-y-1">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <CheckCircle2
                        size={18}
                        className="text-[var(--brand-blue-light)] opacity-50 transition-all duration-300 group-hover:text-[var(--brand-pink)] group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {step.description}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-[var(--brand-blue-light)] transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--brand-pink)]" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background)] p-6 shadow-[var(--shadow-sm)] md:flex-row md:items-center md:justify-between md:p-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
              Performance Driven
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
              Strategy, execution, measurement, and continuous growth.
            </h3>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
            Data-backed marketing
          </div>
        </div>
      </div>
    </section>
  );
}