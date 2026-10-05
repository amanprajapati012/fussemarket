"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Figma,
  Layers3,
  MousePointer2,
  Palette,
  Sparkles,
  Smartphone,
  WandSparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Palette,
    text: "Creative and consistent visual systems",
  },
  {
    icon: MousePointer2,
    text: "User-focused interface experiences",
  },
  {
    icon: Smartphone,
    text: "Responsive designs across every screen",
  },
];

export default function Hero() {
  return (
    <section
      className="
        hero-background
        relative
        min-h-[720px]
        overflow-hidden
        pt-28
        pb-20
        md:min-h-[760px]
        md:pt-32
        md:pb-24
      "
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(var(--text-primary)_1px,transparent_1px),linear-gradient(90deg,var(--text-primary)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Decorative Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-16
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--brand-pink)]
          opacity-[0.08]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--brand-blue)]
          opacity-[0.08]
          blur-[140px]
        "
      />

      <div className="container-premium relative z-10">
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.95fr_0.9fr]
            lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-2xl animate-reveal">
            {/* Eyebrow */}
            <div className="section-eyebrow mb-6">
              <Sparkles size={14} />
              UI / UX Design
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[620px]
                text-[clamp(2.7rem,5vw,4.5rem)]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                text-[var(--text-primary)]
              "
            >
              Design That
              <span className="block text-brand-gradient">
                People Love.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[570px]
                text-base
                leading-7
                text-[var(--text-secondary)]
                md:text-[17px]
                md:leading-8
              "
            >
              At{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                Fusse Market Pvt. Ltd.
              </span>
              , we create thoughtful UI/UX experiences that combine
              beautiful interfaces, intuitive interactions, and
              user-centered design to make every digital product easier
              to use and more engaging.
            </p>

            {/* Highlights */}
            <div className="mt-7 space-y-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-[var(--text-secondary)]
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--surface-pink)]
                        text-[var(--brand-pink)]
                        transition-all
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <Icon size={14} />
                    </span>

                    <span
                      className="
                        transition-colors
                        duration-300
                        group-hover:text-[var(--text-primary)]
                      "
                    >
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <Link
                href="#contact"
                className="btn-brand group"
              >
                Start Your Design

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="#services"
                className="btn-outline-brand group"
              >
                <Layers3
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                Explore Our Work
              </Link>
            </div>

            {/* Bottom Tags */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                text-xs
                text-[var(--text-muted)]
                md:text-sm
              "
            >
              <span className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--brand-pink)]
                  "
                />
                User Centric
              </span>

              <span className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--brand-blue)]
                  "
                />
                Modern Interfaces
              </span>

              <span className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--brand-pink)]
                  "
                />
                Responsive Design
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[560px]
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-44
                w-44
                rounded-full
                bg-[var(--brand-pink)]
                opacity-[0.10]
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-12
                -left-10
                h-48
                w-48
                rounded-full
                bg-[var(--brand-blue)]
                opacity-[0.10]
                blur-3xl
              "
            />

            {/* Main Image Card */}
            <div
              className="
                premium-card
                relative
                z-10
                overflow-visible
                rounded-[var(--radius-xl)]
                p-3
                md:p-4
              "
            >
              <div
                className="
                  image-hover
                  relative
                  aspect-[4/4.15]
                  overflow-hidden
                  rounded-[var(--radius-lg)]
                  bg-[var(--surface-soft)]
                "
              >
                <Image
                  src="/ui-ux.jpg"
                  alt="UI UX Design Services by Fusse Market"
                  fill
                  priority
                  className="object-cover"
                  sizes="
                    (max-width: 768px) 90vw,
                    (max-width: 1200px) 48vw,
                    560px
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--brand-blue-dark)]
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                />

                {/* Image Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    md:p-7
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[var(--surface)]
                      text-[var(--brand-pink)]
                      shadow-[var(--shadow-md)]
                    "
                  >
                    <WandSparkles size={20} />
                  </div>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[var(--surface)]
                      opacity-80
                    "
                  >
                    Creative Experience
                  </p>

                  <h2
                    className="
                      mt-2
                      max-w-[390px]
                      text-2xl
                      font-semibold
                      leading-tight
                      tracking-[-0.025em]
                      text-[var(--surface)]
                      md:text-[28px]
                    "
                  >
                    Interfaces designed
                    <span className="block">
                      around people.
                    </span>
                  </h2>
                </div>
              </div>

              {/* Bottom Mini Cards */}
              <div
                className="
                  mt-3
                  grid
                  grid-cols-3
                  gap-2
                "
              >
                <MiniStat
                  icon={Figma}
                  value="UI Design"
                  label="Creative"
                />

                <MiniStat
                  icon={MousePointer2}
                  value="UX Flow"
                  label="Intuitive"
                />

                <MiniStat
                  icon={Smartphone}
                  value="Responsive"
                  label="Every Screen"
                />
              </div>
            </div>

            {/* Floating Card - Design System */}
            <div
              className="
                glass
                absolute
                -left-5
                top-16
                z-20
                hidden
                w-40
                rounded-2xl
                p-4
                shadow-[var(--shadow-md)]
                transition-transform
                duration-500
                hover:-translate-y-1
                sm:block
                lg:-left-12
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-[var(--surface-pink)]
                  text-[var(--brand-pink)]
                "
              >
                <Palette size={17} />
              </div>

              <p
                className="
                  mt-3
                  text-[11px]
                  text-[var(--text-muted)]
                "
              >
                Design System
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                Consistent
              </p>

              <div
                className="
                  mt-3
                  flex
                  gap-1.5
                "
              >
                <span
                  className="
                    h-5
                    w-5
                    rounded-md
                    bg-[var(--brand-pink)]
                  "
                />

                <span
                  className="
                    h-5
                    w-5
                    rounded-md
                    bg-[var(--brand-pink-light)]
                  "
                />

                <span
                  className="
                    h-5
                    w-5
                    rounded-md
                    bg-[var(--brand-blue)]
                  "
                />

                <span
                  className="
                    h-5
                    w-5
                    rounded-md
                    bg-[var(--brand-blue-light)]
                  "
                />
              </div>
            </div>

            {/* Floating Card - User Experience */}
            <div
              className="
                glass
                absolute
                -bottom-6
                -right-4
                z-20
                hidden
                w-48
                rounded-2xl
                p-4
                shadow-[var(--shadow-md)]
                transition-transform
                duration-500
                hover:-translate-y-1
                sm:block
                lg:-right-10
              "
            >
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[var(--surface-blue)]
                    text-[var(--brand-blue)]
                  "
                >
                  <MousePointer2 size={17} />
                </div>

                <CheckCircle2
                  size={17}
                  className="text-[var(--brand-blue)]"
                />
              </div>

              <p
                className="
                  mt-3
                  text-[11px]
                  text-[var(--text-muted)]
                "
              >
                User Experience
              </p>

              <p
                className="
                  mt-1
                  text-xl
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                Simple & Clear
              </p>
            </div>

            <div
              className="
                pointer-events-none
                absolute
                -bottom-12
                left-1/3
                h-28
                w-28
                rounded-full
                bg-[var(--brand-pink)]
                opacity-[0.08]
                blur-3xl
              "
            />
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-2
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-[var(--text-muted)]
          md:flex
        "
      >
        <span
          className="
            h-1
            w-1
            rounded-full
            bg-[var(--brand-pink)]
          "
        />

        Explore Creative Experiences
      </div>
    </section>
  );
}

function MiniStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Figma;
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        group
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--surface-soft)]
        p-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--border-dark)]
        hover:bg-[var(--surface)]
      "
    >
      <Icon
        size={15}
        className="
          text-[var(--brand-pink)]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <p
        className="
          mt-2
          text-xs
          font-semibold
          text-[var(--text-primary)]
        "
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          text-[10px]
          text-[var(--text-muted)]
        "
      >
        {label}
      </p>
    </div>
  );
}