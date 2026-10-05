"use client";

import {
  ArrowUpRight,
  CloudCog,
  Database,
  GitBranch,
  Layers3,
  Network,
  RefreshCw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Network,
    title: "Application Integration",
    description:
      "Connect your business applications so information can move seamlessly between CRM, ERP, finance, HR, operations, and other critical systems.",
  },
  {
    number: "02",
    icon: Database,
    title: "Data Integration",
    description:
      "Create reliable data flows between databases, applications, platforms, and external sources while maintaining consistency and accuracy.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and system interactions to reduce manual work, improve efficiency, and accelerate operations.",
  },
  {
    number: "04",
    icon: GitBranch,
    title: "API Integration",
    description:
      "Design and implement secure API connections that allow applications and services to communicate reliably across your technology ecosystem.",
  },
  {
    number: "05",
    icon: CloudCog,
    title: "Cloud Integration",
    description:
      "Connect cloud applications and services with your existing infrastructure to create a unified and flexible technology environment.",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "System Integration",
    description:
      "Bring disconnected systems together through structured integration architecture that improves visibility, communication, and operational continuity.",
  },
  {
    number: "07",
    icon: Layers3,
    title: "Enterprise Platform Integration",
    description:
      "Integrate large-scale enterprise platforms and business systems through scalable architecture designed around complex organizational requirements.",
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Secure Integration",
    description:
      "Protect integrations with authentication, authorization, secure data exchange, access controls, and security practices across every connection.",
  },
  {
    number: "09",
    icon: Zap,
    title: "Real-Time Integration",
    description:
      "Enable near real-time data synchronization and event-driven workflows so critical information reaches the right systems when it is needed.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[var(--brand-blue-soft)] opacity-60 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-140px] h-[380px] w-[380px] rounded-full bg-[var(--brand-pink-soft)] opacity-60 blur-3xl" />
      </div>

      <div className="container-premium relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Integration services for a{" "}
            <span className="text-brand-gradient">
              connected enterprise.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            From application and data integration to APIs, automation, cloud
            connectivity, and real-time workflows, we help businesses create
            a technology ecosystem where systems communicate and work
            together efficiently.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="premium-card group relative min-h-[330px] overflow-hidden p-7"
              >
                {/* Hover background */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--brand-pink-soft)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Decorative number */}
                <span className="pointer-events-none absolute right-6 top-5 text-6xl font-bold text-[var(--surface-soft)] transition-colors duration-300 group-hover:text-[var(--brand-pink-soft)]">
                  {service.number}
                </span>

                <div className="relative flex h-full flex-col">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-pink-soft)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--text-muted)]">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto pt-7">
                    <div className="flex items-center justify-between border-t border-[var(--border)] pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        Integration
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--brand-blue)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom feature */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-7 md:mt-12 md:p-9">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Network className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--brand-pink)]">
                  Connected Technology
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)] md:text-xl">
                  One integration strategy for your entire technology stack.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  Connect systems, automate workflows, synchronize data, and
                  create a more intelligent digital ecosystem without adding
                  unnecessary complexity.
                </p>
              </div>
            </div>

            {/* Capability pills */}
            <div className="flex shrink-0 flex-wrap gap-2">
              {["Connect", "Automate", "Synchronize", "Scale"].map((item) => (
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