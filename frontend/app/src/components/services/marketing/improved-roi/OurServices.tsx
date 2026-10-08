"use client";

import {
  BarChart3,
  Calculator,
  ChartNoAxesCombined,
  CircleDollarSign,
  Gauge,
  LineChart,
  SearchCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "ROI & Performance Analysis",
    description:
      "Evaluate the performance of your technology, marketing, and digital investments to understand where value is being generated and where improvements are needed.",
  },
  {
    icon: Calculator,
    title: "Technology Investment Review",
    description:
      "Review existing technology investments, platforms, and systems to determine whether they are delivering the expected business and operational value.",
  },
  {
    icon: SearchCheck,
    title: "Performance Gap Analysis",
    description:
      "Identify performance gaps, inefficient processes, underused capabilities, and areas where your existing digital investments are not reaching their full potential.",
  },
  {
    icon: Gauge,
    title: "Digital Performance Optimization",
    description:
      "Improve the performance of digital platforms, systems, and initiatives through targeted optimization based on actual business and performance data.",
  },
  {
    icon: Target,
    title: "Marketing ROI Optimization",
    description:
      "Evaluate marketing channels and campaign performance to improve budget allocation, audience targeting, conversion, and overall marketing returns.",
  },
  {
    icon: LineChart,
    title: "Business Performance Analytics",
    description:
      "Use relevant business and digital performance metrics to identify trends, understand outcomes, and support better investment decisions.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost & Value Optimization",
    description:
      "Identify unnecessary costs, inefficient technology usage, and opportunities to improve the value generated from existing digital investments.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "KPI & Measurement Strategy",
    description:
      "Define practical KPIs and measurement frameworks that connect digital activity with meaningful business outcomes and performance goals.",
  },
  {
    icon: TrendingUp,
    title: "Continuous ROI Improvement",
    description:
      "Establish an ongoing approach to monitor results, identify new opportunities, and continuously improve the returns generated from digital investments.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Our Services
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Improve ROI Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            We help businesses understand where their digital investments
            are creating value, where performance can improve, and what
            practical actions can lead to better business returns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-xs font-semibold tracking-[0.12em] text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-pink-soft)] group-hover:text-[var(--brand-pink)]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="mt-6 max-w-[85%] text-lg font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                {/* Bottom line */}
                <div className="mt-6 h-px w-10 bg-[var(--border-dark)] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--brand-pink)]" />
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-pink)]">
                Focus on Value
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                Get more from the investments you have already made.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] md:text-base">
                Instead of replacing technology or increasing spending
                without clear direction, we help identify where existing
                investments can be improved and where additional investment
                can create meaningful business value.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <TrendingUp className="h-5 w-5 text-[var(--brand-pink)]" />
              Measure. Optimize. Improve.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}