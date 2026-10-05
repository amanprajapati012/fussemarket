"use client";

import {
  ArrowUpRight,
  CloudCog,
  Database,
  GitBranch,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    icon: CloudCog,
    title: "Cloud Strategy Built Around Your Business",
    description:
      "We design cloud strategies around your applications, teams, workloads, and long-term business goals instead of forcing your operations into a fixed architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Security at Every Layer",
    description:
      "From identity and access control to network architecture and data protection, we help create infrastructure with security built into its foundation.",
  },
  {
    icon: GitBranch,
    title: "Modernize Without Disruption",
    description:
      "Move legacy workloads toward modern cloud environments through a structured approach that reduces operational risk and keeps your business moving.",
  },
  {
    icon: Gauge,
    title: "Performance & Cost Optimization",
    description:
      "We identify infrastructure inefficiencies and help optimize resources, workloads, and cloud usage so your environment performs efficiently without unnecessary spending.",
  },
  {
    icon: Workflow,
    title: "Connected Infrastructure",
    description:
      "Bring applications, databases, APIs, networks, and business systems together through reliable architecture and well-planned integrations.",
  },
  {
    icon: Database,
    title: "Infrastructure Ready to Scale",
    description:
      "Build a flexible foundation that can support increasing workloads, new applications, growing teams, and changing business requirements.",
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--brand-pink)]/8 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Cloud infrastructure designed for
            <span className="text-brand-gradient">
              {" "}
              long-term growth.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base">
            Your cloud environment should do more than host applications.
            We help build a secure, efficient, and scalable infrastructure
            that supports your technology today and adapts to what comes next.
          </p>
        </div>

        {/* Featured Block */}
        <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-sm)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div className="relative overflow-hidden p-7 md:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--brand-pink)]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--brand-pink)] shadow-[var(--shadow-sm)]">
                  <CloudCog size={26} strokeWidth={1.7} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                  Cloud Foundation
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--text-primary)] md:text-3xl">
                  A stronger infrastructure for the way your business works.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                  Whether you are moving to the cloud, modernizing existing
                  infrastructure, or improving an environment that has already
                  grown complex, we help turn infrastructure into a reliable
                  business foundation.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
                  <span>Strategy. Architecture. Optimization.</span>
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>

            {/* Right Architecture Visual */}
            <div className="relative min-h-[330px] overflow-hidden bg-[var(--text-primary)] p-7 md:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute inset-0 dot-grid" />
              </div>

              <div className="relative flex h-full items-center justify-center">
                {/* Central Node */}
                <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-center shadow-2xl backdrop-blur-xl">
                  <CloudCog
                    size={27}
                    className="text-[var(--brand-pink-light)]"
                  />
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    Cloud Core
                  </span>
                </div>

                {/* Connection Lines */}
                <div className="absolute left-[20%] right-[20%] top-1/2 h-px bg-white/15" />

                <div className="absolute bottom-[23%] left-1/2 h-[28%] w-px bg-white/15" />

                {/* Nodes */}
                <div className="absolute left-[7%] top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                    Security
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Protected
                  </p>
                </div>

                <div className="absolute right-[7%] top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                    Performance
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Optimized
                  </p>
                </div>

                <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/8 px-5 py-3 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">
                    Architecture
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Ready to Scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--brand-pink)]/8 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[var(--text-muted)] opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--brand-pink)] group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-snug text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] sm:flex-row sm:items-center md:p-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
              Built for what comes next
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">
              Infrastructure that grows with your business.
            </h3>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
            Secure
            <span className="text-[var(--border-dark)]">•</span>
            Scalable
            <span className="text-[var(--border-dark)]">•</span>
            Optimized
          </div>
        </div>
      </div>
    </section>
  );
}