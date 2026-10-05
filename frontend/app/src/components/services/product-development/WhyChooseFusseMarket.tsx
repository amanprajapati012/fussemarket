"use client";

import {
  ArrowUpRight,
  Blocks,
  CheckCircle2,
  FlaskConical,
  Layers3,
  Lightbulb,
  Rocket,
  Route,
  Users,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Product Strategy First",
    description:
      "We start by understanding the problem, users, business goals, and product vision before deciding what needs to be built.",
  },
  {
    number: "02",
    icon: Users,
    title: "Designed Around Users",
    description:
      "We create experiences around real user needs, keeping the product intuitive, useful, and easy to navigate across devices.",
  },
  {
    number: "03",
    icon: Blocks,
    title: "MVP Without the Clutter",
    description:
      "Focus on the features that matter first. We help turn your idea into a focused product that can reach users faster.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Build, Test & Improve",
    description:
      "Product development is iterative. We continuously refine functionality, usability, and performance based on real feedback.",
  },
  {
    number: "05",
    icon: Layers3,
    title: "Technology That Can Scale",
    description:
      "We build with a long-term view so your product can support more users, features, integrations, and business requirements.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch Ready Development",
    description:
      "From development to deployment, we focus on creating a stable product that is ready for real customers and continuous growth.",
  },
];

const journey = [
  {
    icon: Lightbulb,
    label: "Discover",
  },
  {
    icon: Route,
    label: "Plan",
  },
  {
    icon: Blocks,
    label: "Build",
  },
  {
    icon: CheckCircle2,
    label: "Launch",
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-[var(--brand-pink)]/8 blur-3xl" />

        <div className="absolute -right-48 bottom-10 h-[420px] w-[420px] rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />

        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="container-premium relative z-10">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl">
            From product idea to
            <span className="text-brand-gradient"> real-world impact.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Great products are not built by code alone. We combine product
            thinking, user experience, technology, and continuous improvement
            to turn ideas into products people can actually use.
          </p>
        </div>

        {/* PRODUCT JOURNEY */}
        <div className="relative mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 shadow-[var(--shadow-md)] md:p-8 lg:p-10">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-pink)]/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
            {/* Left content */}
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] shadow-[var(--shadow-sm)]">
                <Route size={27} strokeWidth={1.7} />
              </div>

              <h3 className="mt-6 max-w-lg text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
                A product journey designed to move forward.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                We keep the development process focused and practical — from
                understanding the initial idea to launching a product and
                improving it as users and business needs evolve.
              </p>
            </div>

            {/* Journey */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-[var(--brand-pink)]/20 via-[var(--brand-pink)]/40 to-[var(--brand-blue)]/20 md:block" />

              <div className="relative grid grid-cols-2 gap-5 md:grid-cols-4">
                {journey.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.label}
                      className="group relative text-center"
                    >
                      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-blue)] shadow-[var(--shadow-sm)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--brand-pink)]/30 group-hover:text-[var(--brand-pink)] group-hover:shadow-[var(--shadow-md)]">
                        <Icon size={23} strokeWidth={1.7} />

                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-pink)] text-[9px] font-bold text-white">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* REASONS GRID */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--brand-pink)]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number + Icon */}
                <div className="relative flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[var(--brand-pink)]">
                    {reason.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />

                    <span className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
                      Product Development
                    </span>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-6 py-6 shadow-[var(--shadow-sm)] md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)] md:text-base">
                Your product should keep getting better after launch.
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                We build with the next version, next user, and next stage of
                growth in mind.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                <Rocket size={15} />
              </span>

              Built to evolve
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}