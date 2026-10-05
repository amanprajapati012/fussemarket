"use client";

import {
  ArrowUpRight,
  Blocks,
  Database,
  GitBranch,
  Layers3,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Workflow,
    title: "Built Around Your Operations",
    description:
      "We understand your business processes first, then design software around the way your teams, departments, and operations actually work.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Enterprise systems need room to grow. We build structured architectures that can support new users, features, teams, and business requirements.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Security at Every Layer",
    description:
      "From authentication and role-based access to secure APIs and protected business data, security is considered throughout the system.",
  },
  {
    number: "04",
    icon: Database,
    title: "Connected Business Systems",
    description:
      "Bring disconnected data and workflows together through reliable APIs, integrations, dashboards, and centralized enterprise systems.",
  },
  {
    number: "05",
    icon: GitBranch,
    title: "Flexible & Maintainable",
    description:
      "Clean architecture and modular development make it easier to maintain your platform, introduce changes, and evolve with your organization.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Long-Term Technology Partner",
    description:
      "Our relationship does not end at deployment. We help your software evolve through improvements, support, integrations, and new capabilities.",
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--brand-pink)]/8 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl">
            Enterprise technology built
            <span className="text-brand-gradient"> for the bigger picture.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Enterprise software is more than a collection of features. We
            focus on creating reliable digital foundations that connect your
            people, processes, data, and future business goals.
          </p>
        </div>

        {/* Main Feature */}
        <div className="relative mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 shadow-[var(--shadow-md)] md:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--brand-pink)]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[var(--brand-blue)]/8 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left */}
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] shadow-[var(--shadow-sm)]">
                <Blocks size={27} strokeWidth={1.7} />
              </div>

              <h3 className="max-w-md text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
                A digital foundation your enterprise can build on.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                From internal platforms and workflow automation to customer
                portals and connected business applications, we create systems
                designed to work together instead of adding another isolated
                tool to your technology stack.
              </p>
            </div>

            {/* Center visual */}
            <div className="relative mx-auto hidden h-44 w-44 items-center justify-center lg:flex">
              <div className="absolute inset-0 rounded-full border border-[var(--border)]" />
              <div className="absolute inset-5 rounded-full border border-[var(--brand-pink)]/20" />
              <div className="absolute inset-10 rounded-full bg-[var(--gradient-brand)] opacity-10 blur-xl" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[var(--surface)] shadow-[var(--shadow-md)]">
                <Database
                  size={30}
                  strokeWidth={1.6}
                  className="text-[var(--brand-blue)]"
                />
              </div>

              <span className="absolute left-2 top-8 h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
              <span className="absolute right-4 top-14 h-2 w-2 rounded-full bg-[var(--brand-blue)]" />
              <span className="absolute bottom-8 left-10 h-2 w-2 rounded-full bg-[var(--brand-pink-light)]" />
            </div>

            {/* Right stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Architecture", "Scalable"],
                ["Security", "Built-in"],
                ["Systems", "Connected"],
                ["Growth", "Ready"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-pink)]/30 hover:shadow-[var(--shadow-sm)]"
                >
                  <p className="text-xs font-medium text-[var(--text-muted)]">
                    {label}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group premium-card relative overflow-hidden p-6 md:p-7"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--brand-pink)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[var(--brand-pink)]">
                    {reason.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <span className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
                    Fusse Market
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[var(--border)] pt-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Built for today. Structured for what comes next.
            </p>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Enterprise systems should evolve with your business, not hold it
              back.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
            Enterprise-ready development
          </div>
        </div>
      </div>
    </section>
  );
}