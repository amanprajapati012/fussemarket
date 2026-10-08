import {
  Activity,
  ClipboardCheck,
  FileText,
  HardDrive,
  Network,
  Search,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Infrastructure Assessment",
    description:
      "We review your existing servers, networks, hardware, systems, and infrastructure setup to understand the current environment.",
    icon: Search,
  },
  {
    number: "02",
    title: "Requirements & Planning",
    description:
      "We understand your business requirements, critical systems, support needs, and infrastructure priorities before defining the support approach.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Infrastructure Documentation",
    description:
      "We document important infrastructure components, dependencies, configurations, access requirements, and operational information.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Network & Server Setup",
    description:
      "We configure and support network, server, hardware, and system environments according to your operational requirements.",
    icon: Network,
  },
  {
    number: "05",
    title: "Security & Access Setup",
    description:
      "We review infrastructure access, security configurations, system controls, and other measures required to protect your environment.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Monitoring & Maintenance",
    description:
      "We monitor critical infrastructure and perform regular maintenance to identify problems early and keep systems operating reliably.",
    icon: Activity,
  },
  {
    number: "07",
    title: "Incident Response",
    description:
      "When an infrastructure issue occurs, we investigate the cause, prioritise the incident, and work toward restoring normal operations.",
    icon: Server,
  },
  {
    number: "08",
    title: "Performance Review",
    description:
      "We review infrastructure performance, capacity, reliability, and recurring issues to identify areas that need attention.",
    icon: HardDrive,
  },
  {
    number: "09",
    title: "Improvement & Optimization",
    description:
      "We recommend and implement practical improvements that can increase reliability, improve performance, and support future business requirements.",
    icon: Wrench,
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
            Our IT Infrastructure Support Process
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured approach to understand your infrastructure, maintain
            critical systems, resolve issues, and continuously improve
            reliability.
          </p>
        </div>

        {/* Horizontal Process */}
        <div className="mt-12 overflow-x-auto pb-7 pt-2 scrollbar-hide">
          <div className="flex w-max gap-5 snap-x snap-mandatory">
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

                  {/* Bottom */}
                  <div className="mt-7 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                    Infrastructure support lifecycle
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-7 text-center md:px-10">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            Reliable infrastructure starts with the right support process.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            We monitor, maintain, troubleshoot, and improve your IT
            infrastructure to help keep your business systems available and
            dependable.
          </p>
        </div>
      </div>
    </section>
  );
}