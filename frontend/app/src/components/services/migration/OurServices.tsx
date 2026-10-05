"use client";

import {
  ArrowUpRight,
  Cloud,
  Database,
  FileOutput,
  Layers3,
  RefreshCw,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Move applications, workloads, and infrastructure to modern cloud environments with a structured strategy focused on security, performance, and continuity.",
  },
  {
    number: "02",
    icon: Database,
    title: "Data Migration",
    description:
      "Transfer critical business data between systems, platforms, or environments while maintaining accuracy, consistency, security, and accessibility.",
  },
 
 {
  number: "03",
  icon: Layers3,
  title: "Application Migration",
  description:
    "Migrate business applications to new environments or platforms while managing dependencies, compatibility, performance, and operational requirements.",
},
{
  number: "04",
  icon: FileOutput,
  title: "Platform Migration",
  description:
    "Transition workloads and applications from one technology platform to another with careful planning, testing, and controlled execution.",
},
  {
    number: "05",
    icon: Server,
    title: "Infrastructure Migration",
    description:
      "Modernize and move servers, workloads, infrastructure components, and supporting systems into a more suitable operating environment.",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "System Consolidation",
    description:
      "Bring fragmented systems and duplicated workloads together into a more streamlined environment that is easier to manage and maintain.",
  },
  {
    number: "07",
    icon: FileOutput,
    title: "Database Migration",
    description:
      "Migrate databases between platforms, versions, or environments while focusing on data integrity, compatibility, security, and application connectivity.",
  },
  {
    number: "08",
    icon: Settings2,
    title: "Legacy System Modernization",
    description:
      "Transform outdated systems and technologies into modern environments while reducing unnecessary disruption to existing business operations.",
  },
  {
    number: "09",
    icon: ShieldCheck,
    title: "Post-Migration Support",
    description:
      "Validate the migrated environment, resolve issues, optimize performance, and provide ongoing support after the migration is complete.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-[-180px] top-24 h-96 w-96 rounded-full bg-[var(--brand-pink)]/5 blur-3xl" />

      <div className="pointer-events-none absolute right-[-180px] bottom-20 h-96 w-96 rounded-full bg-[var(--brand-blue)]/5 blur-3xl" />

      <div className="container-premium relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Migration services built for{" "}
            <span className="text-brand-gradient">
              complex environments.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            From data and applications to infrastructure and legacy systems,
            we provide end-to-end migration services designed to reduce risk,
            protect critical information, and keep your business moving.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="premium-card group relative overflow-hidden p-7 sm:p-8"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-bold tracking-[0.16em] text-[var(--text-muted)]">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-semibold leading-snug text-[var(--text-primary)] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    Migration Service
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-muted)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                    />
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-[var(--gradient-brand)] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom Feature */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)]">
          <div className="relative p-7 sm:p-9 md:p-10">
            {/* Decorative Grid */}
            <div className="dot-grid pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-40" />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                  End-to-End Migration
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  One structured approach for every migration challenge.
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Whether you are moving data, applications, infrastructure,
                  or entire business systems, our migration approach combines
                  planning, security, validation, and optimization from start
                  to finish.
                </p>
              </div>

              {/* Capability Indicators */}
              <div className="grid shrink-0 grid-cols-2 gap-3 sm:grid-cols-4 md:w-[390px]">
                {[
                  "Plan",
                  "Protect",
                  "Migrate",
                  "Validate",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center shadow-[var(--shadow-sm)]"
                  >
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-pink)] text-xs font-bold text-[var(--brand-pink)]">
                      0{index + 1}
                    </div>

                    <p className="mt-2 text-xs font-semibold text-[var(--text-secondary)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}