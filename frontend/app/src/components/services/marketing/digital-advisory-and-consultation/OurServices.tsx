"use client";

import {
  ArrowUpRight,
  BarChart3,
  Compass,
  FileCheck2,
  FileSearch,
  Lightbulb,
  Map,
  Scale,
  Settings2,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Digital Strategy Development",
    description:
      "Define a practical digital direction based on your business goals, current capabilities, market position, and future priorities.",
    icon: Compass,
  },
  {
    title: "Technology Advisory",
    description:
      "Get independent guidance on technology choices, platforms, systems, and approaches that fit your business requirements.",
    icon: Lightbulb,
  },
  {
    title: "Technology Assessment",
    description:
      "Review your existing technology environment to identify gaps, limitations, risks, and opportunities for improvement.",
    icon: FileSearch,
  },
  {
    title: "Digital Transformation Advisory",
    description:
      "Plan digital transformation initiatives with clear priorities, realistic implementation steps, and business objectives in mind.",
    icon: Map,
  },
  {
    title: "Technology Investment Validation",
    description:
      "Evaluate proposed technology investments to understand their business relevance, feasibility, risks, and expected value.",
    icon: BarChart3,
  },
  {
    title: "IT & Digital Roadmap",
    description:
      "Create a structured roadmap that helps your organisation prioritise technology initiatives and plan implementation over time.",
    icon: Target,
  },
  {
    title: "Solution & Platform Evaluation",
    description:
      "Compare technology solutions and platforms against your requirements to support better-informed purchasing and implementation decisions.",
    icon: Scale,
  },
  {
    title: "Digital Project Advisory",
    description:
      "Provide strategic guidance during important digital projects to help teams stay aligned with business objectives and priorities.",
    icon: Settings2,
  },
  {
    title: "Technology Due Diligence",
    description:
      "Review technology architecture, systems, processes, and technical considerations before major investments, partnerships, or business decisions.",
    icon: FileCheck2,
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Digital Advisory & Consultation Services
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            We help business leaders evaluate technology options, plan digital
            initiatives, and make informed decisions about their technology
            investments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="premium-card group relative overflow-hidden p-6 md:p-7"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-brand)]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="text-xs font-medium text-[var(--text-muted)]">
                    Fusse Market
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--brand-blue)] transition-all duration-300 group-hover:border-[var(--brand-pink)] group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
                    <ArrowUpRight
                      size={16}
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