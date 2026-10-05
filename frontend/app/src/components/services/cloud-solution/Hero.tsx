"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  CloudCog,
  Database,
  LockKeyhole,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: CloudCog,
    text: "Scalable cloud infrastructure",
  },
  {
    icon: ShieldCheck,
    text: "Secure and reliable cloud solutions",
  },
  {
    icon: Zap,
    text: "Faster, smarter digital operations",
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

      {/* Background Glows */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--brand-blue)]
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
          bg-[var(--brand-pink)]
          opacity-[0.07]
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
              Cloud Solutions
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
              Scale Smarter
              <span className="block text-brand-gradient">
                With The Cloud.
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
              , we help businesses move to the cloud with secure,
              scalable, and reliable solutions designed to simplify
              infrastructure and support long-term digital growth.
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
                        bg-[var(--surface-blue)]
                        text-[var(--brand-blue)]
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
                Move To Cloud

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
                <Cloud
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                Explore Cloud Services
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
                    bg-[var(--brand-blue)]
                  "
                />
                Scalable
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
                Secure
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
                Reliable
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
            {/* Decorative Glows */}
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-44
                w-44
                rounded-full
                bg-[var(--brand-blue)]
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
                bg-[var(--brand-pink)]
                opacity-[0.09]
                blur-3xl
              "
            />

            {/* Main Image */}
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
                  src="/claude.jpg"
                  alt="Cloud Solutions by Fusse Market"
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
                      text-[var(--brand-blue)]
                      shadow-[var(--shadow-md)]
                    "
                  >
                    <Cloud size={21} />
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
                    Cloud Infrastructure
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
                    Build a stronger
                    <span className="block">
                      digital foundation.
                    </span>
                  </h2>
                </div>
              </div>

              {/* Mini Stats */}
              <div
                className="
                  mt-3
                  grid
                  grid-cols-3
                  gap-2
                "
              >
                <MiniStat
                  icon={Server}
                  value="Cloud"
                  label="Ready"
                />

                <MiniStat
                  icon={LockKeyhole}
                  value="Secure"
                  label="Protected"
                />

                <MiniStat
                  icon={Database}
                  value="Data"
                  label="Connected"
                />
              </div>
            </div>

            {/* Floating Card - Scalability */}
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
                  bg-[var(--surface-blue)]
                  text-[var(--brand-blue)]
                "
              >
                <CloudCog size={17} />
              </div>

              <p
                className="
                  mt-3
                  text-[11px]
                  text-[var(--text-muted)]
                "
              >
                Infrastructure
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                Ready to Scale
              </p>

              <div
                className="
                  mt-3
                  h-1.5
                  overflow-hidden
                  rounded-full
                  bg-[var(--surface-blue)]
                "
              >
                <div
                  className="
                    h-full
                    w-[82%]
                    rounded-full
                    bg-[var(--brand-blue)]
                  "
                />
              </div>
            </div>

            {/* Floating Card - Security */}
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
                    bg-[var(--surface-pink)]
                    text-[var(--brand-pink)]
                  "
                >
                  <ShieldCheck size={17} />
                </div>

                <Zap
                  size={17}
                  className="text-[var(--brand-pink)]"
                />
              </div>

              <p
                className="
                  mt-3
                  text-[11px]
                  text-[var(--text-muted)]
                "
              >
                Cloud Security
              </p>

              <p
                className="
                  mt-1
                  text-xl
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                Protected & Ready
              </p>
            </div>

            {/* Bottom Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-12
                left-1/3
                h-28
                w-28
                rounded-full
                bg-[var(--brand-blue)]
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
            bg-[var(--brand-blue)]
          "
        />

        Build Beyond Limits
      </div>
    </section>
  );
}

function MiniStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Server;
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
          text-[var(--brand-blue)]
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