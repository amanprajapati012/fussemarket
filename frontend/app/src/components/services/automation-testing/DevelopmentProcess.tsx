"use client";

import {
  Activity,
  CheckCircle2,
  Code2,
  GitBranch,
  Gauge,
  Layers3,
  SearchCheck,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

const processSteps = [
  {
    icon: SearchCheck,
    title: "Testing Assessment",
    description:
      "We review your application, existing testing practices, release process, and automation requirements to identify the right opportunities for automation.",
  },
  {
    icon: TestTube2,
    title: "Automation Strategy",
    description:
      "We define the automation scope, testing priorities, environments, tools, coverage goals, and approach based on your application and delivery process.",
  },
  {
    icon: Layers3,
    title: "Framework Design",
    description:
      "We design a scalable test automation framework with a structure that supports reusable components, maintainability, reporting, and future expansion.",
  },
  {
    icon: Code2,
    title: "Test Automation Development",
    description:
      "Our team develops automated tests for critical workflows, regression scenarios, APIs, integrations, and other high-value testing areas.",
  },
  {
    icon: ShieldCheck,
    title: "Test Validation",
    description:
      "We validate automated tests against expected application behaviour and refine test cases to improve reliability and reduce unnecessary failures.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description:
      "We integrate automated testing into your development and deployment pipelines so tests can run automatically as part of the release workflow.",
  },
  {
    icon: Activity,
    title: "Automated Test Execution",
    description:
      "Automated suites are executed across the required environments to identify functional, integration, regression, and compatibility issues.",
  },
  {
    icon: Gauge,
    title: "Results & Reporting",
    description:
      "We review test results, failures, execution trends, and coverage to provide clear visibility into application quality and release readiness.",
  },
  {
    icon: CheckCircle2,
    title: "Optimize & Scale",
    description:
      "We continuously improve test coverage, framework stability, execution speed, and maintainability as your application and testing requirements evolve.",
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

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.8rem]">
            Our Automation Testing
            <span className="text-brand-gradient"> Process</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured approach that takes test automation from assessment
            and framework design to implementation, CI/CD integration, and
            continuous improvement.
          </p>
        </div>

        {/* Process Cards */}
        <div className="relative mt-14">
          <div className="flex gap-5 overflow-x-auto pb-7 pt-2 snap-x snap-mandatory scrollbar-thin">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="premium-card group relative w-[320px] shrink-0 snap-start overflow-hidden p-6 sm:w-[350px] md:w-[380px] md:p-7"
                >
                  {/* Background Number */}
                  <span className="pointer-events-none absolute -right-2 -top-5 text-8xl font-bold text-[var(--surface-soft)] transition-colors duration-300 group-hover:text-[var(--surface-pink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                        <Icon size={21} />
                      </div>

                      <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">
                        Step {index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold leading-tight text-[var(--text-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                      {step.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[var(--brand-pink)]">
                      <CheckCircle2 size={15} />
                      <span>Automation lifecycle</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Scroll Hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-medium text-[var(--text-muted)]">
            <span className="h-px w-8 bg-[var(--border)]" />
            Scroll to explore the process
            <span className="h-px w-8 bg-[var(--border)]" />
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 text-center sm:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
            <TestTube2 size={21} />
          </div>

          <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
            Automate. Validate. Improve. Release.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
            We build automation into the software delivery process so your
            team can test faster, identify issues earlier, and maintain
            confidence as the product continues to evolve.
          </p>
        </div>
      </div>
    </section>
  );
}