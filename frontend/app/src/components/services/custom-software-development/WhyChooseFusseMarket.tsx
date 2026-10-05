
"use client";

import {
  Blocks,
  Target,
  Layers3,
  ShieldCheck,
  Rocket,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: Blocks,
    title: "Modular Development",
    description:
      "We build your software in flexible modules, making it easier to add new features and expand the system without rebuilding everything from scratch.",
  },
  {
    icon: Target,
    title: "Built Around Your Workflow",
    description:
      "Your business has its own way of working. We shape the features, screens, and processes around your team instead of forcing you into a ready-made system.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "We plan the foundation with future growth in mind, so your software can handle more users, data, and features as your business moves forward.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "From authentication and access control to data handling and API security, we keep reliability and security in mind throughout the development process.",
  },
  {
    icon: Rocket,
    title: "Faster Delivery",
    description:
      "Clear development milestones and focused iterations keep the project moving, helping you get a usable product in your hands sooner.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "You work with a team that understands your project, stays accessible throughout development, and continues to help as your software evolves.",
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-24 lg:py-28">
      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute left-[5%] top-[12%] h-36 w-36 opacity-25" />

        <div className="absolute right-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-[var(--surface-pink)] opacity-60 blur-3xl" />

        <div className="absolute bottom-[-160px] left-[20%] h-[360px] w-[360px] rounded-full bg-[var(--surface-blue)] opacity-70 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-bold leading-[1.08] tracking-[-0.04em] text-[var(--text-primary)]">
            Technology built around{" "}
            <span className="text-brand-gradient">
              your workflow.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
            Good software should make your business easier to run. We focus
            on understanding the way you work first, then build technology
            that supports it.
          </p>
        </div>

        {/* =====================================================
            REASONS GRID
        ===================================================== */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="premium-card group relative overflow-hidden p-7 sm:p-8"
              >
                {/* Card Number */}
                <div className="absolute right-6 top-5 text-[11px] font-bold tracking-[0.15em] text-[var(--text-muted)] opacity-50">
                  0{index + 1}
                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--surface-pink)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--surface-pink)]">
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-[var(--brand-blue)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]"
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-[15px]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Arrow */}
                <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    Fusse Market
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
