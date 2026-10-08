"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  FileSearch,
  Lightbulb,
  Map,
  MessageSquare,
  Target,
  Users,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We begin by understanding your business objectives, current challenges, priorities, existing technology, and the decisions you need to make.",
    icon: Users,
  },
  {
    number: "02",
    title: "Define the Key Questions",
    description:
      "We identify the specific technology, digital, or investment questions that need to be evaluated before making a recommendation.",
    icon: Target,
  },
  {
    number: "03",
    title: "Current State Assessment",
    description:
      "We review your existing systems, processes, technology environment, capabilities, and relevant business requirements.",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Explore Options",
    description:
      "We evaluate relevant technologies, platforms, solutions, and approaches based on your business requirements and practical constraints.",
    icon: Compass,
  },
  {
    number: "05",
    title: "Evaluate & Compare",
    description:
      "We compare the available options across factors such as suitability, cost, scalability, implementation effort, risks, and long-term value.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Strategic Recommendations",
    description:
      "We present clear recommendations based on the assessment, including what should be prioritised and which options make the most sense.",
    icon: Lightbulb,
  },
  {
    number: "07",
    title: "Define the Roadmap",
    description:
      "We translate the recommendations into practical next steps, priorities, timelines, and implementation considerations.",
    icon: Map,
  },
  {
    number: "08",
    title: "Review With Stakeholders",
    description:
      "We discuss the findings and recommendations with business and technical stakeholders to answer questions and align on the direction.",
    icon: MessageSquare,
  },
  {
    number: "09",
    title: "Ongoing Advisory",
    description:
      "When required, we continue supporting your team as priorities change, new technology decisions arise, or digital initiatives move forward.",
    icon: CheckCircle2,
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="text-brand-gradient">
              Digital Advisory Process
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            A structured approach to understand your situation, evaluate the
            available options, and turn complex technology decisions into
            clear and practical next steps.
          </p>
        </div>

        {/* Process Cards */}
        <div className="relative mt-12 md:mt-16">
          <div className="flex gap-5 overflow-x-auto px-1 pb-7 pt-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative w-[310px] shrink-0 snap-start overflow-hidden p-6 sm:w-[350px] md:w-[380px] md:p-7"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:-translate-y-1">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold tracking-wider text-[var(--text-muted)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {step.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Fusse Market
                    </span>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--brand-blue)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                      Step {step.number}

                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Scroll Hint */}
          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-medium text-[var(--text-muted)]">
            <span className="h-px w-8 bg-[var(--border)]" />

            <span>Scroll to explore the process</span>

            <span className="h-px w-8 bg-[var(--border)]" />
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 md:mt-14 md:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Clear advice should lead to clear action.
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                We focus on practical recommendations that your business can
                understand, prioritise, and act on.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
              Digital Advisory
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}