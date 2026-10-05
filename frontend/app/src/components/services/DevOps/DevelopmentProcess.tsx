"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CloudCog,
  Code2,
  GitBranch,
  Layers3,
  Rocket,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Activity,
    title: "DevOps Assessment",
    description:
      "We review your existing development, infrastructure, deployment, and operational workflows to identify bottlenecks and automation opportunities.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "DevOps Strategy",
    description:
      "We define a practical DevOps roadmap covering tooling, automation, infrastructure, security, deployment, and operational requirements.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "CI/CD Pipeline Design",
    description:
      "We design continuous integration and delivery pipelines that connect source control, builds, testing, security checks, and deployments.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Infrastructure Automation",
    description:
      "We automate infrastructure provisioning and configuration to create consistent, repeatable, and version-controlled environments.",
  },
  {
    number: "05",
    icon: TestTube2,
    title: "Testing & Quality Gates",
    description:
      "Automated testing and quality checks are integrated into the delivery pipeline to detect issues before they reach production.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Security Integration",
    description:
      "Security practices are embedded throughout the delivery lifecycle with automated checks, secure configurations, and controlled access.",
  },
  {
    number: "07",
    icon: Rocket,
    title: "Deployment & Release",
    description:
      "We implement controlled deployment workflows that make releases predictable, repeatable, and easier to manage across environments.",
  },
  {
    number: "08",
    icon: CloudCog,
    title: "Monitoring & Observability",
    description:
      "Applications and infrastructure are connected to monitoring, logging, alerts, and observability practices for better operational visibility.",
  },
  {
    number: "09",
    icon: Layers3,
    title: "Optimize & Scale",
    description:
      "We continuously review performance, reliability, costs, and workflows to improve the DevOps environment as your business grows.",
  },
];

const phases = [
  "Assess",
  "Plan",
  "Automate",
  "Secure",
  "Deploy",
  "Monitor",
  "Improve",
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            A structured path from{" "}
            <span className="text-brand-gradient">
              code to production.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            Our DevOps process brings development, infrastructure, security,
            deployment, and monitoring together into one continuous delivery
            lifecycle.
          </p>
        </div>

        {/* Process Phases */}
        <div className="mt-10 flex justify-center">
          <div className="flex max-w-full items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {phases.map((phase, index) => (
              <div
                key={phase}
                className="flex shrink-0 items-center gap-2"
              >
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-pink)] hover:text-[var(--brand-pink)]">
                  {phase}
                </span>

                {index < phases.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Cards */}
        <div className="relative mt-14">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-pink-soft)] opacity-40 blur-3xl" />

          <div className="relative flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory scrollbar-hide">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative w-[320px] shrink-0 snap-start overflow-hidden p-6 sm:w-[350px] sm:p-7 md:w-[380px]"
                >
                  {/* Number */}
                  <div className="absolute right-5 top-4 text-5xl font-bold leading-none text-[var(--surface-blue)] transition-colors duration-300 group-hover:text-[var(--brand-pink-soft)]">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--brand-pink)] group-hover:text-[var(--surface)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Step Label */}
                  <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                    Step {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="relative mt-2 text-xl font-semibold leading-snug text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {step.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-px w-8 bg-[var(--border-dark)] transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--brand-pink)]" />

                    <span className="text-xs font-semibold text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                      DevOps stage
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Feature */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-md)]">
          <div className="relative p-7 sm:p-9 md:p-10">

            <div className="dot-grid absolute inset-0 opacity-30" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                    Continuous Delivery
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                    Build once. Automate continuously. Deliver confidently.
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                    Every stage is connected to create a repeatable DevOps
                    lifecycle that improves delivery speed, system
                    reliability, security, and operational visibility.
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-[var(--shadow-sm)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <GitBranch className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">
                    Delivery Lifecycle
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Continuous & automated
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}