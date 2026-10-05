"use client";

import {
  ArrowUpRight,
  Cloud,
  CloudCog,
  Container,
  Database,
  Globe2,
  HardDrive,
  Network,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: CloudCog,
    title: "Cloud Architecture Design",
    description:
      "Design scalable cloud architectures around your workloads, applications, security requirements, performance goals, and operational needs.",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Cloud Setup & Deployment",
    description:
      "Set up complete cloud environments with networking, compute, storage, databases, access controls, and essential infrastructure configuration.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Cloud Security Management",
    description:
      "Strengthen your cloud environment with identity management, secure access policies, network protection, monitoring, and security best practices.",
  },
  {
    number: "04",
    icon: Database,
    title: "Cloud Cost Optimization",
    description:
      "Identify unnecessary infrastructure spending and optimize resources, workloads, and cloud usage for better efficiency and cost control.",
  },
  {
    number: "05",
    icon: Network,
    title: "Cloud Networking",
    description:
      "Build secure and reliable cloud networks with virtual networks, VPNs, private connectivity, traffic management, and performance-focused architecture.",
  },
  {
    number: "06",
    icon: Container,
    title: "Container & Kubernetes Management",
    description:
      "Deploy and manage containerized applications with Docker and Kubernetes for flexible, portable, and scalable application environments.",
  },
  {
    number: "07",
    icon: RefreshCw,
    title: "Cloud Disaster Recovery",
    description:
      "Prepare your business for unexpected disruptions with backup strategies, recovery planning, replication, and resilient cloud infrastructure.",
  },
  {
    number: "08",
    icon: HardDrive,
    title: "Cloud Compliance Management",
    description:
      "Establish infrastructure controls, monitoring, logging, and policy practices that support your organization's security and compliance requirements.",
  },
  {
    number: "09",
    icon: Globe2,
    title: "Managed Cloud Operations",
    description:
      "Keep your infrastructure reliable with ongoing monitoring, maintenance, performance optimization, incident support, and continuous improvements.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[var(--brand-pink)]/7 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[10%] h-[480px] w-[480px] rounded-full bg-[var(--brand-blue)]/8 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="section-eyebrow">
              Our Services
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[var(--text-primary)] sm:text-4xl md:text-5xl">
              Cloud infrastructure services built for
              <span className="text-brand-gradient">
                {" "}
                modern businesses.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-[15px] leading-7 text-[var(--text-secondary)] md:text-base">
              From cloud architecture and deployment to security, optimization,
              and ongoing operations, we help businesses build infrastructure
              that is secure, efficient, resilient, and ready to scale.
            </p>
          </div>
        </div>

        {/* Service Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="premium-card group relative min-h-[285px] overflow-hidden p-6 md:p-7"
              >
                {/* Hover Background */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[var(--brand-pink)]/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.12em] text-[var(--text-muted)]">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)] md:text-xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto flex items-center justify-between pt-7">
                    <div className="h-px w-12 bg-[var(--border-dark)] transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--brand-pink)]" />

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:text-[var(--brand-pink)]">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Feature */}
        <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)]">
          <div className="grid items-center gap-8 p-7 md:p-9 lg:grid-cols-[1fr_auto] lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-pink)] shadow-[var(--shadow-sm)]">
                  <Network size={19} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                  End-to-End Cloud Support
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-[var(--text-primary)] md:text-2xl">
                One cloud strategy. One reliable infrastructure foundation.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
                Whether you are starting your cloud journey, modernizing
                existing infrastructure, or looking for ongoing management,
                our services can work together around your business
                requirements.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
                <span className="h-px w-12 bg-[var(--border-dark)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--brand-blue)]" />
                <span className="h-px w-12 bg-[var(--border-dark)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Line */}
        <div className="mt-12">
          <div className="brand-line" />
        </div>
      </div>
    </section>
  );
}