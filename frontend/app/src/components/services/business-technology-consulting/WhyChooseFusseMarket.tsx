import {
  BarChart3,
  CheckCircle2,
  Compass,
  Layers3,
  Settings,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    title: "Business-First Technology Planning",
    description:
      "We start with your business objectives, processes, challenges, and priorities before recommending technology solutions.",
    icon: Target,
  },
  {
    title: "Practical Technology Recommendations",
    description:
      "We focus on solutions that are realistic to implement, maintain, and scale rather than recommending technology for its own sake.",
    icon: Compass,
  },
  {
    title: "Better Business & IT Alignment",
    description:
      "We help connect business requirements with technology capabilities so your systems support the way your organization actually operates.",
    icon: Workflow,
  },
  {
    title: "Independent Technology Perspective",
    description:
      "We provide an objective view of platforms, systems, architectures, and technology options to help you make informed decisions.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Technology Approach",
    description:
      "We consider future growth, changing requirements, integrations, and operational needs when planning your technology environment.",
    icon: Layers3,
  },
  {
    title: "Focus on Business Outcomes",
    description:
      "Our recommendations are connected to practical outcomes such as efficiency, productivity, reliability, customer experience, and growth.",
    icon: BarChart3,
  },
];

const focusAreas = [
  "Business & technology assessment",
  "Technology strategy & planning",
  "Systems & platform evaluation",
  "Process and technology improvement",
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
            Business Technology Consulting Built Around Your Needs
          </h2>
        </div>

        {/* Main Feature */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card relative overflow-hidden p-7 md:p-9 lg:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[var(--brand-pink-soft)] blur-2xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
                <Settings size={22} strokeWidth={1.8} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl">
                Make technology decisions with a clearer business perspective.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                Technology decisions affect your operations, people, costs,
                customers, and future growth. We look at the complete business
                context before recommending a direction, helping you choose
                technology that solves real problems and supports your
                long-term objectives.
              </p>

              <div className="mt-7 space-y-4">
                {focusAreas.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--brand-pink)]"
                    />

                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reasons */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="premium-card group p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="dark-section mt-8 overflow-hidden rounded-[var(--radius-lg)] px-6 py-9 md:px-10 md:py-11">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Need clarity on your technology direction?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">
                We can help assess your current technology environment, review
                your options, and define practical next steps aligned with
                your business goals.
              </p>
            </div>

            <a
              href="/contact"
              className="btn-brand shrink-0 self-start md:self-center"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}