import {
  Activity,
  Database,
  HardDrive,
  Headphones,
  Network,
  RefreshCw,
  Server,
  Settings,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Network Support",
    description:
      "Support and maintenance for business networks, connectivity, routers, switches, and network-related issues.",
    icon: Network,
  },
  {
    title: "Server Management",
    description:
      "Manage and maintain physical and virtual servers to support stable and reliable business operations.",
    icon: Server,
  },
  {
    title: "Infrastructure Monitoring",
    description:
      "Monitor servers, networks, systems, and critical infrastructure to identify issues before they cause disruption.",
    icon: Activity,
  },
  {
    title: "IT Infrastructure Maintenance",
    description:
      "Regular maintenance, configuration updates, system checks, and preventive activities to keep infrastructure healthy.",
    icon: Settings,
  },
  {
    title: "Infrastructure Security",
    description:
      "Support infrastructure security through access controls, configuration reviews, system hardening, and security monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "Backup & Recovery",
    description:
      "Support backup systems and recovery processes to help protect important business data and reduce downtime.",
    icon: Database,
  },
  {
    title: "Hardware Support",
    description:
      "Technical support for business hardware including servers, workstations, network devices, and related equipment.",
    icon: HardDrive,
  },
  {
    title: "Incident Management",
    description:
      "Identify, troubleshoot, prioritise, and resolve infrastructure incidents with a structured support process.",
    icon: Headphones,
  },
  {
    title: "Infrastructure Upgrades",
    description:
      "Plan and support infrastructure upgrades, replacements, and improvements based on changing business requirements.",
    icon: RefreshCw,
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
            Our IT Infrastructure Support Services
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
                    IT SUPPORT
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
            Keep your IT infrastructure running reliably.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            From everyday technical support to infrastructure maintenance,
            monitoring, security, and upgrades, we help keep your IT
            environment ready for business operations.
          </p>
        </div>
      </div>
    </section>
  );
}