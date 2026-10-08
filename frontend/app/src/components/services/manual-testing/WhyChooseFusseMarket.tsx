"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bug,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: SearchCheck,
    title: "Exploratory Testing",
    description:
      "Our testers go beyond predefined test cases and explore how your application behaves across different scenarios, workflows, and unexpected user actions.",
  },
  {
    icon: Users,
    title: "Real User Perspective",
    description:
      "We test software from the perspective of actual users to identify confusing flows, usability problems, and behaviour that may not appear in scripted tests.",
  },
  {
    icon: Bug,
    title: "Edge Case Detection",
    description:
      "We actively look for unusual conditions, unexpected inputs, boundary scenarios, and workflow combinations that can expose difficult-to-find defects.",
  },
  {
    icon: Eye,
    title: "Detailed Quality Review",
    description:
      "Our testing covers more than whether a feature works. We review functionality, usability, consistency, responsiveness, and the overall user experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Defect Reporting",
    description:
      "We document defects with clear reproduction steps, expected and actual behaviour, severity, and relevant evidence so your development team can act quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Before Release",
    description:
      "We help identify critical issues before they reach customers, reducing release risk and giving your team greater confidence in the software.",
  },
];

const checklist = [
  "Functional & exploratory testing",
  "Real-world user scenario testing",
  "Usability & experience validation",
  "Detailed defect documentation",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Quality testing with a{" "}
            <span className="text-brand-gradient">
              human perspective.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Automated tests are valuable, but software still needs human
            judgment. Our manual testing approach helps uncover the issues
            that appear when real people use your product in real-world
            situations.
          </p>
        </div>

        {/* Main Feature */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Feature Card */}
          <div className="premium-card relative overflow-hidden p-7 md:p-9 lg:p-10">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[var(--brand-pink-soft)] blur-3xl" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
                <Eye className="h-6 w-6" />
              </div>

              <h3 className="mt-7 max-w-xl text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
                We test beyond the expected path.
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                Real users do not always follow predefined workflows. They
                enter unexpected data, move between features in different
                ways, use different devices, and interact with software
                differently than development teams expect. Our testers
                actively explore these scenarios to uncover defects and
                usability issues before they affect your customers.
              </p>

              {/* Checklist */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-pink)]" />

                    <span className="text-sm font-medium leading-6 text-[var(--text-primary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Focus Card */}
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--gradient-dark)] p-7 text-white shadow-[var(--shadow-lg)] md:p-9">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--brand-pink)] opacity-20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink-light)]">
                Our Testing Focus
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
                Look closer. Test smarter. Release with confidence.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                We combine structured test execution with exploratory
                thinking to give your software a more complete quality
                review.
              </p>

              {/* Focus Blocks */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <SearchCheck className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Explore
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Go beyond scripted scenarios
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <Bug className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Detect
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Find hidden defects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <Users className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Validate
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Test from the user perspective
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <ShieldCheck className="h-5 w-5 text-[var(--brand-pink-light)]" />

                  <p className="mt-5 text-sm font-semibold text-white">
                    Protect
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Reduce release risk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">
                What We Bring
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                Manual testing that looks beyond functionality.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)]">
              We combine structured testing with human observation to find
              issues that can affect software quality and user experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="premium-card group p-6 md:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-soft)] group-hover:text-[var(--brand-pink)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--gradient-soft)] p-7 md:mt-20 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                Want to catch defects before your users do?
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] md:text-base">
                We can review your application, test real-world scenarios,
                and identify the issues that matter most to your users.
              </p>
            </div>

            <Link href="/contact" className="btn-brand shrink-0">
              Discuss Your Testing Needs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}