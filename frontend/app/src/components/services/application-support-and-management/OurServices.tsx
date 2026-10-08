"use client";

import {
  Activity,
  AlertCircle,
  BarChart3,
  CheckCircle2,
  Database,
  Gauge,
  Headphones,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Application Support",
    description:
      "Ongoing technical support for business applications, including issue investigation, troubleshooting, and resolution.",
  },
  {
    icon: Activity,
    title: "Application Monitoring",
    description:
      "Continuous monitoring of application health, availability, performance, and critical system activity.",
  },
  {
    icon: AlertCircle,
    title: "Incident Management",
    description:
      "Structured handling of application incidents to identify problems, manage impact, and restore normal operations.",
  },
  {
    icon: Wrench,
    title: "Application Maintenance",
    description:
      "Regular maintenance, fixes, updates, and technical improvements to keep applications stable and reliable.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Support",
    description:
      "Support for application security requirements, updates, access controls, and ongoing security improvements.",
  },
  {
    icon: Gauge,
    title: "Performance Management",
    description:
      "Identify performance issues and optimize applications to improve responsiveness, stability, and resource usage.",
  },
  {
    icon: Database,
    title: "Database Support",
    description:
      "Database monitoring, troubleshooting, maintenance, and performance support for application environments.",
  },
  {
    icon: Settings,
    title: "Application Upgrades",
    description:
      "Plan and manage application upgrades, version changes, patches, and technical updates with minimal disruption.",
  },
  {
    icon: BarChart3,
    title: "Application Reporting",
    description:
      "Clear reporting on incidents, application performance, support activity, and areas requiring attention.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Our Services
          </div>

          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.7rem]">
            Our Application Support &amp;
            <span className="text-brand-gradient">
              {" "}
              Management Services
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="premium-card group relative overflow-hidden p-6 sm:p-7"
              >
                {/* Hover Background */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--surface-pink)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                      <Icon size={21} />
                    </div>

                    <span className="text-sm font-semibold text-[var(--text-muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold leading-tight text-[var(--text-primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[var(--brand-pink)]">
                    <CheckCircle2 size={15} />
                    <span>Application support</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
              <Headphones size={20} />
            </div>

            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Reliable support throughout the application lifecycle.
              </h3>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                From day-to-day support to ongoing maintenance and
                improvements, we help keep your applications dependable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}