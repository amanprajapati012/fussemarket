import {
  Activity,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  GitBranch,
  Layers3,
  Settings,
  Target,
  Users,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Business Assessment",
    description:
      "We understand your business objectives, current processes, technology environment, customer needs, and the challenges driving transformation.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Define Transformation Goals",
    description:
      "We identify the key outcomes your organization wants to achieve and establish clear priorities for the transformation program.",
    icon: Target,
  },
  {
    number: "03",
    title: "Current State Analysis",
    description:
      "We review existing systems, processes, data, infrastructure, and capabilities to identify gaps, inefficiencies, and improvement opportunities.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Transformation Strategy",
    description:
      "We define the transformation approach, technology direction, priorities, initiatives, and roadmap based on your business requirements.",
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Solution & Architecture Design",
    description:
      "We design the target technology environment, applications, integrations, processes, and systems required to support the transformation.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Implementation Planning",
    description:
      "We break the transformation roadmap into manageable initiatives, define implementation priorities, dependencies, timelines, and responsibilities.",
    icon: Settings,
  },
  {
    number: "07",
    title: "Implementation & Change",
    description:
      "We support technology implementation and process changes while helping teams adapt to new systems and ways of working.",
    icon: Users,
  },
  {
    number: "08",
    title: "Measure & Validate",
    description:
      "We review implementation results against defined objectives, business performance, user adoption, operational improvements, and other relevant measures.",
    icon: BarChart3,
  },
  {
    number: "09",
    title: "Continuous Improvement",
    description:
      "We use performance insights and changing business requirements to refine systems, processes, and transformation initiatives over time.",
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

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[42px]">
            Our Digital Transformation Process
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured approach that takes your organization from business
            assessment and transformation strategy through implementation,
            adoption, and continuous improvement.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-12 overflow-x-auto pb-7 pt-2 scrollbar-hide">
          <div className="flex w-max snap-x snap-mandatory gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative w-[320px] shrink-0 snap-start overflow-hidden p-7 sm:w-[350px] md:w-[380px]"
                >
                  {/* Number + Icon */}
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

                  {/* Bottom Line */}
                  <div className="mt-7 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                    Transformation lifecycle
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-7 text-center md:px-10">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            From strategy to implementation and measurable improvement.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            We help organizations manage transformation as a practical,
            structured process that delivers meaningful improvements to
            operations, technology, and customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}