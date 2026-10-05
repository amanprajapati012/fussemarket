"use client";

import {
  ArrowUpRight,
  Cloud,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Network,
    title: "Hybrid Architecture Design",
    description:
      "Design a connected infrastructure architecture that brings cloud and on-premise environments together around your business requirements.",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Cloud & On-Premise Integration",
    description:
      "Connect existing infrastructure with cloud platforms to create secure communication between workloads, applications, and data.",
  },
  {
    number: "03",
    icon: Server,
    title: "Infrastructure Modernization",
    description:
      "Modernize legacy infrastructure gradually while maintaining business continuity, operational control, and a clear path toward future technology.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Hybrid Security Management",
    description:
      "Protect identities, networks, applications, and data across hybrid environments with layered security and controlled access.",
  },
  {
    number: "05",
    icon: Database,
    title: "Data & Workload Management",
    description:
      "Plan and manage workloads across the right environments with reliable storage, databases, backup strategies, and performance considerations.",
  },
  {
    number: "06",
    icon: GitBranch,
    title: "Hybrid DevOps & Automation",
    description:
      "Automate infrastructure and application workflows across environments using consistent deployment, configuration, and CI/CD practices.",
  },
  {
    number: "07",
    icon: Globe2,
    title: "Network & Connectivity",
    description:
      "Build dependable connectivity between offices, data centers, cloud platforms, and business systems with performance and security in mind.",
  },
  {
    number: "08",
    icon: RefreshCw,
    title: "Backup & Disaster Recovery",
    description:
      "Create resilient backup and recovery strategies to protect critical workloads and help your business respond to infrastructure disruptions.",
  },
  {
    number: "09",
    icon: Layers3,
    title: "Monitoring & Optimization",
    description:
      "Gain visibility across your infrastructure with monitoring, performance analysis, resource optimization, and continuous operational improvements.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Our Services
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Hybrid infrastructure services for{" "}
            <span className="text-brand-gradient">
              connected businesses.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            From architecture and integration to security, automation, and
            ongoing optimization, we help you build and manage an infrastructure
            where cloud and on-premise systems work together seamlessly.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="premium-card group relative min-h-[320px] overflow-hidden p-6 md:p-7"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 select-none text-5xl font-semibold tracking-[-0.05em] text-[var(--border)] transition-all duration-500 group-hover:text-[var(--brand-pink-light)]/50">
                  {service.number}
                </div>

                {/* Decorative corner */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-pink)]/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="max-w-[85%] text-xl font-semibold leading-snug text-[var(--text-primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[var(--border)] pt-4 md:left-7 md:right-7">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)] transition-transform duration-300 group-hover:scale-125" />
                    Hybrid infrastructure
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

        {/* BOTTOM FEATURE */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] md:mt-16">
          <div className="grid md:grid-cols-[1fr_auto] md:items-center">
            <div className="p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                One Connected Foundation
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
                Cloud flexibility with on-premise control.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                We help you create the right balance between flexibility,
                security, performance, and control across your entire
                infrastructure.
              </p>
            </div>

            <div className="hidden px-9 md:block">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Network size={24} />
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