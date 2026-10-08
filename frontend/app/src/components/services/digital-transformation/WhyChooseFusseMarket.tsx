import {
  CheckCircle2,
  GitBranch,
  Layers3,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Business-Led Transformation",
    description:
      "We start with business goals, operational challenges, and customer needs so transformation efforts solve real business problems.",
    icon: Settings,
  },
  {
    title: "Strategy & Technology Alignment",
    description:
      "We connect digital strategy with the right technologies, platforms, and implementation approach for your organization.",
    icon: GitBranch,
  },
  {
    title: "Practical Implementation",
    description:
      "We focus on turning transformation plans into working solutions through structured delivery, implementation, and execution.",
    icon: Layers3,
  },
  {
    title: "Change Management",
    description:
      "We consider people and processes alongside technology to help teams understand, adopt, and effectively use new ways of working.",
    icon: Users,
  },
  {
    title: "Secure & Scalable Solutions",
    description:
      "Transformation initiatives are designed with security, reliability, scalability, and long-term technology requirements in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Improvement",
    description:
      "Digital transformation does not end at implementation. We help identify opportunities to improve processes, technology, and business performance over time.",
    icon: CheckCircle2,
  },
];

const focusAreas = [
  "Business & operational transformation",
  "Digital strategy & technology planning",
  "Process improvement & automation",
  "Implementation & change management",
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
            Digital Transformation Built Around Your Business
          </h2>
        </div>

        {/* Main Feature */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-7 md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
              <GitBranch size={26} strokeWidth={1.8} />
            </div>

            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
              Turn transformation plans into practical business change.
            </h3>

            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Digital transformation involves more than introducing new
              technology. It often requires changes to processes, systems,
              customer experiences, and the way teams work. We bring these
              areas together to help organizations move from strategy to
              implementation with a clear and structured approach.
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
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
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
                Ready to move your digital transformation forward?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                We can help you assess your current state, define the right
                transformation priorities, and plan the next steps.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-blue-dark)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Discuss Your Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}