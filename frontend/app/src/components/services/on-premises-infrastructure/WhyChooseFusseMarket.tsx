"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  Gauge,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Server,
    title: "Infrastructure Built Around Your Business",
    description:
      "We design your server and infrastructure environment around your applications, teams, workloads, operational requirements, and long-term business goals.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Security & Controlled Access",
    description:
      "Protect critical systems and business data with secure network architecture, identity controls, access policies, firewalls, and layered infrastructure security.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance & Reliability",
    description:
      "Build infrastructure that delivers consistent performance and dependable availability for applications, databases, internal systems, and business operations.",
  },
  {
    number: "04",
    icon: Database,
    title: "Reliable Data Infrastructure",
    description:
      "Create dependable storage and database environments with structured backup, redundancy, monitoring, and recovery strategies for critical business data.",
  },
  {
    number: "05",
    icon: Layers3,
    title: "Scalable Infrastructure Architecture",
    description:
      "Plan your infrastructure with future requirements in mind so new applications, users, servers, and workloads can be added without unnecessary complexity.",
  },
  {
    number: "06",
    icon: Workflow,
    title: "Simplified Infrastructure Management",
    description:
      "Centralize infrastructure operations through monitoring, automation, documentation, and structured management practices that make systems easier to maintain.",
  },
];

const capabilities = [
  "Servers",
  "Networking",
  "Storage",
  "Security",
  "Backup",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-48 top-24 h-96 w-96 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-20 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Infrastructure designed for{" "}
            <span className="text-brand-gradient">
              control and reliability.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            We help businesses build dependable on-premises environments where
            security, performance, control, and operational continuity are
            treated as essential parts of the infrastructure.
          </p>
        </div>

        {/* FEATURED ARCHITECTURE */}
        <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-md)] lg:mt-16">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* CONTENT */}
            <div className="relative p-7 md:p-10 lg:p-12">
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Server size={23} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                  Infrastructure Foundation
                </p>

                <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
                  A secure foundation for the systems your business depends
                  on.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                  From physical servers and storage to networking and security,
                  we create an infrastructure environment that gives your
                  organization greater control over its critical systems and
                  data.
                </p>

                {/* CAPABILITIES */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {capabilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs font-semibold text-[var(--text-secondary)] shadow-[var(--shadow-sm)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ARCHITECTURE VISUAL */}
            <div className="relative min-h-[380px] overflow-hidden bg-[var(--brand-blue-dark)] p-7 md:p-10">
              <div className="absolute inset-0 dot-grid opacity-20" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-pink)]/10 blur-3xl" />

              <div className="relative flex min-h-[320px] items-center justify-center">
                {/* Network connections */}
                <div className="absolute left-1/2 top-1/2 h-[1px] w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--brand-pink-light)]/40 to-transparent" />

                <div className="absolute left-1/2 top-[32%] h-[38%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--brand-pink-light)]/35 to-transparent" />

                {/* Central server */}
                <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-[28px] border border-[var(--brand-pink-light)]/30 bg-white/10 shadow-[0_0_70px_rgba(196,109,141,0.16)] backdrop-blur-xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-pink)] text-white">
                    <Server size={27} />
                  </div>
                </div>

                {/* Network */}
                <div className="absolute left-[5%] top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[var(--brand-pink-light)]">
                    <Network size={20} />
                  </div>

                  <p className="mt-3 text-xs font-semibold text-white">
                    Network
                  </p>

                  <p className="mt-1 text-[10px] text-white/50">
                    Connected systems
                  </p>
                </div>

                {/* Storage */}
                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[var(--brand-pink-light)]">
                    <Database size={20} />
                  </div>

                  <p className="mt-3 text-xs font-semibold text-white">
                    Storage
                  </p>

                  <p className="mt-1 text-[10px] text-white/50">
                    Protected data
                  </p>
                </div>

                {/* Security */}
                <div className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <ShieldCheck
                    size={14}
                    className="text-[var(--brand-pink-light)]"
                  />

                  <span className="text-[10px] font-medium text-white/70">
                    Secure Infrastructure
                  </span>
                </div>

                {/* Operations */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <Workflow
                    size={14}
                    className="text-[var(--brand-pink-light)]"
                  />

                  <span className="text-[10px] font-medium text-white/70">
                    Reliable Operations
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
                className="premium-card group relative min-h-[310px] overflow-hidden p-6 md:p-7"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-5xl font-semibold tracking-[-0.05em] text-[var(--border)] transition-all duration-500 group-hover:text-[var(--brand-pink-light)]/50">
                  {reason.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="max-w-[85%] text-xl font-semibold leading-snug text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[var(--border)] pt-4 md:left-7 md:right-7">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <CheckCircle2
                      size={15}
                      className="text-[var(--brand-pink)]"
                    />
                    Infrastructure ready
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

        {/* BOTTOM MESSAGE */}
        <div className="mt-14 border-t border-[var(--border)] pt-10 text-center md:mt-16">
          <p className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            More control over your infrastructure.
            <span className="text-brand-gradient">
              {" "}
              More confidence in your operations.
            </span>
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
            We build infrastructure that is secure, manageable, and prepared
            to support your business as its technology requirements evolve.
          </p>
        </div>

        <div className="brand-line mt-14" />
      </div>
    </section>
  );
}