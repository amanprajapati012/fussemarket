"use client";

import {
  ArrowUpRight,
  Database,
  HardDrive,
  Network,
  RefreshCw,
  Server,
  Settings2,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Server,
    title: "Server Infrastructure",
    description:
      "Plan and deploy reliable physical or virtual server environments designed around your applications, workloads, performance requirements, and business operations.",
  },
  {
    number: "02",
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Design secure and high-performance LAN, WAN, routing, switching, and connectivity environments that keep your systems and teams reliably connected.",
  },
  {
    number: "03",
    icon: Database,
    title: "Storage & Data Infrastructure",
    description:
      "Build dependable storage environments for critical business data with the right combination of capacity, performance, redundancy, and accessibility.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Infrastructure Security",
    description:
      "Strengthen your infrastructure with firewalls, access controls, network segmentation, secure configurations, monitoring, and layered security practices.",
  },
  {
    number: "05",
    icon: HardDrive,
    title: "Backup & Recovery",
    description:
      "Implement structured backup and recovery solutions to protect critical applications and data while improving your ability to respond to unexpected failures.",
  },
  {
    number: "06",
    icon: TerminalSquare,
    title: "Virtualization Solutions",
    description:
      "Optimize physical resources through virtualization and centralized workload management for improved flexibility, utilization, and infrastructure efficiency.",
  },
  {
    number: "07",
    icon: Workflow,
    title: "Infrastructure Automation",
    description:
      "Automate repetitive infrastructure tasks, configuration workflows, deployments, and operational processes to improve consistency and reduce manual effort.",
  },
  {
    number: "08",
    icon: RefreshCw,
    title: "Infrastructure Modernization",
    description:
      "Upgrade legacy environments through a structured modernization approach while protecting existing workloads and minimizing disruption to business operations.",
  },
  {
    number: "09",
    icon: Settings2,
    title: "Monitoring & Management",
    description:
      "Monitor servers, networks, storage, applications, and system health with proactive management designed to improve reliability and operational visibility.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Our Services
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            On-premises infrastructure services for{" "}
            <span className="text-brand-gradient">
              dependable operations.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            From servers and networking to security, storage, backup, and
            modernization, we provide the infrastructure capabilities needed
            to keep your critical business systems secure and reliable.
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

                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--brand-pink)]/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="max-w-[84%] text-xl font-semibold leading-snug text-[var(--text-primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[var(--border)] pt-4 md:left-7 md:right-7">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)] transition-transform duration-300 group-hover:scale-125" />
                    Infrastructure service
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

        {/* FEATURE STRIP */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] md:mt-16">
          <div className="grid md:grid-cols-[auto_1fr_auto] md:items-center">
            {/* Icon */}
            <div className="hidden p-7 md:block">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Server size={22} />
              </div>
            </div>

            {/* Content */}
            <div className="p-7 md:py-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                Built for Control
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
                A reliable infrastructure foundation for critical systems.
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
                Keep your infrastructure under control while creating the
                reliability, security, and performance your business depends
                on every day.
              </p>
            </div>

            {/* Status */}
            <div className="hidden px-8 md:block">
              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5">
                <span className="h-2 w-2 animate-soft-pulse rounded-full bg-[var(--brand-pink)]" />

                <span className="text-xs font-semibold text-[var(--text-secondary)]">
                  Enterprise Ready
                </span>
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