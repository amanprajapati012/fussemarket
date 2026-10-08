import {
  CheckCircle2,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const reasons = [
  {
    title: "Trained Support Teams",
    description:
      "Our support teams are trained to communicate professionally, understand customer concerns, and handle interactions with care.",
    icon: Users,
  },
  {
    title: "Faster Response",
    description:
      "We help reduce response times by following structured support processes and keeping customer issues moving toward resolution.",
    icon: Zap,
  },
  {
    title: "Omnichannel Support",
    description:
      "We support customers across relevant channels so they can reach your business through the platforms they already use.",
    icon: MessageCircle,
  },
  {
    title: "Professional Communication",
    description:
      "Every interaction is handled with clear, respectful, and consistent communication that reflects your brand.",
    icon: Headphones,
  },
  {
    title: "Reliable Issue Resolution",
    description:
      "We focus on understanding the actual customer issue, providing the right assistance, and escalating complex cases when required.",
    icon: CheckCircle2,
  },
  {
    title: "Consistent Customer Experience",
    description:
      "We maintain consistent support standards across interactions to help build trust and stronger long-term customer relationships.",
    icon: ShieldCheck,
  },
];

const focusAreas = [
  "Customer queries & issue handling",
  "Technical & product support",
  "Multi-channel customer communication",
  "Customer satisfaction & retention",
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
            Customer Support Built Around Your Customers
          </h2>
        </div>

        {/* Main Feature */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-7 md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
              <Headphones size={26} strokeWidth={1.8} />
            </div>

            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
              Give your customers support they can rely on.
            </h3>

            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Good customer support is about more than answering questions.
              Customers expect clear communication, timely responses, and
              useful solutions. We help your business deliver a consistent
              support experience across everyday customer interactions.
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
                Need reliable customer support for your business?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                We can help you handle customer queries, improve response
                times, and deliver a more consistent support experience.
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