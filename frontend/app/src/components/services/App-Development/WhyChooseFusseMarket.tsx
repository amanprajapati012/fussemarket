
"use client";

import {
  Smartphone,
  Gauge,
  ShieldCheck,
  Layers3,
  RefreshCw,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Smartphone,
    title: "User-Focused Apps",
    description:
      "We create intuitive mobile experiences that feel simple, smooth and natural for your users.",
  },
  {
    icon: Gauge,
    title: "Fast & Smooth",
    description:
      "Our apps are optimized for performance with quick interactions, smooth navigation and responsive screens.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "From authentication to API communication, we follow secure development practices to protect your application.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "We build applications with a solid technical foundation so new features can be added as your business grows.",
  },
  {
    icon: RefreshCw,
    title: "Cross-Platform Development",
    description:
      "Build powerful applications for Android and iOS while reducing development time and maintenance effort.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "We stay with your product beyond launch with improvements, updates, maintenance and technical support.",
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
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-80
          w-80
          rounded-full
          bg-[var(--brand-pink)]
          opacity-[0.045]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-1/4
          h-80
          w-80
          rounded-full
          bg-[var(--brand-blue)]
          opacity-[0.05]
          blur-[100px]
        "
      />

      <div className="container-premium relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          <h2
            className="
              mt-4
              text-[clamp(2rem,4.5vw,3.5rem)]
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-[var(--text-primary)]
            "
          >
            More Than Just an{" "}
            <span className="text-brand-gradient">
              App
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[var(--text-secondary)]
              md:text-base
            "
          >
            We combine thoughtful design, modern technology and
            reliable development practices to build mobile apps
            that are ready for real-world users and business growth.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-6xl
            gap-4
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
            lg:gap-5
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
                  hover:-translate-y-2
                  hover:border-[var(--brand-pink)]
                  hover:shadow-[var(--shadow-md)]
                  md:p-7
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-[var(--brand-pink)]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-xs
                    font-semibold
                    tracking-wider
                    text-[var(--text-muted)]
                    opacity-60
                  "
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface-soft)]
                    text-[var(--brand-pink)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-[var(--brand-pink)]
                    group-hover:bg-[var(--surface-pink)]
                    group-hover:rotate-3
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3
                    className="
                      text-lg
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
                      mt-3
                      text-sm
                      leading-6
                      text-[var(--text-secondary)]
                    "
                  >
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-6
                    h-[2px]
                    w-0
                    bg-[var(--brand-pink)]
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
