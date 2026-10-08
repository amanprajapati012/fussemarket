"use client";

import {
  Bug,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Gauge,
  ListChecks,
  SearchCheck,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

const process = [
  {
    icon: FileSearch,
    step: "01",
    title: "Requirement Analysis",
    description:
      "We understand the product requirements, business rules, user workflows, acceptance criteria, and expected behaviour before testing begins.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Test Planning",
    description:
      "We define the testing scope, environments, devices, browsers, priorities, test coverage, and approach based on the product and project requirements.",
  },
  {
    icon: ListChecks,
    step: "03",
    title: "Test Case Design",
    description:
      "We prepare detailed test scenarios and cases covering normal workflows, negative scenarios, edge cases, validation rules, and important user journeys.",
  },
  {
    icon: TestTube2,
    step: "04",
    title: "Test Environment Setup",
    description:
      "We prepare the required builds, test data, devices, browsers, accounts, environments, and configurations needed for reliable test execution.",
  },
  {
    icon: SearchCheck,
    step: "05",
    title: "Manual Test Execution",
    description:
      "Our testers execute planned test cases while also exploring the application to identify unexpected behaviour and issues outside predefined scenarios.",
  },
  {
    icon: Bug,
    step: "06",
    title: "Defect Identification & Reporting",
    description:
      "Issues are documented with clear reproduction steps, expected and actual results, severity, priority, screenshots, and other relevant evidence.",
  },
  {
    icon: CheckCircle2,
    step: "07",
    title: "Fix Verification",
    description:
      "Once defects are resolved, we retest the affected functionality to verify that the reported issue has been properly fixed.",
  },
  {
    icon: Gauge,
    step: "08",
    title: "Regression Testing",
    description:
      "We test related and existing functionality after fixes or changes to make sure new updates have not introduced additional problems.",
  },
  {
    icon: ShieldCheck,
    step: "09",
    title: "Final Quality Validation",
    description:
      "We perform final checks against the agreed requirements and quality criteria to help determine whether the product is ready for release.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Development Process
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Manual Testing Process
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured QA process that combines planned test coverage with
            exploratory testing to identify defects, validate fixes, and
            improve confidence before every release.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-14">
          <div className="flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory [scrollbar-width:thin]">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="premium-card group relative w-[320px] shrink-0 snap-start p-6 sm:w-[350px] md:w-[380px] md:p-7"
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.16em] text-[var(--brand-pink)]">
                      STEP {item.step}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-pink-soft)] group-hover:text-[var(--brand-pink)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-semibold leading-tight text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                    Manual quality assurance
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-6 h-0.5 w-10 bg-[var(--brand-pink)] transition-all duration-300 group-hover:w-20 md:left-7" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-soft)] p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
                  Test thoroughly. Fix confidently. Release safely.
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
                  We combine structured test coverage, exploratory testing,
                  defect verification, and regression testing to help your
                  software meet functional and real-world user expectations.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <ShieldCheck className="h-5 w-5 text-[var(--brand-pink)]" />
              Release-ready quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}