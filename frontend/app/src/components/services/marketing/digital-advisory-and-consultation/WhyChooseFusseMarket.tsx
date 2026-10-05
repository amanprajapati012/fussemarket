"use client";

import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Compass,
  FileSearch,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Business-First Approach",
    description:
      "We start by understanding your business goals, existing processes, challenges, and priorities before recommending a technology direction.",
    icon: Target,
  },
  {
    title: "Independent Technology Assessment",
    description:
      "We evaluate technology options, existing systems, and proposed solutions based on business requirements rather than simply recommending more technology.",
    icon: FileSearch,
  },
  {
    title: "Practical Recommendations",
    description:
      "Our recommendations focus on what is realistic for your organisation, including implementation requirements, risks, priorities, and expected business value.",
    icon: Lightbulb,
  },
  {
    title: "Clear Strategic Direction",
    description:
      "We help turn complex technology decisions into clear priorities and actionable steps that your leadership and technical teams can work with.",
    icon: Compass,
  },
  {
    title: "Technology Investment Review",
    description:
      "We help assess technology investments and initiatives to determine whether they support your business objectives and long-term plans.",
    icon: BarChart3,
  },
  {
    title: "Experienced Technology Perspective",
    description:
      "Our team brings practical experience across software, digital platforms, cloud, applications, and technology implementation.",
    icon: Users,
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Digital advice built around{" "}
            <span className="text-brand-gradient">
              business decisions.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            Technology decisions can involve significant time, investment,
            and operational change. We provide an independent and practical
            perspective to help you understand your options and choose a
            direction that fits your business.
          </p>
        </div>

        {/* Main Highlight */}
        <div className="premium-card mt-12 p-7 md:mt-16 md:p-9 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <ShieldCheck size={21} strokeWidth={1.8} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                  Our Approach
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
                We help you make technology decisions with a clearer view.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                Before investing in a new platform, replacing an existing
                system, or starting a digital initiative, businesses need to
                understand what they actually need. We look at the business
                context, existing technology, available options, and
                implementation considerations before providing our
                recommendations.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid gap-3 sm:grid-cols-2 lg:w-[380px] lg:grid-cols-1">
              {[
                "Business & technology assessment",
                "Independent technology perspective",
                "Practical recommendations",
                "Clear implementation priorities",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[var(--brand-pink)]"
                  />

                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-14 md:mt-16">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
              What We Bring
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
              A practical perspective for important technology decisions.
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="premium-card group relative overflow-hidden p-6 md:p-7"
                >
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="mt-6 text-lg font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    {reason.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Fusse Market
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--brand-blue)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--brand-pink)]"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 md:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Need an outside perspective on a technology decision?
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                We can help assess your current situation, review the options,
                and define practical next steps.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
              Digital Advisory
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}