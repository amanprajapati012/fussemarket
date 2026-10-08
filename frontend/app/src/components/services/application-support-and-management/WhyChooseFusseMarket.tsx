"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Proactive Application Monitoring",
    description:
      "We monitor application health and performance to identify issues early and reduce the impact of unexpected problems on your business.",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    description:
      "Our support team investigates issues, manages incidents, and works toward timely resolution to keep your applications available.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance",
    description:
      "We handle regular maintenance, updates, fixes, and technical improvements to keep applications stable as your business evolves.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Application Operations",
    description:
      "We focus on application stability, security, performance, and availability so your teams can depend on the systems they use every day.",
  },
  {
    icon: CheckCircle2,
    title: "Clear Issue Management",
    description:
      "From identifying the root cause to implementing and verifying a fix, we follow a structured approach to application issues.",
  },
  {
    icon: ArrowRight,
    title: "Continuous Improvement",
    description:
      "We identify practical improvements that can make your applications more reliable, efficient, and easier to manage over time.",
  },
];

const focusAreas = [
  "Proactive monitoring",
  "Incident management",
  "Application maintenance",
  "Performance management",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.7rem]">
            Application Management Built Around
            <span className="text-brand-gradient">
              {" "}
              Business Continuity
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Main Feature */}
          <div className="premium-card p-7 sm:p-9 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
              <Headphones size={22} />
            </div>

            <h3 className="mt-7 text-2xl font-medium leading-tight text-[var(--text-primary)] sm:text-3xl">
              Keep your applications working reliably.
            </h3>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
              We provide the support and technical expertise required to
              manage business-critical applications throughout their
              lifecycle. Our team helps identify issues, resolve incidents,
              maintain application performance, and handle ongoing technical
              requirements.
            </p>

            <div className="mt-8 space-y-4">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[var(--brand-pink)]"
                  />

                  <span className="text-sm leading-6 text-[var(--text-primary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="premium-card group p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <Icon size={20} />
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
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 border-t border-[var(--border)] pt-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-medium text-[var(--text-primary)]">
                Need dependable support for your applications?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Let&apos;s discuss your application environment and support
                requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-brand shrink-0 self-start sm:self-center"
            >
              Discuss Your Requirements
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}