import {
  Activity,
  CheckCircle2,
  Headphones,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Proactive Infrastructure Monitoring",
    description:
      "We monitor critical infrastructure components to identify performance issues, failures, and potential problems before they affect business operations.",
    icon: Activity,
  },
  {
    title: "Experienced Technical Support",
    description:
      "Our team provides practical technical support for networks, servers, systems, and other infrastructure your business relies on.",
    icon: Headphones,
  },
  {
    title: "Reliable Network & Server Support",
    description:
      "We help maintain stable network and server environments so employees and business applications can operate without unnecessary interruptions.",
    icon: Server,
  },
  {
    title: "Security-Focused Infrastructure",
    description:
      "We consider security across your infrastructure and help identify configuration issues, access risks, and other potential security concerns.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Issue Resolution",
    description:
      "When infrastructure problems occur, we follow a structured approach to identify the cause, resolve the issue, and restore normal operations quickly.",
    icon: Network,
  },
  {
    title: "Ongoing Infrastructure Improvement",
    description:
      "We review infrastructure performance and requirements over time to identify opportunities for better reliability, efficiency, and scalability.",
    icon: CheckCircle2,
  },
];

const focusAreas = [
  "Network & server monitoring",
  "Infrastructure maintenance",
  "Incident & issue management",
  "Performance & reliability",
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[42px]">
            IT Infrastructure Support Built Around Business Continuity
          </h2>
        </div>

        {/* Main Feature */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-7 md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
              <Network size={26} strokeWidth={1.8} />
            </div>

            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
              Keep your infrastructure reliable and available.
            </h3>

            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Your IT infrastructure supports almost every part of your
              business. We provide ongoing monitoring, maintenance, technical
              support, and issue resolution to help keep your systems stable
              and available when your team needs them.
            </p>

            <div className="mt-7 space-y-3">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[var(--brand-pink)]"
                  />

                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="premium-card group p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-pink)] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-[var(--radius-lg)] bg-[var(--gradient-dark)] px-7 py-8 md:px-10 md:py-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Need dependable IT infrastructure support?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                We can help monitor, maintain, secure, and improve the
                infrastructure your business depends on.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-blue-dark)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}