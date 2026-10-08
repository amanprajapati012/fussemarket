import {
  Activity,
  ClipboardCheck,
  FileText,
  Headphones,
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Support Assessment",
    description:
      "We understand your application environment, current support challenges, business priorities, and existing support processes.",
    icon: Search,
  },
  {
    number: "02",
    title: "Application Inventory",
    description:
      "We review your applications, dependencies, integrations, technologies, and critical business functions to understand the environment.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Support Planning",
    description:
      "We define support priorities, responsibilities, response expectations, escalation paths, and service requirements.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Monitoring Setup",
    description:
      "We establish monitoring for application health, availability, performance, errors, and other important operational indicators.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Incident Management",
    description:
      "Issues are identified, prioritised, investigated, and resolved through a structured incident and escalation process.",
    icon: Headphones,
  },
  {
    number: "06",
    title: "Maintenance & Updates",
    description:
      "We handle application maintenance, fixes, updates, configuration changes, and other regular operational requirements.",
    icon: Wrench,
  },
  {
    number: "07",
    title: "Performance & Security Review",
    description:
      "We regularly review application performance, security concerns, reliability, and areas that may require improvement.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    title: "Reporting & Service Review",
    description:
      "We provide clear reporting on incidents, application health, support activity, performance, and service-level trends.",
    icon: Settings,
  },
  {
    number: "09",
    title: "Continuous Improvement",
    description:
      "We use operational insights and recurring issues to improve application stability, support processes, performance, and reliability.",
    icon: TrendingUp,
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[42px]">
            Our Application Support Process
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured approach that helps us understand your applications,
            manage day-to-day support, resolve issues, and continuously improve
            application reliability.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-12 overflow-x-auto pb-7 pt-2 scrollbar-hide">
          <div className="flex w-max gap-5 snap-x snap-mandatory">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative w-[320px] shrink-0 snap-start overflow-hidden p-7 sm:w-[350px] md:w-[380px]"
                >
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-wider text-[var(--brand-pink)]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-pink)] group-hover:text-white">
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
                  <div className="mt-7 h-px w-full bg-[var(--border)] transition-all duration-300 group-hover:bg-[var(--brand-pink-light)]" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                    Application support lifecycle
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-6 py-6 text-center shadow-[var(--shadow-sm)] md:flex-row md:px-8 md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] md:text-xl">
              Reliable support from day-to-day operations to continuous improvement.
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              We keep your applications monitored, supported, maintained, and
              ready to meet changing business requirements.
            </p>
          </div>

          <div className="shrink-0 rounded-full bg-[var(--brand-blue-soft)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-blue)]">
            Reliable Application Operations
          </div>
        </div>
      </div>
    </section>
  );
}