"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gauge,
  GitBranch,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Code2,
    title: "Automation Built Around Your Application",
    description:
      "We design automation frameworks around your application, technology stack, workflows, and testing requirements instead of forcing a one-size-fits-all approach.",
  },
  {
    icon: TestTube2,
    title: "Better Test Coverage",
    description:
      "We automate critical user journeys, regression scenarios, APIs, and important business workflows so your team can validate more with every release.",
  },
  {
    icon: GitBranch,
    title: "Ready for CI/CD",
    description:
      "Our automation frameworks can be integrated into development and deployment pipelines to provide fast feedback whenever code changes are introduced.",
  },
  {
    icon: Gauge,
    title: "Faster Feedback",
    description:
      "Automated tests reduce repetitive manual validation and help development teams identify problems earlier in the software delivery cycle.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Test Results",
    description:
      "We focus on stable, maintainable automation that reduces unnecessary test failures and gives teams more confidence in the results they receive.",
  },
  {
    icon: CheckCircle2,
    title: "Maintainable Test Frameworks",
    description:
      "As your application changes, your automation should be easy to update. We structure frameworks for long-term maintenance and future test expansion.",
  },
];

const focusAreas = [
  "Critical workflow automation",
  "Regression test automation",
  "API & integration validation",
  "CI/CD test integration",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.8rem]">
            Automation that improves
            <span className="text-brand-gradient"> software quality.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Test automation should do more than execute test cases. We build
            practical automation solutions that improve coverage, speed up
            feedback, support continuous delivery, and make software releases
            more predictable.
          </p>
        </div>

        {/* Main Feature */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="premium-card relative overflow-hidden p-7 sm:p-9 lg:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--surface-pink)] blur-3xl" />

            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <TestTube2 size={22} />
              </div>

              <h3 className="mt-7 max-w-lg text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl">
                We automate the tests that matter most to your business.
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
                Not every test needs to be automated. We identify the
                workflows, regression scenarios, APIs, and repetitive
                validation tasks where automation can provide the most value.
                This keeps your test suite useful, maintainable, and aligned
                with your development process.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--brand-pink)]"
                    />

                    <span className="text-sm font-medium leading-5 text-[var(--text-primary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics / Focus */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            <div className="premium-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Gauge size={20} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                  Faster Validation
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Run repeatable tests quickly and get useful feedback without
                  repeating the same manual checks for every release.
                </p>
              </div>
            </div>

            <div className="premium-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <ShieldCheck size={20} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                  Release Confidence
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Validate important application areas consistently before
                  changes reach production.
                </p>
              </div>
            </div>

            <div className="premium-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <GitBranch size={20} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                  Continuous Feedback
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Connect automated testing with development and CI/CD workflows
                  for faster issue detection.
                </p>
              </div>
            </div>

            <div className="premium-card flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Code2 size={20} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                  Built to Scale
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Build a test foundation that can grow as your application,
                  features, and release requirements evolve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="premium-card group p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--brand-blue)] transition-colors duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <Icon size={20} />
                  </div>

                  <span className="text-sm font-semibold text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="dark-section relative mt-16 overflow-hidden rounded-[var(--radius-xl)] px-6 py-10 sm:px-10 md:mt-20 md:py-12 lg:px-14">
          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
                Test Automation
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Ready to make testing faster and more reliable?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                Let&apos;s identify the right automation opportunities for your
                application and build a testing approach that supports your
                release process.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-brand shrink-0 self-start lg:self-center"
            >
              Discuss Your Testing Needs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}