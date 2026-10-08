"use client";

import {
  Accessibility,
  Bug,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Gauge,
  MonitorCheck,
  SearchCheck,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Functional Testing",
    description:
      "Verify that every feature behaves according to the defined requirements, business rules, and expected user workflows.",
  },
  {
    icon: SearchCheck,
    title: "Exploratory Testing",
    description:
      "Go beyond predefined test cases by exploring the application to discover unexpected behaviour, hidden defects, and unusual scenarios.",
  },
  {
    icon: Bug,
    title: "Regression Testing",
    description:
      "Re-test existing functionality after updates, fixes, and new releases to make sure previously working features continue to work correctly.",
  },
  {
    icon: Eye,
    title: "Usability Testing",
    description:
      "Evaluate the application from a real-user perspective to identify confusing navigation, unclear interactions, and usability problems.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Testing",
    description:
      "Test applications across relevant browsers, devices, operating systems, and screen sizes to identify compatibility issues.",
  },
  {
    icon: MonitorCheck,
    title: "UI & Visual Testing",
    description:
      "Review interfaces for layout problems, inconsistent elements, broken interactions, visual defects, and responsive behaviour.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Testing",
    description:
      "Identify accessibility issues that may prevent users with different abilities from effectively navigating and using your application.",
  },
  {
    icon: Gauge,
    title: "User Acceptance Testing",
    description:
      "Validate business workflows and user scenarios to help ensure the product is ready for actual users and business operations.",
  },
  {
    icon: CheckCircle2,
    title: "Release & Quality Validation",
    description:
      "Perform final quality checks before release to identify critical issues and provide greater confidence in production readiness.",
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

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Manual Testing Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            We provide structured and exploratory manual testing services
            that help identify functional defects, usability issues,
            compatibility problems, and real-world scenarios that automated
            testing may not fully cover.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-xs font-semibold tracking-[0.12em] text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-pink-soft)] group-hover:text-[var(--brand-pink)]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="mt-6 max-w-[85%] text-lg font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                {/* Bottom Indicator */}
                <div className="mt-6 h-px w-10 bg-[var(--border-dark)] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--brand-pink)]" />
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-pink)]">
                Human Quality Assurance
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                Test the software the way your users will.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] md:text-base">
                From individual features to complete user journeys, we
                combine structured test execution with human observation to
                uncover issues before they reach your customers.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <CheckCircle2 className="h-5 w-5 text-[var(--brand-pink)]" />
              Quality before release
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}