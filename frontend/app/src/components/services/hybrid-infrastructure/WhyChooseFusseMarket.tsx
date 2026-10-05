"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Network,
    title: "Connected Hybrid Architecture",
    description:
      "Bring cloud and on-premise environments together through a structured architecture designed for seamless communication, workload flexibility, and centralized visibility.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Security Across Every Environment",
    description:
      "Protect infrastructure, applications, data, and access across both cloud and on-premise systems with security controls designed around your business requirements.",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Flexible Cloud Adoption",
    description:
      "Move workloads to the cloud at the right pace while keeping critical systems where they make the most sense for performance, control, compliance, or operational needs.",
  },
  {
    number: "04",
    icon: Database,
    title: "Reliable Data & Workloads",
    description:
      "Create dependable infrastructure for applications and data with the right combination of storage, compute, networking, backup, and recovery capabilities.",
  },
  {
    number: "05",
    icon: Layers3,
    title: "Built to Scale",
    description:
      "Design an infrastructure foundation that can support new workloads, users, applications, locations, and business requirements without unnecessary complexity.",
  },
  {
    number: "06",
    icon: Workflow,
    title: "Simplified Infrastructure Management",
    description:
      "Connect teams, systems, monitoring, and operational workflows so your infrastructure becomes easier to manage, monitor, optimize, and continuously improve.",
  },
];

const journey = [
  "Assess",
  "Architect",
  "Integrate",
  "Secure",
  "Optimize",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background details */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Hybrid infrastructure built for{" "}
            <span className="text-brand-gradient">real business needs.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            We combine cloud flexibility with the control of on-premise
            infrastructure to create secure, connected, and scalable
            environments that support how your business operates today and
            where it needs to go next.
          </p>
        </div>

        {/* FEATURED BLOCK */}
        <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-md)] lg:mt-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* FEATURE CONTENT */}
            <div className="relative p-7 md:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <GitBranch size={23} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                  Hybrid Strategy
                </p>

                <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
                  One infrastructure strategy. Multiple environments working
                  together.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                  Your infrastructure should not force every workload into the
                  same environment. We help you determine what belongs in the
                  cloud, what should remain on-premise, and how both can work
                  together securely and efficiently.
                </p>

                {/* PROCESS PATH */}
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {journey.map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)] shadow-[var(--shadow-sm)]">
                        {step}
                      </div>

                      {index < journey.length - 1 && (
                        <ArrowUpRight
                          size={14}
                          className="text-[var(--brand-pink)]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ARCHITECTURE VISUAL */}
            <div className="relative min-h-[360px] overflow-hidden bg-[var(--brand-blue-dark)] p-7 md:p-10">
              <div className="absolute inset-0 dot-grid opacity-20" />

              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-pink)]/15 blur-3xl" />

              <div className="relative flex h-full min-h-[300px] items-center justify-center">
                {/* Connecting lines */}
                <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--brand-pink-light)]/50 to-transparent" />

                {/* On-premise */}
                <div className="absolute left-[5%] top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[var(--brand-pink-light)]">
                    <Database size={22} />
                  </div>

                  <p className="mt-3 text-xs font-semibold text-white">
                    On-Premise
                  </p>

                  <p className="mt-1 text-[10px] text-white/55">
                    Critical workloads
                  </p>
                </div>

                {/* Center */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--brand-pink-light)]/30 bg-white/10 shadow-[0_0_70px_rgba(196,109,141,0.18)] backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-pink)] text-white">
                    <Network size={25} />
                  </div>
                </div>

                {/* Cloud */}
                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[var(--brand-pink-light)]">
                    <Cloud size={22} />
                  </div>

                  <p className="mt-3 text-xs font-semibold text-white">
                    Cloud
                  </p>

                  <p className="mt-1 text-[10px] text-white/55">
                    Scalable workloads
                  </p>
                </div>

                {/* Security badge */}
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <ShieldCheck
                    size={14}
                    className="text-[var(--brand-pink-light)]"
                  />
                  <span className="text-[10px] font-medium text-white/70">
                    Secure Connected Environment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REASONS GRID */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="premium-card group relative min-h-[300px] overflow-hidden p-6 md:p-7"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-4xl font-semibold tracking-tight text-[var(--border-dark)] transition-colors duration-300 group-hover:text-[var(--brand-pink-light)]">
                  {reason.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                  <Icon size={21} />
                </div>

                <h3 className="relative mt-7 max-w-[85%] text-xl font-semibold text-[var(--text-primary)]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {reason.description}
                </p>

                {/* Bottom indicator */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <CheckCircle2
                      size={15}
                      className="text-[var(--brand-pink)]"
                    />
                    Hybrid ready
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--brand-pink)]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-14 border-t border-[var(--border)] pt-10 text-center md:mt-16">
          <p className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            Connect what you have.
            <span className="text-brand-gradient">
              {" "}
              Build what comes next.
            </span>
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
            A hybrid environment gives your business the flexibility to evolve
            without losing control of the systems that matter most.
          </p>
        </div>
      </div>
    </section>
  );
}