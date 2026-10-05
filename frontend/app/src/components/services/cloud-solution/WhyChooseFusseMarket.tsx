"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  CloudCog,
  Database,
  Gauge,
  LockKeyhole,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: CloudCog,
    title: "Built to Scale",
    description:
      "We design cloud environments that can grow with your business, helping you handle changing workloads without rebuilding your entire infrastructure.",
    points: [
      "Flexible infrastructure",
      "Scalable resources",
      "Growth-ready architecture",
    ],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Security at Every Layer",
    description:
      "Security is considered throughout your cloud environment, from infrastructure access to data protection and application-level controls.",
    points: [
      "Protected cloud environments",
      "Access control strategies",
      "Data-focused security",
    ],
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance That Matters",
    description:
      "We focus on efficient infrastructure and optimized cloud environments to help applications perform reliably as demand changes.",
    points: [
      "Performance optimization",
      "Efficient resource usage",
      "Reliable application delivery",
    ],
  },
  {
    number: "04",
    icon: Database,
    title: "Smarter Data Management",
    description:
      "From storage to databases, we help organize cloud data environments for accessibility, reliability, and efficient business operations.",
    points: [
      "Structured cloud storage",
      "Reliable data environments",
      "Efficient data access",
    ],
  },
  {
    number: "05",
    icon: Server,
    title: "Reliable Infrastructure",
    description:
      "We create dependable cloud foundations that support your applications, services, and business operations with greater consistency.",
    points: [
      "Stable infrastructure",
      "Application-ready environments",
      "Operational reliability",
    ],
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Designed for Growth",
    description:
      "Your cloud strategy should support where your business is going. We build solutions with future expansion and evolving requirements in mind.",
    points: [
      "Future-ready architecture",
      "Flexible technology choices",
      "Business-focused cloud strategy",
    ],
  },
];

const cloudCapabilities = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "Flexible environments built around your workloads.",
  },
  {
    icon: LockKeyhole,
    title: "Cloud Security",
    text: "Security-focused architecture for your digital assets.",
  },
  {
    icon: Zap,
    title: "Cloud Optimization",
    text: "Efficient resources for better performance and operations.",
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-28">
      {/* Background Elements */}
      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-24
          h-[460px]
          w-[460px]
          rounded-full
          bg-[var(--brand-blue)]
          opacity-[0.06]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--brand-pink)]
          opacity-[0.06]
          blur-[150px]
        "
      />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow mx-auto mb-5 w-fit">
            <Sparkles size={14} />
            Why Fusse Market
          </div>

          <h2
            className="
              text-[clamp(2.3rem,4.5vw,4rem)]
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-[var(--text-primary)]
            "
          >
            Cloud Built Around
            <span className="block text-brand-gradient">
              Your Business.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-[var(--text-secondary)]
              md:text-[17px]
              md:leading-8
            "
          >
            We help businesses build secure, scalable, and reliable cloud
            environments that simplify technology today while creating a
            stronger foundation for tomorrow.
          </p>
        </div>

        {/* Capability Strip */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-5xl
            overflow-hidden
            rounded-[var(--radius-xl)]
            border
            border-[var(--border)]
            bg-[var(--surface-soft)]
            shadow-[var(--shadow-sm)]
            md:grid-cols-3
          "
        >
          {cloudCapabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group
                  flex
                  items-center
                  gap-4
                  p-5
                  transition-all
                  duration-300
                  hover:bg-[var(--surface)]
                  ${
                    index !== cloudCapabilities.length - 1
                      ? "border-b border-[var(--border)] md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--surface-blue)]
                    text-[var(--brand-blue)]
                    transition-all
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon size={19} />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-[var(--text-primary)]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-[var(--text-muted)]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Cards */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="
                  premium-card
                  group
                  relative
                  overflow-hidden
                  rounded-[var(--radius-lg)]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[var(--shadow-lg)]
                  md:p-7
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-6
                    top-5
                    text-4xl
                    font-semibold
                    tracking-[-0.06em]
                    text-[var(--surface-blue)]
                    transition-colors
                    duration-500
                    group-hover:text-[var(--surface-pink)]
                  "
                >
                  {reason.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--surface-blue)]
                    text-[var(--brand-blue)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:-rotate-3
                    group-hover:bg-[var(--surface-pink)]
                    group-hover:text-[var(--brand-pink)]
                  "
                >
                  <Icon size={21} />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-semibold
                    tracking-[-0.025em]
                    text-[var(--text-primary)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--brand-blue)]
                  "
                >
                  {reason.title}
                </h3>

                {/* Description */}
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

                {/* Points */}
                <div className="mt-6 space-y-2.5">
                  {reason.points.map((point) => (
                    <div
                      key={point}
                      className="
                        flex
                        items-center
                        gap-2.5
                        text-xs
                        text-[var(--text-muted)]
                      "
                    >
                      <CheckCircle2
                        size={14}
                        className="
                          shrink-0
                          text-[var(--brand-blue)]
                        "
                      />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="
                    mt-7
                    h-px
                    w-full
                    bg-[var(--border)]
                    transition-colors
                    duration-500
                    group-hover:bg-[var(--border-dark)]
                  "
                />

                {/* Footer */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[var(--text-muted)]
                    "
                  >
                    Cloud Advantage
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--border)]
                      text-[var(--text-muted)]
                      transition-all
                      duration-300
                      group-hover:border-[var(--brand-blue)]
                      group-hover:bg-[var(--surface-blue)]
                      group-hover:text-[var(--brand-blue)]
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </span>
                </div>

                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -right-20
                    h-40
                    w-40
                    rounded-full
                    bg-[var(--brand-blue)]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.10]
                  "
                />
              </article>
            );
          })}
        </div>

        {/* Bottom Premium Banner */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[var(--radius-xl)]
            border
            border-[var(--border)]
            bg-[var(--surface-soft)]
            p-7
            md:p-10
          "
        >
          {/* Decorative Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              w-1/2
              opacity-[0.035]
              [background-image:linear-gradient(var(--text-primary)_1px,transparent_1px),linear-gradient(90deg,var(--text-primary)_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-[var(--brand-blue)]
              opacity-[0.08]
              blur-[80px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* Text */}
            <div className="max-w-2xl">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--brand-blue)]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--brand-blue)]
                  "
                />

                Cloud Philosophy
              </div>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-[var(--text-primary)]
                  md:text-3xl
                "
              >
                Infrastructure that grows
                <span className="text-brand-gradient">
                  {" "}
                  with you.
                </span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[var(--text-secondary)]
                "
              >
                From cloud migration and infrastructure to security,
                optimization, and scalability, we focus on creating a cloud
                foundation that supports your business at every stage.
              </p>
            </div>

            {/* Visual */}
            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--surface-blue)]
                  text-[var(--brand-blue)]
                  shadow-[var(--shadow-sm)]
                "
              >
                <Cloud size={21} />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-[var(--text-primary)]
                  "
                >
                  Cloud Ready
                </p>

                <p
                  className="
                    mt-0.5
                    text-xs
                    text-[var(--text-muted)]
                  "
                >
                  Secure · Scalable · Reliable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Small Bottom Statement */}
        <div className="mt-10 flex justify-center">
          <div
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[var(--text-muted)]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[var(--brand-blue)]
              "
            />

            Build · Secure · Scale
          </div>
        </div>
      </div>
    </section>
  );
}