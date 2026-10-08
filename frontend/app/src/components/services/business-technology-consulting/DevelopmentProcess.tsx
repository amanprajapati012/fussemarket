import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  GitBranch,
  Lightbulb,
  Search,
  Target,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We understand your business model, objectives, operational challenges, technology needs, and the decisions you need to make.",
    icon: Target,
  },
  {
    number: "02",
    title: "Current State Assessment",
    description:
      "We review your existing systems, applications, infrastructure, processes, and technology capabilities to understand the current environment.",
    icon: Search,
  },
  {
    number: "03",
    title: "Identify Business & Technology Gaps",
    description:
      "We identify inefficiencies, technology gaps, integration issues, risks, and areas where your current environment may limit business performance.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Define Requirements",
    description:
      "We translate business objectives and operational needs into clear technology requirements and priorities for your organization.",
    icon: FileText,
  },
  {
    number: "05",
    title: "Explore Technology Options",
    description:
      "We evaluate relevant platforms, systems, architectures, technologies, and approaches based on your requirements and business context.",
    icon: Compass,
  },
  {
    number: "06",
    title: "Evaluate & Recommend",
    description:
      "We compare available options based on suitability, scalability, cost, implementation effort, risks, and expected business value.",
    icon: Lightbulb,
  },
  {
    number: "07",
    title: "Create Technology Roadmap",
    description:
      "We define practical priorities, initiatives, dependencies, timelines, and next steps to turn recommendations into an actionable roadmap.",
    icon: GitBranch,
  },
  {
    number: "08",
    title: "Implementation Advisory",
    description:
      "We provide guidance during implementation to support technical decisions, manage priorities, address risks, and keep delivery aligned with business goals.",
    icon: CheckCircle2,
  },
  {
    number: "09",
    title: "Review & Improve",
    description:
      "We review outcomes, technology performance, business impact, and changing requirements to identify opportunities for further improvement.",
    icon: BarChart3,
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

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[42px]">
            Our Business Technology Consulting Process
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured approach that helps you understand your current
            technology environment, evaluate the right options, and turn
            business requirements into practical technology decisions.
          </p>
        </div>

        {/* Horizontal Process */}
        <div className="mt-12 overflow-x-auto pb-7 pt-2 scrollbar-hide">
          <div className="flex w-max snap-x snap-mandatory gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative w-[320px] shrink-0 snap-start overflow-hidden p-7 sm:w-[350px] md:w-[380px]"
                >
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-wider text-[var(--brand-pink)]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mt-7 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]" />

                  {/* Footer */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                    Consulting lifecycle
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-7 text-center md:px-10">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            From business requirements to practical technology decisions.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            We combine business understanding with technology expertise to
            provide clear recommendations, actionable roadmaps, and ongoing
            guidance throughout your technology journey.
          </p>
        </div>
      </div>
    </section>
  );
}