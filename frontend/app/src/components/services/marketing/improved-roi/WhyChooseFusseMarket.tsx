"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Gauge,
  LineChart,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: BarChart3,
    title: "Clear Performance Analysis",
    description:
      "We look at how your technology, marketing, and digital initiatives are performing instead of relying only on assumptions or surface-level metrics.",
  },
  {
    icon: Target,
    title: "Business-Focused ROI",
    description:
      "Our focus is on connecting digital performance with business objectives such as revenue, efficiency, customer acquisition, and operational improvement.",
  },
  {
    icon: Gauge,
    title: "Practical Optimization",
    description:
      "We identify areas where your existing investments can perform better and recommend practical improvements before suggesting unnecessary new investments.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description:
      "We use relevant performance data and measurable indicators to understand what is working, what is not, and where improvements can make the biggest difference.",
  },
  {
    icon: CircleDollarSign,
    title: "Better Use of Existing Investments",
    description:
      "We help businesses get more value from the platforms, systems, campaigns, and digital solutions they have already invested in.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "ROI improvement is an ongoing process. We help establish a practical approach to monitor performance, test improvements, and refine results over time.",
  },
];

const checklist = [
  "Technology and digital investment review",
  "Performance and ROI measurement",
  "Identifying improvement opportunities",
  "Prioritised optimization recommendations",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Turn digital investment into{" "}
            <span className="text-brand-gradient">
              measurable business value.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Technology and digital investments should contribute to real
            business results. We help you understand performance, identify
            gaps, and improve the value you get from your existing
            investments.
          </p>
        </div>

        {/* Main Feature */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Feature Card */}
          <div className="premium-card relative overflow-hidden p-7 md:p-9 lg:p-10">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[var(--brand-pink-soft)] blur-3xl" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
                <TrendingUp className="h-6 w-6" />
              </div>

              <h3 className="mt-7 max-w-xl text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
                We focus on improving the value you already have.
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                Businesses often invest in technology, software, marketing
                platforms, and digital initiatives without having a clear
                view of the value those investments are actually generating.
                We assess the current situation, identify performance gaps,
                and create practical recommendations to improve results.
              </p>

              {/* Checklist */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-pink)]" />

                    <span className="text-sm font-medium leading-6 text-[var(--text-primary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Card */}
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--gradient-dark)] p-7 text-white shadow-[var(--shadow-lg)] md:p-9">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--brand-pink)] opacity-20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink-light)]">
                Our Focus
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
                Better decisions. Better performance. Better returns.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                We bring performance data and business priorities together
                to help you make more informed decisions about where to
                improve, optimize, or invest next.
              </p>

              {/* Metric Blocks */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <BarChart3 className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Measure
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Understand actual performance
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <Gauge className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Optimize
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Improve inefficient areas
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <Target className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Align
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Connect performance with goals
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <TrendingUp className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Improve
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Build better long-term returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">
                What We Bring
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                A practical approach to improving ROI.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)]">
              We focus on measurable improvements and practical actions
              rather than recommending change for the sake of change.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="premium-card group p-6 md:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-soft)] group-hover:text-[var(--brand-pink)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-soft)] p-7 md:mt-20 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                Are your digital investments delivering enough value?
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] md:text-base">
                We can help you assess performance, identify improvement
                opportunities, and create a practical plan to improve your
                returns.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-brand shrink-0"
            >
              Discuss Your ROI
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}