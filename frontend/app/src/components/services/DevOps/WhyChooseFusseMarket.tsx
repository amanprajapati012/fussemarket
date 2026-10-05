"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CloudCog,
  GitBranch,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: GitBranch,
    title: "CI/CD Built for Faster Delivery",
    description:
      "Automate build, testing, and deployment workflows so your team can release software faster with fewer manual steps.",
  },
  {
    number: "02",
    icon: ServerCog,
    title: "Infrastructure as Code",
    description:
      "Manage infrastructure through repeatable and version-controlled configurations for consistent and reliable environments.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Security Built Into Delivery",
    description:
      "Integrate security practices into development and deployment pipelines to identify risks earlier and protect your applications.",
  },
  {
    number: "04",
    icon: CloudCog,
    title: "Cloud & Infrastructure Automation",
    description:
      "Automate cloud resources, environments, deployments, and operational tasks to improve efficiency and scalability.",
  },
  {
    number: "05",
    icon: Activity,
    title: "Monitoring & Reliability",
    description:
      "Gain better visibility into applications and infrastructure with monitoring, logging, alerts, and proactive reliability practices.",
  },
  {
    number: "06",
    icon: Workflow,
    title: "DevOps Built Around Your Team",
    description:
      "We adapt tools, workflows, and automation practices around your existing development process instead of forcing a rigid methodology.",
  },
];

const journey = [
  "Assess",
  "Automate",
  "Secure",
  "Deploy",
  "Monitor",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            Why Choose Fusse Market
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            DevOps that makes{" "}
            <span className="text-brand-gradient">
              delivery simpler.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            We combine automation, cloud infrastructure, security, and
            observability to create a DevOps environment that helps teams
            deliver software faster while maintaining reliability and control.
          </p>
        </div>

        {/* Featured Architecture */}
        <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-md)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Content */}
            <div className="p-7 sm:p-9 md:p-12">
              <span className="section-eyebrow">
                DevOps Foundation
              </span>

              <h3 className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl">
                A delivery pipeline designed to keep your software moving.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                From source code to production, we create connected DevOps
                workflows where development, infrastructure, security, and
                monitoring work together as one continuous process.
              </p>

              {/* Journey */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {journey.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-pink)] hover:text-[var(--brand-pink)]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-pink)] text-xs font-bold text-[var(--brand-pink)]">
                      {index + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="relative min-h-[390px] overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div className="dot-grid absolute inset-0 opacity-40" />

              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-pink-soft)] blur-3xl" />

              <div className="relative flex h-full min-h-[350px] items-center justify-center">

                {/* Connecting Lines */}
                <div className="absolute left-1/2 top-[22%] h-[56%] w-px -translate-x-1/2 bg-[var(--border-dark)]" />
                <div className="absolute left-[22%] top-1/2 h-px w-[56%] -translate-y-1/2 bg-[var(--border-dark)]" />

                {/* Center */}
                <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-[var(--brand-pink)] bg-[var(--surface)] shadow-[var(--shadow-brand)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <Workflow className="h-5 w-5" />
                  </div>

                  <span className="mt-2 text-xs font-bold text-[var(--text-primary)]">
                    DevOps
                  </span>
                </div>

                {/* Top */}
                <div className="absolute left-1/2 top-2 -translate-x-1/2">
                  <ArchitectureNode
                    icon={GitBranch}
                    label="Code"
                  />
                </div>

                {/* Right */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <ArchitectureNode
                    icon={Rocket}
                    label="Deploy"
                  />
                </div>

                {/* Bottom */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <ArchitectureNode
                    icon={Activity}
                    label="Monitor"
                  />
                </div>

                {/* Left */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <ArchitectureNode
                    icon={ShieldCheck}
                    label="Secure"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-16">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-eyebrow">
                Our Approach
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                DevOps capabilities built around real delivery challenges.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)]">
              Better automation is not about adding more tools. It is about
              creating a connected delivery system that your team can actually
              operate and evolve.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.number}
                  className="premium-card group relative overflow-hidden p-6 sm:p-7"
                >
                  {/* Number */}
                  <span className="absolute right-5 top-5 text-4xl font-semibold text-[var(--surface-blue)] transition-colors duration-300 group-hover:text-[var(--brand-pink-soft)]">
                    {reason.number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--brand-pink)] group-hover:text-[var(--surface)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="relative mt-6 pr-10 text-lg font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h4>

                  <p className="relative mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    <CheckCircle2 className="h-4 w-4" />
                    DevOps capability
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-14 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-soft)] p-7 sm:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Layers3 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                  Continuous Improvement
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                  Build faster. Operate smarter. Improve continuously.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  Your DevOps environment should evolve with your products,
                  infrastructure, and team — not become another bottleneck.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <span>Built to evolve</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ArchitectureNode({
  icon: Icon,
  label,
}: {
  icon: typeof GitBranch;
  label: string;
}) {
  return (
    <div className="flex w-24 flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-blue)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-pink)] hover:text-[var(--brand-pink)]">
        <Icon className="h-5 w-5" />
      </div>

      <span className="text-xs font-semibold text-[var(--text-secondary)]">
        {label}
      </span>
    </div>
  );
}