
"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cloud,
  Database,
  Globe,
  Smartphone,
  ShoppingCart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    href: "/services/Web-Development",
    description:
      "Modern, scalable and high-performance websites built around your business goals and customer experience.",
    points: [
      "Business Websites",
      "Custom Web Applications",
      "Modern UI/UX",
    ],
    image: "/web-development.jpg",
    featured: true,
  },
  {
    number: "02",
    icon: Smartphone,
    title: "App Development",
    href: "/services/App-Development",
    description:
      "Responsive and reliable mobile applications designed to provide a smooth experience across modern devices.",
    points: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
    ],
    image: "/App-development.jpg",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    href: "/solutions/ecommerce-solution",
    description:
      "Complete e-commerce solutions with secure payments, product management and conversion-focused experiences.",
    points: [
      "Online Stores",
      "Payment Integration",
      "Order Management",
    ],
    image: "/e-commerce.jpg",
  },
  {
    number: "04",
    icon: Globe,
    title: "Digital Solutions",
    href: "/services/Digital-Marketing",
    description:
      "Technology solutions that help businesses improve their online presence, workflow and customer engagement.",
    points: [
      "Business Automation",
      "Digital Platforms",
      "Custom Solutions",
    ],
    image: "/digital-marketing.jpg",
  },
  {
    number: "05",
    icon: Cloud,
    title: "Cloud Solutions",
    href: "/services/cloud-solution",
    description:
      "Secure and scalable cloud infrastructure designed to support growing applications and business operations.",
    points: [
      "Cloud Deployment",
      "Hosting Solutions",
      "Scalable Infrastructure",
    ],
    image: "/claude.jpg",
  },
  {
    number: "06",
    icon: Database,
    title: "Backend & API",
    href: "/services/backend-api",
    description:
      "Robust backend systems and APIs that keep your applications secure, connected and ready to scale.",
    points: [
      "REST APIs",
      "Database Systems",
      "Third-Party Integration",
    ],
    image: "/backend api.jpg",
  },
];

