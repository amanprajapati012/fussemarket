"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  HardDrive,
  Network,
  Server,
  ShieldCheck,
  Settings2,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Infrastructure Assessment",
    description:
      "We assess your existing servers, network, storage, applications, and infrastructure requirements to understand what is working and where improvements are needed.",
    icon: Server,
  },
  {
    number: "02",
    title: "Requirements & Planning",
    description:
      "We define infrastructure requirements, performance targets, capacity needs, security expectations, and future growth considerations.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Infrastructure Architecture",
    description:
      "Our team designs a structured infrastructure architecture covering servers, networking, storage, security, redundancy, and system connectivity.",
    icon: Database,
  },
  {
    number: "04",
    title: "Network & Security Design",
    description:
      "We plan secure network architecture, access controls, segmentation, firewalls, and protection layers around your critical systems.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Server & Storage Setup",
    description:
      "We configure physical or virtual servers, storage systems, workloads, and supporting infrastructure according to the approved architecture.",
    icon: HardDrive,
  },
  {
    number: "06",
    title: "Infrastructure Integration",
    description:
      "Servers, networks, storage, applications, and business systems are connected into a reliable infrastructure environment.",
    icon: Network,
  },
  {
    number: "07",
    title: "Testing & Validation",
    description:
      "We validate performance, connectivity, security, redundancy, backups, and system reliability before the infrastructure goes fully live.",
    icon: CheckCircle2,
  },
  {
    number: "08",
    title: "Deployment & Optimization",
    description:
      "The infrastructure is deployed with minimal disruption, followed by performance tuning and optimization based on real workloads.",
    icon: Workflow,
  },
  {
    number: "09",
    title: "Monitoring & Management",
    description:
      "After deployment, we monitor critical infrastructure components and continuously improve reliability, performance, security, and capacity.",
    icon: Settings2,
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            A structured process for{" "}
            <span className="text-brand-gradient">
              reliable infrastructure.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            From infrastructure assessment to deployment and ongoing
            management, we follow a clear process that keeps your systems
            secure, reliable, and aligned with your business requirements.
          </p>
        </div>

        {/* Process Track */}
        <div className="relative mt-14">
          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[46px] hidden h-px bg-[var(--border)] lg:block" />

          {/* Horizontal Scroll */}
          <div className="scrollbar-hide flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative w-[320px] shrink-0 snap-start sm:w-[350px] md:w-[380px]"
                >
                  {/* Step Marker */}
                  <div className="relative z-10 mb-6 flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-pink)] shadow-[var(--shadow-sm)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--brand-pink)]/30 group-hover:shadow-[var(--shadow-brand)]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="ml-auto rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-bold tracking-[0.15em] text-[var(--text-muted)]">
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="premium-card h-full min-h-[300px] p-7 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[var(--brand-pink)]/30 group-hover:shadow-[var(--shadow-lg)] sm:p-8">
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                            Step {step.number}
                          </p>

                          <h3 className="mt-3 text-xl font-semibold leading-snug text-[var(--text-primary)] sm:text-2xl">
                            {step.title}
                          </h3>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      <div className="my-6 h-px bg-[var(--border)]" />

                      <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-[15px]">
                        {step.description}
                      </p>

                      <div className="mt-auto flex items-center gap-2 pt-7 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--brand-blue)]">
                        <span>Infrastructure Focus</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Feature */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)]">
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                Infrastructure Approach
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                Built for control. Designed for reliable operations.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                A well-planned on-premises infrastructure gives your business
                greater control over critical systems while creating a stable
                foundation for future growth.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--brand-blue)] shadow-[var(--shadow-sm)]">
                <Server size={19} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Infrastructure
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                  Enterprise Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}