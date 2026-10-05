"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Route,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Route,
    title: "Migration Strategy Built Around Your Needs",
    description:
      "Every migration starts with understanding your systems, dependencies, data, applications, and business requirements before defining the right migration approach.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Risk Managed From Start to Finish",
    description:
      "We identify migration risks, dependencies, compatibility issues, and potential points of failure early to create a controlled and predictable migration journey.",
  },
  {
    number: "03",
    icon: Database,
    title: "Data Integrity & Protection",
    description:
      "Your data remains a priority throughout the migration. We focus on secure handling, validation, consistency, and accurate transfer of critical information.",
  },
  {
    number: "04",
    icon: GitBranch,
    title: "Minimal Business Disruption",
    description:
      "Our structured migration approach is designed to reduce downtime and keep critical business operations running wherever possible.",
  },
  {
    number: "05",
    icon: Layers3,
    title: "Complex Systems, Clearly Connected",
    description:
      "We manage dependencies between applications, databases, platforms, infrastructure, and business systems so the new environment works as one connected ecosystem.",
  },
  {
    number: "06",
    icon: LockKeyhole,
    title: "Secure & Reliable Transition",
    description:
      "Security controls, access management, validation, testing, and rollback considerations are incorporated into the migration process to support a reliable transition.",
  },
];

const journey = [
  "Assess",
  "Plan",
  "Prepare",
  "Migrate",
  "Validate",
  "Optimize",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Migration built around{" "}
            <span className="text-brand-gradient">
              continuity and control.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            A successful migration is more than moving systems or data. We
            combine structured planning, technical expertise, security, and
            validation to help your business transition with greater
            confidence and less disruption.
          </p>
        </div>

        {/* Main Feature */}
        <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-sm)]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            {/* Content */}
            <div className="p-7 sm:p-9 md:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Route size={23} strokeWidth={1.7} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                Our Migration Approach
              </p>

              <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl">
                A carefully managed path from your current environment to
                where your business needs to be.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-[15px]">
                We break complex migration projects into clear stages,
                allowing teams to understand what is changing, manage risks
                early, validate every critical step, and move forward without
                losing sight of business continuity.
              </p>

              {/* Journey */}
              <div className="mt-8 flex flex-wrap gap-2">
                {journey.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs font-semibold text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--brand-pink)]/30 hover:text-[var(--brand-pink)]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--surface-pink)] text-[10px] font-bold text-[var(--brand-pink)]">
                      {index + 1}
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative min-h-[350px] overflow-hidden bg-[var(--surface-blue)] p-7 sm:p-9 md:p-12">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />

              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[var(--brand-pink)]/10 blur-3xl" />

              {/* Migration Architecture */}
              <div className="relative flex h-full min-h-[300px] items-center justify-center">
                {/* Connection Lines */}
                <div className="absolute left-[23%] right-[23%] top-1/2 h-px bg-[var(--border-dark)]" />

                <div className="absolute left-1/2 top-[27%] h-[46%] w-px bg-[var(--border-dark)]" />

                {/* Source */}
                <div className="absolute left-[8%] top-1/2 -translate-y-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-blue)] shadow-[var(--shadow-sm)]">
                    <Database size={25} />
                  </div>

                  <p className="mt-3 text-center text-xs font-semibold text-[var(--text-secondary)]">
                    Current
                  </p>
                </div>

                {/* Center */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--brand-pink)]/20 bg-[var(--surface)] shadow-[var(--shadow-brand)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <Route size={25} />
                  </div>
                </div>

                {/* Destination */}
                <div className="absolute right-[8%] top-1/2 -translate-y-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-blue)] shadow-[var(--shadow-sm)]">
                    <Layers3 size={25} />
                  </div>

                  <p className="mt-3 text-center text-xs font-semibold text-[var(--text-secondary)]">
                    Target
                  </p>
                </div>

                {/* Security Badge */}
                <div className="absolute left-1/2 top-[10%] -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-[var(--shadow-sm)]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      size={14}
                      className="text-[var(--brand-pink)]"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                      Protected
                    </span>
                  </div>
                </div>

                {/* Validation Badge */}
                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-[var(--shadow-sm)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-[var(--brand-blue)]"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                      Validated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="premium-card group relative overflow-hidden p-7 sm:p-8"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-[var(--brand-pink)]">
                    {reason.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug text-[var(--text-primary)]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {reason.description}
                </p>

                {/* Bottom Arrow */}
                <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    Migration Capability
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-muted)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
              Migration Outcome
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
              Move forward without losing control of what matters.
            </h3>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--brand-blue)] shadow-[var(--shadow-sm)]">
              <CheckCircle2 size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Our Focus
              </p>

              <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                Secure & Reliable Transition
              </p>
            </div>

            <ArrowRight
              size={18}
              className="ml-2 text-[var(--brand-pink)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}