function ServiceCard({
  service,
  featured = false,
}: {
  service: (typeof services)[number];
  featured?: boolean;
}) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      aria-label={`Explore ${service.title}`}
      className="block h-full"
    >
      <article
        className={[
          "group relative isolate h-full overflow-hidden",
          "rounded-[var(--radius-xl)]",
          "border border-[var(--border)]",
          "bg-[var(--surface)]",
          "shadow-[var(--shadow-sm)]",
          "transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)]",
          "hover:-translate-y-2",
          "hover:border-[var(--brand-pink)]",
          "hover:shadow-[var(--shadow-lg)]",
          featured
            ? "min-h-[620px] lg:min-h-[650px]"
            : "min-h-[500px] lg:min-h-[580px]",
        ].join(" ")}
      >
        {/* =====================================================
            BACKGROUND IMAGE
        ====================================================== */}

        <div className="absolute inset-0 -z-20 overflow-hidden bg-[var(--surface-blue)]">
          <img
            src={service.image}
            alt={service.title}
            className="
              h-full
              w-full
              object-cover
              transition-all
              duration-1000
              ease-[cubic-bezier(.2,.8,.2,1)]
              group-hover:scale-110
              group-hover:saturate-110
            "
          />

          {/* Default Image Soft Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[var(--surface)]
              via-[var(--surface)]/65
              to-transparent
              opacity-95
              transition-opacity
              duration-700
              group-hover:opacity-0
            "
          />

          {/* Hover Dark Image Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-[var(--brand-blue-dark)]
              opacity-0
              transition-all
              duration-700
              group-hover:opacity-90
            "
          />

          {/* Hover Brand Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-[var(--gradient-brand)]
              opacity-0
              mix-blend-multiply
              transition-opacity
              duration-700
              group-hover:opacity-30
            "
          />

          {/* Image Shine */}

          <div
            className="
              absolute
              -left-1/2
              top-0
              h-full
              w-1/2
              -skew-x-12
              bg-[var(--surface)]/15
              blur-2xl
              transition-all
              duration-1000
              group-hover:left-[130%]
            "
          />
        </div>

        {/* =====================================================
            TOP NUMBER
        ====================================================== */}

        <div
          className="
            absolute
            right-7
            top-7
            z-20
            text-sm
            font-bold
            tracking-[0.15em]
            text-[var(--brand-blue-light)]
            transition-all
            duration-500
            group-hover:text-[var(--surface)]
          "
        >
          {service.number}
        </div>

        {/* =====================================================
            ICON
        ====================================================== */}

        <div
          className="
            absolute
            left-7
            top-7
            z-20
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface-pink)]
            text-[var(--brand-pink)]
            shadow-[var(--shadow-sm)]
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:rotate-[-4deg]
            group-hover:border-[var(--surface)]/30
            group-hover:bg-[var(--brand-pink)]
            group-hover:text-[var(--surface)]
          "
        >
          <Icon size={25} strokeWidth={1.8} />
        </div>

        {/* =====================================================
            NORMAL CONTENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            p-7
            transition-all
            duration-500
            ease-out
            group-hover:translate-y-5
            group-hover:opacity-0
            lg:p-8
          "
        >
          {/* Label */}

          <div className="mb-3 flex items-center justify-between">
            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[var(--brand-pink)]
              "
            >
              Service {service.number}
            </span>

            <Sparkles
              size={17}
              strokeWidth={1.7}
              className="text-[var(--brand-blue-light)]"
            />
          </div>

          {/* Title */}

          <h3
            className="
              max-w-[600px]
              text-2xl
              font-bold
              leading-tight
              tracking-[-0.025em]
              text-[var(--text-primary)]
              lg:text-3xl
            "
          >
            {service.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-[650px]
              text-sm
              leading-7
              text-[var(--text-secondary)]
            "
          >
            {service.description}
          </p>

          {/* Points */}

          <div className="mt-5 space-y-2.5">
            {service.points.map((point) => (
              <div
                key={point}
                className="
                  flex
                  items-center
                  gap-2.5
                  text-sm
                  text-[var(--text-secondary)]
                "
              >
                <CheckCircle2
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 text-[var(--brand-pink)]"
                />

                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Action */}

          <div
            className="
              mt-6
              flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[var(--brand-blue)]
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            <span>Explore Service</span>

            <ArrowUpRight size={18} strokeWidth={1.8} />
          </div>
        </div>

        {/* =====================================================
            HOVER CONTENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            z-30
            flex
            flex-col
            p-7
            opacity-0
            transition-all
            duration-500
            ease-out
            group-hover:translate-y-0
            group-hover:opacity-100
            lg:p-8
          "
        >
          {/* Hover Top */}

          <div className="flex items-center justify-between">
            <span
              className="
                text-xs
                font-bold
                tracking-[0.18em]
                text-[var(--surface)]
              "
            >
              {service.number}
            </span>

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--surface)]/30
                bg-[var(--surface)]/10
                text-[var(--surface)]
                backdrop-blur-md
              "
            >
              <Icon size={21} strokeWidth={1.7} />
            </div>
          </div>

          {/* Hover Bottom Content */}

          <div className="mt-auto">
            {/* Eyebrow */}

            <div
              className="
                mb-3
                flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[var(--brand-pink-light)]
              "
            >
              <span className="h-px w-6 bg-[var(--brand-pink-light)]" />

              Technology Solution
            </div>

            {/* Hover Title */}

            <h3
              className="
                max-w-[650px]
                text-3xl
                font-bold
                leading-[1.05]
                tracking-[-0.035em]
                text-[var(--surface)]
                lg:text-4xl
              "
            >
              {service.title}
            </h3>

            {/* Hover Description */}

            <p
              className="
                mt-4
                max-w-[650px]
                text-sm
                leading-7
                text-[var(--surface)]
                opacity-80
              "
            >
              {service.description}
            </p>

            {/* Hover Points */}

            <div className="mt-5 flex flex-wrap gap-2">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[var(--surface)]/25
                    bg-[var(--surface)]/10
                    px-3
                    py-2
                    text-[11px]
                    font-medium
                    text-[var(--surface)]
                    backdrop-blur-md
                  "
                >
                  <CheckCircle2
                    size={14}
                    className="text-[var(--brand-pink-light)]"
                  />

                  {point}
                </div>
              ))}
            </div>

            {/* Explore */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[var(--surface)]
              "
            >
              <span>Explore Service</span>

              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* =====================================================
            BORDER GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-40
            rounded-[var(--radius-xl)]
            border
            border-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:border-[var(--brand-pink)]/30
            group-hover:opacity-100
          "
        />
      </article>
    </Link>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        pt-10
        pb-20
        sm:pt-12
        sm:pb-24
        lg:pt-14
        lg:pb-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--brand-pink-soft)]
          opacity-60
          blur-[100px]
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
          bg-[var(--brand-blue-soft)]
          opacity-70
          blur-[110px]
        "
      />

      {/* Decorative Lines */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[35%]
          h-px
          w-full
          bg-[var(--border)]
          opacity-50
        "
      />

      <div className="container-premium relative z-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-10 lg:mb-12">
          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              text-[12px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[var(--brand-pink)]
            "
          >
            <span
              className="
                h-0.5
                w-7
                rounded-full
                bg-[var(--brand-pink)]
              "
            />

            Our Services
          </div>

          {/* Header Grid */}

          <div
            className="
              mt-5
              grid
              items-end
              gap-8
              lg:grid-cols-[1.25fr_.75fr]
              lg:gap-20
            "
          >
            {/* Heading */}

            <div>
              <h2
                className="
                  max-w-3xl
                  text-3xl
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-[var(--text-primary)]
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-[3.4rem]
                "
              >
                Technology solutions
                <br />

                <span className="text-brand-gradient">
                  built around your vision.
                </span>
              </h2>
            </div>

            {/* Description */}

            <div className="lg:pb-1">
              <p
                className="
                  max-w-xl
                  text-sm
                  leading-7
                  text-[var(--text-secondary)]
                  sm:text-base
                "
              >
                From digital experiences to powerful business systems, we
                build technology that looks exceptional, performs reliably
                and grows with your business.
              </p>

              <Link
                href="/contact"
                className="
                  group/link
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[var(--brand-blue)]
                  transition-all
                  duration-300
                  hover:gap-3
                  hover:text-[var(--brand-pink)]
                "
              >
                <span>Discuss your project</span>

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-0.5
                    group-hover/link:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ===================================================
            FEATURED SERVICE GRID
        =================================================== */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-[1.55fr_.72fr_.72fr]
          "
        >
          {/* Featured */}

          <ServiceCard
            service={services[0]}
            featured
          />

          {/* Service 02 */}

          <ServiceCard service={services[1]} />

          {/* Service 03 */}

          <ServiceCard service={services[2]} />
        </div>

        {/* ===================================================
            REMAINING SERVICES
        =================================================== */}

        <div
          className="
            mt-5
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.slice(3).map((service) => (
            <ServiceCard
              key={service.number}
              service={service}
            />
          ))}
        </div>

        {/* ===================================================
            CTA
        =================================================== */}

        <div
          className="
            group/cta
            relative
            mt-16
            overflow-hidden
            rounded-[var(--radius-lg)]
            border
            border-[var(--border)]
            bg-[var(--gradient-soft)]
            p-7
            shadow-[var(--shadow-md)]
            sm:p-9
            lg:p-11
          "
        >
          {/* CTA Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-40
              h-[350px]
              w-[350px]
              rounded-full
              bg-[var(--brand-pink-soft)]
              opacity-70
              blur-[80px]
              transition-transform
              duration-1000
              group-hover/cta:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              left-1/3
              h-[300px]
              w-[300px]
              rounded-full
              bg-[var(--brand-blue-soft)]
              opacity-60
              blur-[80px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-start
              justify-between
              gap-8
              lg:flex-row
              lg:items-center
            "
          >
            {/* CTA Content */}

            <div className="flex items-start gap-5">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[var(--surface)]
                  text-[var(--brand-pink)]
                  shadow-[var(--shadow-sm)]
                "
              >
                <ShieldCheck
                  size={25}
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[var(--brand-pink)]
                  "
                >
                  Have a project in mind?
                </span>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    tracking-[-0.03em]
                    text-[var(--text-primary)]
                    sm:text-3xl
                  "
                >
                  Let's create something{" "}
                  <span className="text-brand-gradient">
                    remarkable.
                  </span>
                </h3>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    text-sm
                    leading-6
                    text-[var(--text-secondary)]
                  "
                >
                  Tell us what you are building and let our team turn your
                  idea into a polished digital experience.
                </p>
              </div>
            </div>

            {/* CTA Button */}

            <Link
              href="/contact"
              className="
                btn-brand
                shrink-0
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Start a Project

              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
