"use client";

import {
  Activity,
  AppWindow,
  Braces,
  Bug,
  CheckCircle2,
  Gauge,
  GitBranch,
  Layers3,
  MonitorCheck,
  ShieldCheck,
  TestTube2,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: MonitorCheck,
    title: "UI Test Automation",
    description:
      "Automate critical user journeys and application workflows to validate web interfaces consistently across releases.",
  },
  {
    icon: Braces,
    title: "API Test Automation",
    description:
      "Automate API validation to verify requests, responses, business logic, data handling, and service reliability.",
  },
  {
    icon: GitBranch,
    title: "Regression Test Automation",
    description:
      "Build repeatable regression suites that quickly validate existing functionality whenever new changes are introduced.",
  },
  {
    icon: Workflow,
    title: "CI/CD Test Automation",
    description:
      "Integrate automated tests into development and deployment pipelines to provide fast feedback on every code change.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description:
      "Automate performance validation to understand application behaviour under expected and high-load conditions.",
  },
  {
    icon: Activity,
    title: "Integration Testing",
    description:
      "Validate communication between applications, services, APIs, databases, and external systems through automated tests.",
  },
  {
    icon: AppWindow,
    title: "Cross-Browser Testing",
    description:
      "Automate browser-based testing across supported environments to identify compatibility issues before release.",
  },
  {
    icon: ShieldCheck,
    title: "Security Test Automation",
    description:
      "Add automated security checks to testing workflows to identify common risks and validate security-related requirements.",
  },
  {
    icon: Layers3,
    title: "Test Framework Development",
    description:
      "Design scalable and maintainable automation frameworks that support your application, testing strategy, and future growth.",
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Our Services
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.8rem]">
            Our Automation Testing
            <span className="text-brand-gradient"> Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            We build practical test automation solutions that improve test
            coverage, reduce repetitive validation, accelerate feedback, and
            help development teams release software with greater confidence.
          </p>
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
                {/* Hover Accent */}
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--surface-pink)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                      <Icon size={21} />
                    </div>

                    <span className="text-sm font-semibold text-[var(--text-muted)]">
                      0{index + 1}
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
                    <span>Automation focused</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
              <TestTube2 size={20} />
            </div>

            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Automate the right tests. Release with confidence.
              </h3>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                We help you identify the areas where automation can deliver
                the greatest testing value.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]">
            <Bug size={17} className="text-[var(--brand-pink)]" />
            Better defect detection
          </div>
        </div>
      </div>
    </section>
  );
}