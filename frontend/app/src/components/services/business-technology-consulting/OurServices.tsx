import {
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  Settings,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Business Technology Strategy",
    description:
      "Define a clear technology direction based on your business goals, operational priorities, current systems, and future growth plans.",
    icon: Target,
  },
  {
    title: "Technology Assessment",
    description:
      "Review your existing applications, infrastructure, systems, and technology capabilities to identify gaps and improvement opportunities.",
    icon: BarChart3,
  },
  {
    title: "IT & Digital Roadmap",
    description:
      "Create a practical roadmap that prioritizes technology initiatives, investments, improvements, and implementation steps.",
    icon: GitBranch,
  },
  {
    title: "Technology Architecture Consulting",
    description:
      "Plan technology architectures that support business requirements, integrations, scalability, reliability, and long-term maintainability.",
    icon: Layers3,
  },
  {
    title: "Business Process & Technology Consulting",
    description:
      "Review business processes and identify where technology can simplify operations, reduce manual work, and improve productivity.",
    icon: Settings,
  },
  {
    title: "Cloud & Infrastructure Consulting",
    description:
      "Evaluate cloud and infrastructure requirements and recommend approaches that balance performance, security, scalability, and cost.",
    icon: Cloud,
  },
  {
    title: "System & Platform Evaluation",
    description:
      "Compare software platforms, business applications, and technology solutions against your requirements before making an investment.",
    icon: Building2,
  },
  {
    title: "Data & Technology Consulting",
    description:
      "Review data systems, technology environments, and information flows to support better data management and business decision-making.",
    icon: Database,
  },
  {
    title: "Technology Implementation Advisory",
    description:
      "Provide guidance during technology projects to help teams manage implementation priorities, technical decisions, risks, and delivery.",
    icon: CheckCircle2,
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

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[42px]">
            Our Business Technology Consulting Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="premium-card group p-7 md:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">
                    CONSULTING
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug text-[var(--text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]" />

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                  Business-focused consulting
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-6 py-8 text-center shadow-[var(--shadow-sm)] md:px-10">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            Make technology work better for your business.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            From strategy and assessment to technology planning and
            implementation guidance, we help you make informed decisions that
            support your business today and as it grows.
          </p>
        </div>
      </div>
    </section>
  );
}