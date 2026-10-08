"use client";

import {
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Gauge,
  LineChart,
  SearchCheck,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

const process = [
  {
    icon: SearchCheck,
    step: "01",
    title: "Business & Investment Assessment",
    description:
      "We understand your business objectives, existing technology investments, digital initiatives, marketing activities, and the outcomes you expect from them.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Performance & Data Review",
    description:
      "We review relevant performance data, KPIs, costs, usage, conversions, efficiency metrics, and other indicators that help establish the current picture.",
  },
  {
    icon: Target,
    step: "03",
    title: "ROI & Value Analysis",
    description:
      "We connect investment costs and performance outcomes to understand where your digital initiatives are generating value and where returns may be falling short.",
  },
  {
    icon: SearchCheck,
    step: "04",
    title: "Identify Performance Gaps",
    description:
      "We identify underperforming areas, inefficient processes, unused capabilities, unnecessary costs, and other factors that may be limiting your returns.",
  },
  {
    icon: Gauge,
    step: "05",
    title: "Optimization Strategy",
    description:
      "Based on the findings, we define practical optimization opportunities and prioritize the improvements that can have the greatest business impact.",
  },
  {
    icon: Workflow,
    step: "06",
    title: "Implement Improvements",
    description:
      "We support the implementation of agreed improvements across technology, digital platforms, marketing activities, processes, or measurement frameworks.",
  },
  {
    icon: LineChart,
    step: "07",
    title: "Measure the Results",
    description:
      "We track the selected KPIs and performance indicators to understand whether the implemented changes are producing the expected improvements.",
  },
  {
    icon: CircleDollarSign,
    step: "08",
    title: "Value & Cost Review",
    description:
      "We review the impact of optimization on costs, efficiency, revenue opportunities, customer outcomes, and overall business value.",
  },
  {
    icon: TrendingUp,
    step: "09",
    title: "Continuous Improvement",
    description:
      "ROI improvement continues over time. We use performance insights to refine the approach, identify new opportunities, and support better returns as your business evolves.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Development Process
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Improve ROI Process
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured approach that helps you understand current
            performance, identify opportunities, improve digital investments,
            and measure the business value created through optimization.
          </p>
        </div>

        {/* Process Scroll */}
        <div className="mt-14">
          <div className="flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory [scrollbar-width:thin]">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="premium-card group relative w-[320px] shrink-0 snap-start p-6 sm:w-[350px] md:w-[380px] md:p-7"
                >
                  {/* Step */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.16em] text-[var(--brand-pink)]">
                      STEP {item.step}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-pink-soft)] group-hover:text-[var(--brand-pink)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-semibold leading-tight text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                    ROI improvement
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-6 h-0.5 w-10 bg-[var(--brand-pink)] transition-all duration-300 group-hover:w-20 md:left-7" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-soft)] p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
                  Measure performance. Improve value. Increase returns.
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
                  We focus on practical improvements that connect digital
                  performance with measurable business outcomes, helping
                  your investments deliver more value over time.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand-pink)]" />
              Continuous optimization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}