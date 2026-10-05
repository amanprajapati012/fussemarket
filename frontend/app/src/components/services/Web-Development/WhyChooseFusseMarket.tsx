"use client";

import {
  Settings2,
  Smartphone,
  Gauge,
  SearchCheck,
  ShieldCheck,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

type Feature = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: "01",
    icon: Settings2,
    title: "Conversion-First Design",
    description:
      "Every layout, call-to-action, and user flow is strategically designed to turn visitors into customers while keeping your business goals at the center.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile-First Responsive Development",
    description:
      "We design and develop every website to deliver a seamless experience across mobiles, tablets, laptops, and larger screens.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance-Optimized Engineering",
    description:
      "Fast loading pages, optimized assets, clean development practices, and efficient code create a smooth experience that keeps visitors engaged.",
  },
  {
    number: "04",
    icon: SearchCheck,
    title: "SEO-Ready Architecture",
    description:
      "Semantic HTML, clean page structures, optimized metadata, crawl-friendly URLs, and technical best practices create a strong foundation for search visibility.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Accessibility & Compliance",
    description:
      "We build accessible digital experiences with thoughtful navigation, readable interfaces, keyboard-friendly interactions, and modern accessibility practices.",
  },
  {
    number: "06",
    icon: Layers3,
    title: "Scalable CMS Integration",
    description:
      "Flexible content management solutions give your team the freedom to update pages, publish content, and grow your website without constant developer dependency.",
  },
];

export default function WhyChooseFusseMarket() {
  return (
    <section
      id="why-choose-fusse-market"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-20
        md:py-28
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
         ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-24
          h-[360px]
          w-[360px]
          rounded-full
          bg-[var(--brand-pink)]
          opacity-[0.045]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[var(--brand-blue)]
          opacity-[0.055]
          blur-[120px]
        "
      />

      {/* Subtle Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(var(--brand-blue)_1px,transparent_1px),linear-gradient(90deg,var(--brand-blue)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="container-premium relative z-10">
        {/* =======================================================
            HEADER
           ======================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="section-eyebrow justify-center">
            Why Choose Fusse Market
          </div>

          {/* Heading */}
          <h2
            className="
              mt-4
              text-[clamp(2.1rem,4.5vw,3.5rem)]
              font-semibold
              leading-[1.08]
              tracking-[-0.045em]
              text-[var(--text-primary)]
            "
          >
            Web Design Built Around
            <span className="text-brand-gradient"> Your Business Goals</span>
          </h2>

          {/* Description */}
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
            We combine thoughtful design, modern development, and business
            strategy to create websites that look exceptional, perform fast,
            and help your brand grow.
          </p>
        </div>

        {/* =======================================================
            FEATURE CARDS
           ======================================================= */}

        <div
          className="
            mt-14
            grid
            gap-4
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   FEATURE CARD
   =============================================================== */

function FeatureCard({
  feature,
}: {
  feature: Feature;
}) {
  const Icon = feature.icon;

  return (
    <article
      className="
        group
        relative
        min-h-[310px]
        overflow-hidden
        rounded-[24px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-7
        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:border-[var(--brand-pink)]
        hover:bg-[var(--surface-soft)]
        hover:shadow-[var(--shadow-lg)]

        md:p-8
      "
    >
      {/* =========================================================
          HOVER GRADIENT
         ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-[var(--surface-pink)]
          via-transparent
          to-[var(--surface-blue)]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* =========================================================
          TOP NUMBER
         ========================================================= */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-xs
            font-semibold
            tracking-[0.18em]
            text-[var(--text-muted)]
            transition-colors
            duration-300
            group-hover:text-[var(--brand-pink)]
          "
        >
          {feature.number}
        </span>

        {/* Arrow */}
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface-soft)]
            text-[var(--text-muted)]
            transition-all
            duration-500
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:border-[var(--brand-pink)]
            group-hover:bg-[var(--surface-pink)]
            group-hover:text-[var(--brand-pink)]
          "
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </div>
      </div>

      {/* =========================================================
          ICON
         ========================================================= */}

      <div
        className="
          relative
          mt-9
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--surface-soft)]
          text-[var(--brand-blue)]
          transition-all
          duration-500

          group-hover:scale-110
          group-hover:rotate-[-3deg]
          group-hover:border-[var(--brand-pink)]
          group-hover:bg-[var(--surface-pink)]
          group-hover:text-[var(--brand-pink)]
        "
      >
        {/* Icon Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-[var(--brand-pink)]
            opacity-0
            blur-xl
            transition-opacity
            duration-500
            group-hover:opacity-20
          "
        />

        <Icon
          size={25}
          strokeWidth={1.7}
          className="
            relative
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* =========================================================
          CONTENT
         ========================================================= */}

      <div className="relative mt-7">
        <h3
          className="
            text-lg
            font-semibold
            leading-snug
            tracking-[-0.025em]
            text-[var(--text-primary)]
            transition-colors
            duration-300
            group-hover:text-[var(--brand-blue-dark)]
            md:text-xl
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-[var(--text-secondary)]
          "
        >
          {feature.description}
        </p>
      </div>

      {/* =========================================================
          BOTTOM ACCENT
         ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-7
          h-[2px]
          w-0
          bg-[var(--brand-pink)]
          transition-all
          duration-500
          group-hover:w-16
          md:left-8
        "
      />

      {/* Corner Accent */}
      <span
        className="
          absolute
          bottom-5
          right-5
          h-1.5
          w-1.5
          rounded-full
          bg-[var(--brand-pink)]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </article>
  );
}