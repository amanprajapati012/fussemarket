"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  Network,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: CloudCog,
    title: "Cloud Readiness Assessment",
    description:
      "Evaluate your current workloads, security requirements, compliance obligations, and cost targets to define the right cloud strategy.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Architecture Design & Planning",
    description:
      "Design a comprehensive cloud architecture blueprint covering service selection, network topology, security controls, scalability, and cost considerations.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Infrastructure as Code Development",
    description:
      "Define infrastructure through version-controlled code using tools such as Terraform or CloudFormation for consistent and repeatable deployments.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Security & Compliance Baseline",
    description:
      "Establish security baselines, IAM policies, encryption, governance controls, and monitoring practices before workloads are deployed.",
  },
  {
    number: "05",
    icon: Database,
    title: "Cloud Environment Provisioning",
    description:
      "Provision development, staging, and production environments with networking, compute, storage, databases, and secure access controls.",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Application Workload Migration",
    description:
      "Migrate or deploy applications to the cloud with controlled transitions, performance validation, minimal disruption, and infrastructure optimization.",
  },
  {
    number: "07",
    icon: Workflow,
    title: "CI/CD & Automation Integration",
    description:
      "Integrate infrastructure with CI/CD pipelines to automate application delivery, infrastructure updates, testing, and deployment workflows.",
  },
  {
    number: "08",
    icon: Gauge,
    title: "Monitoring & Alerting Setup",
    description:
      "Implement centralized monitoring, log aggregation, performance dashboards, and intelligent alerts for proactive issue detection.",
  },
  {
    number: "09",
    icon: Globe2,
    title: "Ongoing Management & Optimization",
    description:
      "Continuously manage and optimize your cloud environment through security monitoring, cost reviews, performance tuning, and infrastructure improvements.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--brand-pink)]/8 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[var(--brand-blue)]/8 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="section-eyebrow">
            Development Process
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            A structured approach to
            <span className="text-brand-gradient">
              {" "}
              cloud infrastructure.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base">
            From the initial assessment to ongoing optimization, we follow a
            clear process designed to build secure, scalable, and reliable
            cloud environments.
          </p>
        </div>

        {/* Horizontal Process Scroll */}
        <div className="relative mt-14">
          {/* Progress Line */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-[var(--border-dark)] lg:block" />

          <div
            className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative flex min-h-[390px] w-[320px] shrink-0 snap-start flex-col overflow-hidden p-6 sm:w-[350px] md:w-[380px] md:p-7"
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-pink)] shadow-[var(--shadow-sm)] transition-all duration-300 group-hover:border-[var(--brand-pink)]/30 group-hover:bg-[var(--surface-pink)]">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                        Step
                      </p>

                      <span className="text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-blue)]/30 transition-colors duration-300 group-hover:text-[var(--brand-pink)]/50">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="my-7 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink)]/30" />

                  {/* Content */}
                  <div>
                    <h3 className="max-w-[290px] text-xl font-semibold leading-snug tracking-[-0.015em] text-[var(--text-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto flex items-center justify-between pt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={15}
                        className="text-[var(--brand-pink)]"
                      />

                      <span className="text-xs font-medium text-[var(--text-muted)]">
                        Fusse Market
                      </span>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[var(--brand-pink)]/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              );
            })}
          </div>

          {/* Scroll Hint */}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-[var(--text-muted)]">
              Explore our cloud delivery process
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-[var(--brand-blue)]">
              <span>Scroll to explore</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="container-premium mt-14">
        <div className="brand-line" />
      </div>
    </section>
  );
}