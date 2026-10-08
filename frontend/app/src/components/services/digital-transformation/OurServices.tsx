import {
  BarChart3,
  Bot,
  Building2,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  Settings,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Digital Transformation Strategy",
    description:
      "Define transformation priorities, business objectives, technology direction, and a practical roadmap for digital change.",
    icon: GitBranch,
  },
  {
    title: "Business Process Transformation",
    description:
      "Review existing processes and identify opportunities to simplify operations, remove inefficiencies, and improve productivity.",
    icon: Settings,
  },
  {
    title: "Technology Modernization",
    description:
      "Modernize legacy systems, applications, and technology environments to support current and future business requirements.",
    icon: Layers3,
  },
  {
    title: "Cloud Transformation",
    description:
      "Plan and implement cloud adoption strategies that improve flexibility, scalability, accessibility, and infrastructure efficiency.",
    icon: Cloud,
  },
  {
    title: "Digital Automation",
    description:
      "Automate repetitive business processes and workflows to reduce manual effort, improve accuracy, and increase operational efficiency.",
    icon: Bot,
  },
  {
    title: "Data & Analytics Transformation",
    description:
      "Improve how your organization collects, manages, analyses, and uses data to support better business decisions.",
    icon: BarChart3,
  },
  {
    title: "Customer Experience Transformation",
    description:
      "Improve digital customer journeys, interactions, and service experiences across relevant customer touchpoints.",
    icon: Users,
  },
  {
    title: "Enterprise System Integration",
    description:
      "Connect business applications, platforms, and data sources to create more consistent and efficient technology workflows.",
    icon: Database,
  },
  {
    title: "Change Management",
    description:
      "Support teams through technology and process changes with structured adoption planning, communication, and implementation support.",
    icon: Building2,
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
            Our Digital Transformation Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="premium-card group p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">
                    TRANSFORMATION
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]" />
              </article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-6 py-7 text-center shadow-[var(--shadow-sm)] md:px-10">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            Transform the way your business operates.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            From strategy and process improvement to technology modernization
            and implementation, we help organizations turn digital
            transformation into practical business improvements.
          </p>
        </div>
      </div>
    </section>
  );
}