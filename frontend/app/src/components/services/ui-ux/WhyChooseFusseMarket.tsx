"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Layers3,
  MousePointer2,
  Palette,
  Sparkles,
  Smartphone,
  Target,
  WandSparkles,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Compass,
    title: "User-Centered Thinking",
    description:
      "We design around real users, their needs, behaviors, and expectations so every interaction feels natural and purposeful.",
    points: [
      "User-focused experiences",
      "Clear navigation",
      "Intuitive interactions",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Beautiful Visual Design",
    description:
      "We combine visual hierarchy, typography, spacing, colors, and modern aesthetics to create interfaces that feel polished and memorable.",
    points: [
      "Modern visual language",
      "Strong design hierarchy",
      "Consistent UI patterns",
    ],
  },
  {
    number: "03",
    icon: Target,
    title: "Business-Focused UX",
    description:
      "Great design should support business goals. We create experiences that make it easier for users to understand, engage, and take action.",
    points: [
      "Goal-driven interfaces",
      "Conversion-focused flows",
      "Meaningful user journeys",
    ],
  },
  {
    number: "04",
    icon: Layers3,
    title: "Scalable Design Systems",
    description:
      "We build structured design systems that keep your product consistent and make future pages, features, and updates easier to design.",
    points: [
      "Reusable components",
      "Consistent UI elements",
      "Scalable design structure",
    ],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Responsive Experiences",
    description:
      "Your interface should look and feel great everywhere. We design experiences that adapt smoothly across desktop, tablet, and mobile.",
    points: [
      "Mobile-first thinking",
      "Responsive layouts",
      "Cross-device consistency",
    ],
  },
  {
    number: "06",
    icon: WandSparkles,
    title: "Detail-Driven Execution",
    description:
      "From micro-interactions to spacing and component states, we pay attention to the small details that make a digital experience feel complete.",
    points: [
      "Thoughtful interactions",
      "Refined component states",
      "Pixel-conscious execution",
    ],
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-28">
      {/* Decorative Background */}
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
          opacity-[0.06]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[480px]
          w-[480px]
          rounded-full
          bg-[var(--brand-blue)]
          opacity-[0.06]
          blur-[140px]
        "
      />

      <div className="container-premium relative z-10">
        {/* Section Header */}
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
            Design With Purpose.
            <span className="block text-brand-gradient">
              Experience With Impact.
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
            We don't just make interfaces look beautiful. We create
            meaningful digital experiences that connect users with your
            product and turn complex interactions into simple journeys.
          </p>
        </div>

        {/* Intro Visual Strip */}
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
          <IntroItem
            icon={MousePointer2}
            title="Easy to Use"
            text="Every interaction has a purpose."
          />

          <IntroItem
            icon={Palette}
            title="Beautiful by Design"
            text="Visuals that strengthen your brand."
          />

          <IntroItem
            icon={CheckCircle2}
            title="Built for Results"
            text="Experiences designed around goals."
          />
        </div>

        {/* Cards */}
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
                <div
                  className="
                    absolute
                    right-6
                    top-5
                    text-4xl
                    font-semibold
                    tracking-[-0.05em]
                    text-[var(--surface-blue)]
                    transition-colors
                    duration-500
                    group-hover:text-[var(--surface-pink)]
                  "
                >
                  {reason.number}
                </div>

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--surface-pink)]
                    text-[var(--brand-pink)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <Icon size={21} />
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-semibold
                    tracking-[-0.025em]
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
                          text-[var(--brand-pink)]
                        "
                      />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Line */}
                <div
                  className="
                    mt-7
                    h-px
                    w-full
                    bg-[var(--border)]
                    transition-all
                    duration-500
                    group-hover:bg-[var(--border-dark)]
                  "
                />

                {/* Arrow */}
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
                    Our Approach
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
                      group-hover:border-[var(--brand-pink)]
                      group-hover:bg-[var(--surface-pink)]
                      group-hover:text-[var(--brand-pink)]
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
                    -bottom-16
                    -right-16
                    h-32
                    w-32
                    rounded-full
                    bg-[var(--brand-pink)]
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

        {/* Bottom Statement */}
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
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-40
              w-40
              rounded-full
              bg-[var(--brand-pink)]
              opacity-[0.07]
              blur-[80px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-7
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
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
                  text-[var(--brand-pink)]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--brand-pink)]
                  "
                />

                Design Philosophy
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
                Simple experiences.
                <span className="text-brand-gradient">
                  {" "}
                  Stronger connections.
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
                We bring strategy, creativity, and usability together to
                transform your ideas into digital experiences people can
                understand, enjoy, and remember.
              </p>
            </div>

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
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--surface-pink)]
                  text-[var(--brand-pink)]
                "
              >
                <WandSparkles size={19} />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-[var(--text-primary)]
                  "
                >
                  Crafted With Purpose
                </p>

                <p
                  className="
                    mt-0.5
                    text-xs
                    text-[var(--text-muted)]
                  "
                >
                  Every pixel has a reason.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroItem({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof MousePointer2;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        border-b
        border-[var(--border)]
        p-5
        transition-colors
        duration-300
        hover:bg-[var(--surface)]
        md:border-b-0
        md:border-r
        md:last:border-r-0
      "
    >
      <div
        className="
          flex
          h-10
          w-10
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
        <Icon size={18} />
      </div>

      <div>
        <h4
          className="
            text-sm
            font-semibold
            text-[var(--text-primary)]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1
            text-xs
            leading-5
            text-[var(--text-muted)]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}