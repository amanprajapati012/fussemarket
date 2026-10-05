"use client";

import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  GitBranch,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Discovery & Assessment",
    description:
      "We understand your applications, databases, platforms, workflows, APIs, and business requirements to identify integration opportunities and dependencies.",
  },
  {
    number: "02",
    icon: Network,
    title: "Integration Strategy",
    description:
      "We define the integration approach, technology stack, communication patterns, priorities, security requirements, and roadmap for your ecosystem.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Architecture Design",
    description:
      "We design a scalable integration architecture that defines how applications, data sources, APIs, platforms, and workflows will communicate.",
  },
  {
    number: "04",
    icon: GitBranch,
    title: "API & Data Mapping",
    description:
      "We map data structures, API endpoints, transformations, dependencies, and business rules to ensure information flows correctly between systems.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Integration Development",
    description:
      "Our team builds APIs, connectors, workflows, middleware, data transformations, and automation components based on the approved architecture.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Security & Validation",
    description:
      "We validate authentication, authorization, data protection, error handling, access controls, and integration reliability before production deployment.",
  },
  {
    number: "07",
    icon: CheckCircle2,
    title: "Testing & Quality Assurance",
    description:
      "Integrations are tested across data accuracy, workflows, APIs, performance, failure scenarios, and connected business systems.",
  },
  {
    number: "08",
    icon: Rocket,
    title: "Deployment & Go-Live",
    description:
      "We deploy the integration in a controlled manner, monitor the transition, and verify that connected systems and automated workflows operate as expected.",
  },
  {
    number: "09",
    icon: Activity,
    title: "Monitoring & Optimization",
    description:
      "After launch, we monitor integration health, identify bottlenecks, resolve issues, and continuously improve performance as your technology ecosystem evolves.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-170px] top-16 h-[400px] w-[400px] rounded-full bg-[var(--brand-pink-soft)] opacity-60 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-130px] h-[440px] w-[440px] rounded-full bg-[var(--brand-blue-soft)] opacity-70 blur-3xl" />
      </div>

      <div className="container-premium relative">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            A structured path to{" "}
            <span className="text-brand-gradient">
              seamless integration.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            We follow a structured integration lifecycle that brings clarity
            to complex technology environments — from discovery and
            architecture through development, deployment, and continuous
            optimization.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-14 md:mt-16">
          {/* Desktop timeline */}
          <div className="pointer-events-none absolute left-0 right-0 top-[36px] hidden h-px bg-[var(--border)] md:block" />

          {/* Horizontal scroll */}
          <div className="flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory [scrollbar-width:thin]">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative w-[320px] shrink-0 snap-start sm:w-[350px] md:w-[380px]"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 mb-7 flex items-center">
                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:shadow-[var(--shadow-brand)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gradient-brand)] text-sm font-bold text-white">
                        {step.number}
                      </div>
                    </div>

                    {index < processSteps.length - 1 && (
                      <ArrowRight className="ml-4 h-4 w-4 shrink-0 text-[var(--text-muted)] md:hidden" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="premium-card relative min-h-[310px] overflow-hidden p-7">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--brand-pink-soft)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-full flex-col">
                      {/* Icon & label */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-pink-soft)]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="text-xs font-semibold tracking-[0.16em] text-[var(--text-muted)]">
                          STEP {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mt-7">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom */}
                      <div className="mt-auto pt-7">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
                          <span>Integration milestone</span>

                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom feature */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] md:mt-12 md:p-9">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Workflow className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--brand-pink)]">
                  Integration by Design
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)] md:text-xl">
                  Connect systems. Automate processes. Keep evolving.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  Every integration is designed with reliability,
                  security, scalability, and long-term maintainability in
                  mind.
                </p>
              </div>
            </div>

            {/* Process pills */}
            <div className="flex shrink-0 flex-wrap gap-2">
              {["Discover", "Design", "Build", "Validate", "Optimize"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-semibold text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}