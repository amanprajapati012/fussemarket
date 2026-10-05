"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Database,
  GitBranch,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Network,
    title: "Infrastructure Assessment",
    description:
      "Analyze your existing cloud, on-premise systems, applications, workloads, network, security requirements, and operational dependencies.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Hybrid Strategy & Planning",
    description:
      "Define which workloads should remain on-premise, which can move to the cloud, and how both environments will work together.",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Hybrid Architecture Design",
    description:
      "Design a scalable architecture covering cloud services, on-premise infrastructure, networking, connectivity, security, and workload placement.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Security & Access Setup",
    description:
      "Establish identity management, access controls, network security, encryption, policies, and governance across connected environments.",
  },
  {
    number: "05",
    icon: Server,
    title: "Infrastructure Integration",
    description:
      "Connect cloud and on-premise infrastructure with secure networking, APIs, gateways, services, and communication between critical systems.",
  },
  {
    number: "06",
    icon: Database,
    title: "Workload Migration & Deployment",
    description:
      "Migrate or deploy applications and workloads with controlled transitions, performance validation, data protection, and minimal disruption.",
  },
  {
    number: "07",
    icon: Workflow,
    title: "Automation & DevOps",
    description:
      "Introduce automated deployment, infrastructure management, configuration workflows, and CI/CD practices across the hybrid environment.",
  },
  {
    number: "08",
    icon: Network,
    title: "Monitoring & Optimization",
    description:
      "Monitor infrastructure performance, connectivity, availability, resource usage, and security while continuously improving efficiency.",
  },
  {
    number: "09",
    icon: CheckCircle2,
    title: "Ongoing Management",
    description:
      "Continuously maintain, secure, optimize, and evolve your hybrid infrastructure as applications, teams, and business requirements change.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* HEADER */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="section-eyebrow">
              Development Process
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] md:text-4xl lg:text-5xl">
              A structured path to a{" "}
              <span className="text-brand-gradient">
                connected infrastructure.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
              From understanding your existing environment to integrating,
              securing, and optimizing your infrastructure, we follow a
              structured approach that keeps every stage clear and controlled.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="hidden shrink-0 items-center gap-3 pb-1 md:flex">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Scroll to explore
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-pink)]">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* PROCESS TRACK */}
        <div className="relative mt-12 md:mt-14 lg:mt-16">
          {/* Horizontal line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-[var(--border-dark)] to-transparent md:block" />

          <div
            className="flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory"
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
                  className="premium-card group relative min-h-[390px] w-[320px] shrink-0 snap-start overflow-hidden p-6 sm:w-[350px] md:w-[380px] md:p-7"
                >
                  {/* Top number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="text-4xl font-semibold tracking-[-0.04em] text-[var(--border-dark)] transition-colors duration-300 group-hover:text-[var(--brand-pink-light)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="mt-7 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]/40" />

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-xl font-semibold leading-snug text-[var(--text-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[var(--border)] pt-4 md:left-7 md:right-7">
                    <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                      <CheckCircle2
                        size={15}
                        className="text-[var(--brand-pink)]"
                      />
                      Fusse Market Process
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* MOBILE SCROLL HINT */}
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-[var(--text-muted)] md:hidden">
          <ArrowRight size={14} className="text-[var(--brand-pink)]" />
          <span>Swipe to explore the process</span>
        </div>

        {/* BOTTOM FEATURE */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] md:mt-16">
          <div className="grid md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="hidden p-7 md:block">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Network size={21} />
              </div>
            </div>

            <div className="p-7 md:py-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                Connected by Design
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
                One infrastructure. Multiple environments. One clear strategy.
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
                Every stage is designed to keep your cloud and on-premise
                environments secure, connected, manageable, and ready for
                future growth.
              </p>
            </div>

            <div className="hidden px-8 md:block">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
                Ready to evolve
              </div>
            </div>
          </div>
        </div>

        {/* BRAND LINE */}
        <div className="brand-line mt-14" />
      </div>
    </section>
  );
}