"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    icon: Network,
    title: "Connected Systems, Not Isolated Tools",
    description:
      "We connect applications, platforms, databases, and services so your technology ecosystem works as one coordinated environment.",
  },
  {
    icon: Workflow,
    title: "Automation That Reduces Manual Work",
    description:
      "We automate repetitive data transfers and business workflows to reduce manual re-entry, delays, and unnecessary operational effort.",
  },
  {
    icon: Database,
    title: "Reliable Data Flow",
    description:
      "We design integrations that move the right information between systems accurately, consistently, and at the right time.",
  },
  {
    icon: ShieldCheck,
    title: "Security Across Every Connection",
    description:
      "Authentication, authorization, secure APIs, controlled access, and data protection are considered throughout the integration architecture.",
  },
  {
    icon: Layers3,
    title: "Integration Built to Scale",
    description:
      "Our architecture is designed to support new applications, services, data sources, and business requirements as your organization grows.",
  },
  {
    icon: GitBranch,
    title: "Maintainable Integration Architecture",
    description:
      "We build structured integration layers that are easier to monitor, maintain, troubleshoot, and extend without creating unnecessary complexity.",
  },
];

const journey = [
  "Connect",
  "Automate",
  "Secure",
  "Scale",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-[var(--brand-pink-soft)] opacity-60 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-140px] h-[460px] w-[460px] rounded-full bg-[var(--brand-blue-soft)] opacity-70 blur-3xl" />
      </div>

      <div className="container-premium relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Integration designed for{" "}
            <span className="text-brand-gradient">
              connected business operations.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
            We go beyond connecting systems. Our integration approach focuses
            on creating reliable data flows, automating business processes,
            strengthening security, and building an architecture that can
            evolve with your technology landscape.
          </p>
        </div>

        {/* Featured architecture */}
        <div className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] md:mt-16">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Content */}
            <div className="relative p-7 sm:p-9 lg:p-12">
              <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-[var(--brand-pink-soft)] opacity-70 blur-2xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Network className="h-5 w-5" />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                  Integration Architecture
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
                  One connected ecosystem for your entire technology stack.
                </h3>

                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                  Instead of forcing teams to work across disconnected
                  systems, we create structured connections between the
                  applications, data, platforms, and workflows your business
                  depends on.
                </p>

                {/* Journey */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {journey.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--surface-pink)] text-[10px] font-bold text-[var(--brand-pink)]">
                        {index + 1}
                      </span>

                      <span className="text-xs font-semibold text-[var(--text-secondary)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture visual */}
            <div className="relative min-h-[430px] overflow-hidden bg-[var(--surface-soft)] p-6 sm:p-8 lg:p-10">
              <div className="dot-grid absolute inset-0 opacity-50" />

              {/* Connection lines */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[20%] right-[20%] top-1/2 h-px bg-[var(--border-dark)]" />
                <div className="absolute left-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-[var(--border-dark)]" />
              </div>

              {/* Source systems */}
              <ArchitectureNode
                className="absolute left-[7%] top-[13%]"
                icon={Database}
                title="Data"
                subtitle="Sources"
              />

              <ArchitectureNode
                className="absolute right-[7%] top-[13%]"
                icon={Layers3}
                title="Applications"
                subtitle="Systems"
              />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[var(--brand-pink-light)] bg-[var(--surface)] shadow-[var(--shadow-brand)]">
                  <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[var(--gradient-brand)] text-white">
                    <Network className="h-6 w-6" />
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider">
                      Integration
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom systems */}
              <ArchitectureNode
                className="absolute bottom-[13%] left-[7%]"
                icon={Workflow}
                title="Workflows"
                subtitle="Automation"
              />

              <ArchitectureNode
                className="absolute bottom-[13%] right-[7%]"
                icon={GitBranch}
                title="Platforms"
                subtitle="Services"
              />

              {/* Status */}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 shadow-[var(--shadow-sm)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-pink)]" />
                <span className="whitespace-nowrap text-xs font-semibold text-[var(--text-primary)]">
                  Connected & automated
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-14 md:mt-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="premium-card group relative overflow-hidden p-7"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--brand-pink-soft)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-pink-soft)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.16em] text-[var(--text-muted)]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {reason.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
                      <span>Integration capability</span>

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] md:mt-12 md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                <Workflow className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--brand-pink)]">
                  Connected by Design
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)] md:text-xl">
                  Make your technology stack work together.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  Replace disconnected systems and manual processes with
                  reliable integrations built for visibility, automation, and
                  long-term growth.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5">
              <CheckCircle2 className="h-4 w-4 text-[var(--brand-pink)]" />
              <span className="text-xs font-semibold text-[var(--text-secondary)]">
                Enterprise Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ArchitectureNodeProps = {
  className?: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
};

function ArchitectureNode({
  className = "",
  icon: Icon,
  title,
  subtitle,
}: ArchitectureNodeProps) {
  return (
    <div className={`${className} group z-10`}>
      <div className="w-[112px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 text-center shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-pink)] hover:shadow-[var(--shadow-md)] sm:w-[130px] sm:p-4">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--brand-blue)] transition-colors duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>

        <p className="mt-2 text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-[var(--text-muted)] sm:text-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
}