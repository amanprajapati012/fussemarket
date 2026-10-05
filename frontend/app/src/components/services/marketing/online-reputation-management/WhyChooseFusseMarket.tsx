"use client";

import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Eye,
  MessageSquare,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

const reasons = [
  {
    title: "Consistent Online Monitoring",
    description:
      "We monitor relevant reviews, mentions, and customer feedback to help you stay aware of how your brand is being represented online.",
    icon: Eye,
  },
  {
    title: "Review Management",
    description:
      "We help manage customer reviews with clear, timely, and appropriate responses that reflect your brand's communication style.",
    icon: MessageSquare,
  },
  {
    title: "Reputation Risk Identification",
    description:
      "We identify recurring complaints, negative feedback, and potential reputation concerns so they can be addressed early.",
    icon: ShieldCheck,
  },
  {
    title: "Relevant Brand Monitoring",
    description:
      "We focus on the platforms, search results, review channels, and online conversations that matter to your business.",
    icon: Search,
  },
  {
    title: "Practical Reputation Strategy",
    description:
      "Our approach is based on your business, customers, industry, and existing online presence rather than a one-size-fits-all process.",
    icon: Target,
  },
  {
    title: "Clear Reporting & Insights",
    description:
      "We provide useful reporting on reviews, feedback, brand mentions, and reputation trends to support better decisions.",
    icon: BarChart3,
  },
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

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Reputation Management Built Around{" "}
            <span className="text-brand-gradient">
              Long-Term Brand Trust.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
            A good online reputation takes consistent attention. We help
            businesses monitor feedback, manage reviews, identify concerns,
            and maintain a professional presence across relevant digital
            channels.
          </p>
        </div>

        {/* Main Highlight */}
        <div className="premium-card mt-12 p-7 md:mt-16 md:p-9 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <ShieldCheck size={21} strokeWidth={1.8} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                  Our Approach
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
                We focus on building a reputation your business can maintain.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                Reputation management is not only about responding to negative
                reviews. It also means understanding customer feedback,
                maintaining consistent communication, improving the online
                presence of your business, and addressing recurring issues
                over time.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid gap-3 sm:grid-cols-2 lg:w-[380px] lg:grid-cols-1">
              {[
                "Review & feedback monitoring",
                "Timely response management",
                "Reputation risk identification",
                "Long-term brand consistency",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[var(--brand-pink)]"
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
        <div className="mt-14 md:mt-16">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
              What We Bring
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
              Practical reputation management for your business.
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="premium-card group relative overflow-hidden p-6 md:p-7"
                >
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="mt-6 text-lg font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-pink)]">
                    {reason.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {reason.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Fusse Market
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--brand-blue)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--brand-pink)]"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] p-6 md:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Your online reputation needs ongoing attention.
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                We help you stay informed, respond professionally, and build
                a more consistent digital presence over time.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
              Reputation Management
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}