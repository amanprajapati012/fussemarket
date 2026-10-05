"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Apple,
  Layers3,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  "Modern Android & iOS applications",
  "Scalable cross-platform solutions",
  "Performance-focused app development",
];

export default function Hero() {
  return (
    <section
      className="
        hero-background
        relative
        min-h-[760px]
        overflow-hidden
      "
    >
      {/* =========================================================
          DECORATIVE ELEMENTS
         ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[22%]
          h-3
          w-3
          animate-soft-pulse
          rounded-full
          bg-[var(--brand-pink)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[28%]
          h-2
          w-2
          animate-soft-pulse
          rounded-full
          bg-[var(--brand-blue)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[42%]
          bottom-[18%]
          h-2
          w-2
          rounded-full
          bg-[var(--brand-pink)]
          opacity-60
        "
      />

      {/* =========================================================
          MAIN CONTAINER
         ========================================================= */}

      <div
        className="
          container-premium
          relative
          z-10
          flex
          min-h-[760px]
          items-center
          py-24
          pt-32
          lg:py-28
          lg:pt-36
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16
            lg:grid-cols-[1fr_0.92fr]
            lg:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
             ===================================================== */}

          <div className="animate-reveal max-w-2xl">
            {/* Eyebrow */}

            <div className="section-eyebrow mb-7">
              Mobile App Development
            </div>

            {/* Heading */}

            <h1
              className="
                max-w-[680px]
                text-[clamp(2.8rem,5.2vw,5rem)]
                font-medium
                leading-[1.02]
                tracking-[-0.045em]
                text-[var(--text-primary)]
              "
            >
              Apps built for

              <span
                className="
                  text-brand-gradient
                  block
                  font-semibold
                "
              >
                modern users.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[590px]
                text-[16px]
                leading-8
                text-[var(--text-secondary)]
                md:text-[17px]
              "
            >
              At{" "}
              <span
                className="
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                Fusse Market Pvt. Ltd.
              </span>
              , we create high-performance mobile applications that combine
              intuitive experiences, powerful technology, and scalable
              architecture to help your business grow.
            </p>

            {/* =====================================================
                HIGHLIGHTS
               ===================================================== */}

            <div className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <div
                  key={item}
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
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--surface-pink)]
                      text-[var(--brand-pink)]
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:shadow-[var(--shadow-sm)]
                    "
                  >
                    <CheckCircle2 size={14} />
                  </span>

                  <span
                    className="
                      transition-colors
                      duration-300
                      group-hover:text-[var(--text-primary)]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =====================================================
                BUTTONS
               ===================================================== */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-brand group"
              >
                Start Your App

                <ArrowRight
                  size={18}
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
                Explore Services

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* =====================================================
                TRUST LINE
               ===================================================== */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                text-[11px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[var(--text-muted)]
              "
            >
              <span>Strategy</span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[var(--brand-pink)]
                "
              />

              <span>Design</span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[var(--brand-blue)]
                "
              />

              <span>Development</span>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
             ===================================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[570px]
            "
          >
            {/* =================================================
                PINK GLOW
               ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -left-12
                top-10
                h-52
                w-52
                rounded-full
                bg-[var(--brand-pink)]
                opacity-20
                blur-3xl
              "
            />

            {/* =================================================
                BLUE GLOW
               ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-10
                -right-10
                h-60
                w-60
                rounded-full
                bg-[var(--brand-blue)]
                opacity-20
                blur-3xl
              "
            />

            {/* =================================================
                MAIN FLOATING VISUAL
               ================================================= */}

            <div className="animate-floating relative">
              {/* Outer frame */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-5
                  rounded-[38px]
                  border
                  border-[var(--border)]
                  opacity-60
                "
              />

              {/* =================================================
                  MAIN CARD
                 ================================================= */}

              <div
                className="
                  premium-card
                  relative
                  overflow-hidden
                  rounded-[var(--radius-xl)]
                  bg-[var(--surface)]
                  p-3
                "
              >
                {/* =================================================
                    IMAGE
                   ================================================= */}

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
                    src="/App-development.jpg"
                    alt="Mobile App Development by Fusse Market"
                    fill
                    priority
                    className="
                      object-cover
                    "
                    sizes="
                      (max-width: 1024px) 90vw,
                      540px
                    "
                  />

                  {/* Image Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[var(--brand-blue-dark)]/85
                      via-transparent
                      to-transparent
                      opacity-90
                    "
                  />

                  {/* =================================================
                      IMAGE CONTENT
                     ================================================= */}

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
                    {/* Icon */}

                    <div
                      className="
                        mb-3
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[var(--surface)]/90
                        text-[var(--brand-pink)]
                        shadow-lg
                        backdrop-blur-md
                      "
                    >
                      <Smartphone size={20} />
                    </div>

                    {/* Small Label */}

                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/70
                      "
                    >
                      Mobile Experience
                    </p>

                    {/* Main Visual Heading */}

                    <h2
                      className="
                        mt-2
                        max-w-[390px]
                        text-2xl
                        font-medium
                        leading-tight
                        tracking-[-0.025em]
                        text-white
                        md:text-[28px]
                      "
                    >
                      Built for your

                      <span className="block font-semibold">
                        next digital experience.
                      </span>
                    </h2>
                  </div>
                </div>

                {/* =================================================
                    CAPABILITY BAR
                   ================================================= */}

                <div className="px-1 pb-1 pt-3">
                  <div
                    className="
                      grid
                      grid-cols-3
                      divide-x
                      divide-[var(--border)]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--surface-soft)]
                    "
                  >
                    <Capability
                      icon={<Smartphone size={16} />}
                      title="Mobile"
                      subtitle="First"
                    />

                    <Capability
                      icon={<Zap size={16} />}
                      title="Fast"
                      subtitle="Performance"
                    />

                    <Capability
                      icon={<Layers3 size={16} />}
                      title="Scale"
                      subtitle="Ready"
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING TOP BADGE
                 ================================================= */}

              <div
                className="
                  glass
                  absolute
                  -right-5
                  -top-7
                  hidden
                  w-[200px]
                  rounded-2xl
                  p-4
                  shadow-[var(--shadow-md)]
                  transition-transform
                  duration-500
                  hover:-translate-y-1
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[var(--surface-pink)]
                      text-[var(--brand-pink)]
                    "
                  >
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-medium
                        text-[var(--text-muted)]
                      "
                    >
                      Experience
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-sm
                        font-semibold
                        text-[var(--text-primary)]
                      "
                    >
                      Intuitive UI
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING BOTTOM BADGE
                 ================================================= */}

              <div
                className="
                  glass
                  absolute
                  -bottom-6
                  -left-5
                  hidden
                  rounded-2xl
                  px-4
                  py-3
                  shadow-[var(--shadow-md)]
                  transition-transform
                  duration-500
                  hover:-translate-y-1
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[var(--surface-blue)]
                      text-[var(--brand-blue)]
                    "
                  >
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-[var(--text-muted)]
                      "
                    >
                      Built for
                    </p>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-[var(--text-primary)]
                      "
                    >
                      Secure Growth
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING PLATFORM BADGE
                 ================================================= */}

              <div
                className="
                  glass
                  absolute
                  -right-7
                  bottom-16
                  hidden
                  rounded-2xl
                  px-4
                  py-3
                  shadow-[var(--shadow-md)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[var(--surface-soft)]
                      text-[var(--brand-blue)]
                    "
                  >
                    <Apple size={17} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-[var(--text-muted)]
                      "
                    >
                      Platforms
                    </p>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-[var(--text-primary)]
                      "
                    >
                      Android + iOS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
         ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[var(--background)]
          to-transparent
        "
      />
    </section>
  );
}

/* ===============================================================
   CAPABILITY
   =============================================================== */

function Capability({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        group
        relative
        flex
        items-center
        justify-center
        gap-2.5
        px-3
        py-3.5
        transition-all
        duration-300
        hover:bg-[var(--surface)]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[var(--surface)]
          text-[var(--brand-pink)]
          shadow-[var(--shadow-sm)]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:bg-[var(--surface-pink)]
        "
      >
        {icon}
      </div>

      {/* Text */}

      <div className="min-w-0">
        <p
          className="
            text-xs
            font-semibold
            text-[var(--text-primary)]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            truncate
            text-[9px]
            uppercase
            tracking-[0.08em]
            text-[var(--text-muted)]
          "
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}