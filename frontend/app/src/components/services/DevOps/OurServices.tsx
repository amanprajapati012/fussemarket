"use client";

import {
  Activity,
  ArrowUpRight,
  CloudCog,
  Container,
  Database,
  GitBranch,
  Layers3,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: GitBranch,
    title: "CI/CD Pipeline Automation",
    description:
      "Design and automate continuous integration and delivery pipelines to build, test, and deploy applications faster and more consistently.",
  },
  {
    number: "02",
    icon: CloudCog,
    title: "Cloud DevOps",
    description:
      "Build and manage cloud environments with automated provisioning, deployment workflows, scalable infrastructure, and efficient operations.",
  },
  {
    number: "03",
    icon: ServerCog,
    title: "Infrastructure as Code",
    description:
      "Manage infrastructure through version-controlled configurations for repeatable, consistent, and easier-to-maintain environments.",
  },
  {
    number: "04",
    icon: Container,
    title: "Containerization & Kubernetes",
    description:
      "Containerize applications and orchestrate workloads with modern container platforms for portability, scalability, and reliable deployment.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "DevSecOps",
    description:
      "Integrate security into development and deployment workflows with automated checks, secure configurations, and continuous risk management.",
  },
  {
    number: "06",
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Improve visibility across applications and infrastructure through monitoring, logging, alerting, and actionable operational insights.",
  },
  {
    number: "07",
    icon: Workflow,
    title: "DevOps Automation",
    description:
      "Automate repetitive development and operational processes to reduce manual effort, improve consistency, and accelerate delivery.",
  },
  {
    number: "08",
    icon: RefreshCw,
    title: "Release & Deployment Management",
    description:
      "Create controlled release workflows that reduce deployment risk and make application rollouts predictable and repeatable.",
  },
  {
    number: "09",
    icon: Database,
    title: "Infrastructure Reliability",
    description:
      "Strengthen infrastructure reliability with scalable architecture, backups, recovery strategies, health checks, and proactive management.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            DevOps services for{" "}
            <span className="text-brand-gradient">
              faster, reliable delivery.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            From CI/CD automation and cloud infrastructure to security,
            containers, monitoring, and reliability, we build DevOps
            capabilities that help your teams deliver and operate software
            with greater speed and confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="premium-card group relative overflow-hidden p-6 sm:p-7"
              >
                {/* Background Number */}
                <span className="pointer-events-none absolute -right-1 -top-4 text-[72px] font-bold leading-none text-[var(--surface-blue)] transition-all duration-500 group-hover:text-[var(--brand-pink-soft)]">
                  {service.number}
                </span>

                {/* Top Row */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--brand-pink)] group-hover:text-[var(--surface)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                    DevOps {service.number}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-snug text-[var(--text-primary)] sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-px w-8 bg-[var(--border-dark)] transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--brand-pink)]" />

                  <span className="text-xs font-semibold text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    Explore capability
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Feature */}
        <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)]">
          <div className="relative p-7 sm:p-9 md:p-10">
            <div className="dot-grid absolute inset-0 opacity-30" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Text */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Layers3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                    End-to-End DevOps
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                    One connected approach from code to production.
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                    Connect development, infrastructure, security, deployment,
                    and monitoring into a continuous delivery ecosystem built
                    around your business and technology stack.
                  </p>
                </div>
              </div>

              {/* Capability Flow */}
              <div className="flex flex-wrap items-center gap-2">
                {["Code", "Build", "Test", "Deploy", "Monitor"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-2 text-xs font-semibold text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--brand-pink)] hover:text-[var(--brand-pink)]">
                        {item}
                      </span>

                      {index < 4 && (
                        <span className="text-[var(--text-muted)]">
                          →
                        </span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}