"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Database,
  GitBranch,
  Layers3,
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
      "We understand your current systems, applications, data, dependencies, and business requirements to establish a clear migration baseline.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Migration Strategy",
    description:
      "We define the right migration approach, priorities, timelines, technology requirements, and risk controls for your environment.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Dependency Mapping",
    description:
      "We identify relationships between applications, databases, infrastructure, integrations, and critical workloads before migration begins.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Migration Preparation",
    description:
      "We prepare target environments, security controls, backups, access policies, migration tooling, and validation checkpoints.",
  },
  {
    number: "05",
    icon: Cloud,
    title: "Pilot Migration",
    description:
      "A controlled migration is performed on selected workloads to validate the approach, identify issues, and refine the execution plan.",
  },
  {
    number: "06",
    icon: Database,
    title: "Data & System Migration",
    description:
      "We execute the migration in planned stages while maintaining data integrity, system availability, security, and operational control.",
  },
  {
    number: "07",
    icon: CheckCircle2,
    title: "Validation & Testing",
    description:
      "Applications, data, integrations, performance, access, and critical business workflows are thoroughly validated before final transition.",
  },
  {
    number: "08",
    icon: Rocket,
    title: "Cutover & Transition",
    description:
      "We carefully move production workloads to the target environment with a controlled cutover plan designed to minimize business disruption.",
  },
  {
    number: "09",
    icon: Workflow,
    title: "Post-Migration Optimization",
    description:
      "After migration, we monitor the environment, resolve issues, optimize performance, and help ensure the new setup delivers lasting value.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-24 h-[360px] w-[360px] rounded-full bg-[var(--brand-pink-soft)] opacity-60 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[var(--brand-blue-soft)] opacity-70 blur-3xl" />
      </div>

      <div className="container-premium relative">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            A structured approach to{" "}
            <span className="text-brand-gradient">successful migration.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base">
            Every migration requires careful planning, controlled execution,
            and continuous validation. Our structured process helps reduce
            risk while keeping your systems, data, and business operations
            moving forward.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-14 md:mt-16">
          {/* Timeline line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-[var(--border)] md:block" />

          <div className="flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory [scrollbar-width:thin]">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative w-[320px] shrink-0 snap-start sm:w-[350px] md:w-[380px]"
                >
                  {/* Step number */}
                  <div className="relative z-10 mb-7 flex items-center">
                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:shadow-[var(--shadow-brand)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gradient-brand)] text-sm font-bold text-white">
                        {step.number}
                      </div>
                    </div>

                    {index < processSteps.length - 1 && (
                      <ArrowRight className="ml-4 h-4 w-4 shrink-0 text-[var(--text-muted)] md:hidden" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="premium-card relative h-full min-h-[285px] overflow-hidden p-7">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--brand-pink-soft)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-pink-soft)]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="text-xs font-semibold tracking-[0.18em] text-[var(--text-muted)]">
                          STEP {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                        {step.description}
                      </p>

                      <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
                        <span>Migration milestone</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom feature */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 md:mt-12 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--brand-pink)]">
                  Migration by Design
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)] md:text-xl">
                  One structured process. Greater control at every stage.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  From the first assessment to post-migration optimization,
                  every stage is planned around security, continuity, and
                  measurable outcomes.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2">
              {["Assess", "Protect", "Migrate", "Validate"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}