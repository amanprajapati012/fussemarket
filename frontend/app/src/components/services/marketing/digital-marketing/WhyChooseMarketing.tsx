
"use client";

import {
  Target,
  BarChart3,
  Lightbulb,
  Users,
  Rocket,
  MessageCircle,
  ArrowUpRight,
  Check,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Targeted Strategy",
    text: "We focus on reaching the right audience with campaigns built around your brand, goals and market.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    text: "Campaign performance is tracked through meaningful metrics so strategies can continuously improve.",
  },
  {
    icon: Lightbulb,
    title: "Creative That Connects",
    text: "We combine creative content with marketing strategy to make your brand more memorable.",
  },
  {
    icon: Users,
    title: "Audience First",
    text: "We understand your audience, their behaviour and their needs before building a campaign.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    text: "From awareness to conversions, every campaign is designed with your business growth in mind.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "You stay informed with transparent communication, campaign insights and regular updates.",
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-20
        md:py-28
      "
    >
      {/* Ambient Background */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--brand-pink)]
          opacity-[0.055]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-[460px]
          w-[460px]
          rounded-full
          bg-[var(--brand-blue)]
          opacity-[0.055]
          blur-[140px]
        "
      />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div
          className="
            grid
            items-end
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          <div>
            <div className="section-eyebrow">
              Why Choose Fusse Market
            </div>

            <h2
              className="
                mt-5
                max-w-xl
                text-[clamp(2.2rem,4.5vw,4rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.045em]
                text-[var(--text-primary)]
              "
            >
              Marketing Built Around{" "}
              <span className="text-brand-gradient">
                Your Growth
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-[var(--text-secondary)]
                md:text-base
                md:leading-8
              "
            >
              Great digital marketing is more than posting
              content or running advertisements. We combine
              strategy, creativity, audience insights and
              performance tracking to build a stronger digital
              presence for your business.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="
            mt-12
            grid
            gap-5
            lg:mt-16
            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          {/* Featured Panel */}
          <div
            className="
              group
              relative
              min-h-[390px]
              overflow-hidden
              rounded-[28px]
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-7
              shadow-[var(--shadow-sm)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[var(--brand-pink)]
              hover:shadow-[var(--shadow-md)]
              md:p-9
            "
          >
            {/* Decorative Circle */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                border
                border-[var(--brand-pink)]
                opacity-20
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-8
                top-8
                h-36
                w-36
                rounded-full
                bg-[var(--brand-pink)]
                opacity-[0.07]
                blur-3xl
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface-soft)]
                text-[var(--brand-pink)]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-3
                group-hover:border-[var(--brand-pink)]
                group-hover:bg-[var(--surface-pink)]
              "
            >
              <Rocket size={25} strokeWidth={1.7} />
            </div>

            <div className="relative mt-10">
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[var(--text-muted)]
                "
              >
                Our Approach
              </p>

              <h3
                className="
                  mt-3
                  max-w-sm
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-[var(--text-primary)]
                  md:text-3xl
                "
              >
                From visibility to meaningful business growth.
              </h3>

              <p
                className="
                  mt-4
                  max-w-sm
                  text-sm
                  leading-6
                  text-[var(--text-secondary)]
                "
              >
                We connect creative ideas with measurable
                marketing objectives to help your brand move
                forward.
              </p>
            </div>

            {/* Checklist */}
            <div className="relative mt-7 space-y-3">
              {[
                "Strategy before execution",
                "Continuous campaign optimization",
                "Transparent performance insights",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2.5
                    text-xs
                    text-[var(--text-secondary)]
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--surface-pink)]
                      text-[var(--brand-pink)]
                    "
                  >
                    <Check size={11} strokeWidth={2.5} />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div
              className="
                absolute
                bottom-7
                right-7
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                text-[var(--text-secondary)]
                transition-all
                duration-300
                group-hover:border-[var(--brand-pink)]
                group-hover:bg-[var(--surface-pink)]
                group-hover:text-[var(--brand-pink)]
                md:bottom-9
                md:right-9
              "
            >
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Reasons Grid */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:border-[var(--brand-pink)]
                    hover:bg-[var(--surface-soft)]
                    hover:shadow-[var(--shadow-md)]
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      text-[10px]
                      font-semibold
                      tracking-[0.15em]
                      text-[var(--text-muted)]
                      opacity-70
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Hover Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-28
                      w-28
                      rounded-full
                      bg-[var(--brand-pink)]
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-20
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--surface-soft)]
                      text-[var(--brand-blue)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-[var(--brand-blue)]
                      group-hover:bg-[var(--surface-blue)]
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Text */}
                  <div className="relative mt-6">
                    <h3
                      className="
                        text-base
                        font-semibold
                        tracking-[-0.02em]
                        text-[var(--text-primary)]
                        transition-colors
                        duration-300
                        group-hover:text-[var(--brand-pink)]
                      "
                    >
                      {reason.title}
                    </h3>

                    <p
                      className="
                        mt-2.5
                        text-xs
                        leading-6
                        text-[var(--text-secondary)]
                        md:text-sm
                      "
                    >
                      {reason.text}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-6
                      h-[2px]
                      w-0
                      bg-[var(--brand-pink)]
                      transition-all
                      duration-500
                      group-hover:w-12
                    "
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
            text-center
            lg:mt-16
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-[var(--text-muted)]
              md:text-base
            "
          >
            Your brand deserves marketing that is{" "}
            <span className="font-semibold text-[var(--text-primary)]">
              creative, measurable and purposeful.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
