"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Scale,
  BriefcaseBusiness,
  Truck,
  Clapperboard,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Plane,
  Factory,
  Code2,
} from "lucide-react";

const sectors = [
  {
    number: "01",
    title: "Real Estate",
    description:
      "Digital platforms and intelligent technology solutions that help real estate businesses simplify operations and create stronger customer experiences.",
    points: ["Property Platforms", "Lead Management", "Digital Experiences"],
    icon: Building2,
    image: "/sector/Real-Estate.jpg",
  },
  {
    number: "02",
    title: "Legal",
    description:
      "Modern digital experiences and connected systems that help legal businesses streamline workflows and build stronger client relationships.",
    points: ["Legal Platforms", "Client Portals", "Workflow Solutions"],
    icon: Scale,
    image: "/sector/legal.jpg",
  },
  {
    number: "03",
    title: "Consulting",
    description:
      "Scalable technology solutions that help consulting firms communicate expertise, automate operations and deliver better client experiences.",
    points: ["Business Platforms", "Automation", "Client Solutions"],
    icon: BriefcaseBusiness,
    image: "/sector/consulting.jpg",
  },
  {
    number: "04",
    title: "Logistics & Transportation",
    description:
      "Connected digital systems for logistics businesses to improve visibility, manage operations and create efficient customer journeys.",
    points: ["Tracking Systems", "Fleet Solutions", "Automation"],
    icon: Truck,
    image: "/sector/logistic.jpg",
  },
  {
    number: "05",
    title: "Media & Entertainment",
    description:
      "Creative digital experiences and scalable technology built for modern media, entertainment and content-driven businesses.",
    points: ["Content Platforms", "Digital Experiences", "Audience Solutions"],
    icon: Clapperboard,
    image: "/sector/Media.jpg",
  },
  {
    number: "06",
    title: "Healthcare",
    description:
      "Secure and user-focused digital solutions that help healthcare organizations improve accessibility, communication and operational efficiency.",
    points: ["Healthcare Platforms", "Patient Solutions", "Digital Systems"],
    icon: HeartPulse,
    image: "/sector/healthcare.jpg",
  },
  {
    number: "07",
    title: "Education",
    description:
      "Engaging digital platforms that connect students, educators and institutions through modern learning experiences.",
    points: ["Learning Platforms", "Student Portals", "Education Apps"],
    icon: GraduationCap,
    image: "/sector/education.jpg",
  },
  {
    number: "08",
    title: "Banking & Fintech",
    description:
      "Secure and scalable financial technology solutions designed around trust, performance and seamless digital experiences.",
    points: ["Fintech Platforms", "Payment Solutions", "Financial Apps"],
    icon: Landmark,
    image: "/sector/banking.jpg",
  },
  {
    number: "09",
    title: "Retail & E-Commerce",
    description:
      "Conversion-focused commerce experiences that help brands sell smarter across web, mobile and connected digital channels.",
    points: ["E-Commerce", "Retail Platforms", "Customer Experience"],
    icon: ShoppingBag,
    image: "/sector/retail & e-commerce.jpg",
  },
  {
    number: "10",
    title: "Travel & Hospitality",
    description:
      "Digital experiences that make discovery, booking and customer engagement smoother for modern travel and hospitality brands.",
    points: ["Booking Platforms", "Travel Apps", "Guest Experience"],
    icon: Plane,
    image: "/sector/Travel & Hospitality.jpg",
  },
  {
    number: "11",
    title: "Manufacturing",
    description:
      "Technology solutions that connect processes, improve visibility and help manufacturing businesses operate more efficiently.",
    points: ["Business Systems", "Process Automation", "Digital Platforms"],
    icon: Factory,
    image: "/sector/manufacturing.jpg",
  },
  {
    number: "12",
    title: "IT & SaaS",
    description:
      "High-performance digital products and platforms built for technology companies that need to scale products and operations.",
    points: ["SaaS Platforms", "Web Applications", "API Systems"],
    icon: Code2,
    image: "/sector/it & Saas.jpg",
  },
];

type Sector = (typeof sectors)[number];

function SectorCard({
  sector,
  active,
  onClick,
}: {
  sector: Sector;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = sector.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative h-[410px] w-full shrink-0 overflow-hidden
        rounded-[28px] border text-left
        transition-all duration-700
        ease-[cubic-bezier(.22,1,.36,1)]
        md:h-[430px]
        ${
          active
            ? "border-[var(--brand-blue)] shadow-[0_24px_70px_rgba(0,0,0,0.15)] md:scale-[1.015]"
            : "border-[var(--border)] shadow-[var(--shadow-sm)]"
        }
      `}
    >
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src={sector.image}
          alt={sector.title}
          className={`
            h-full w-full object-cover
            transition-transform duration-1000
            ease-[cubic-bezier(.22,1,.36,1)]
            ${
              active
                ? "scale-100"
                : "scale-105 grayscale-[20%] group-hover:scale-100 group-hover:grayscale-0"
            }
          `}
        />

        {/* dark overlay */}
        <div
          className={`
            absolute inset-0 transition-all duration-700
            ${
              active
                ? "bg-black/45"
                : "bg-black/50 group-hover:bg-black/42"
            }
          `}
        />

        {/* brand tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/20 via-transparent to-[var(--brand-pink)]/20 mix-blend-screen" />

        {/* bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
      </div>

      {/* TOP */}
      <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-[0.22em] text-white/65">
          {sector.number}
        </span>

        <div
          className={`
            flex h-11 w-11 items-center justify-center
            rounded-full border border-white/20
            bg-white/10 text-white backdrop-blur-xl
            transition-all duration-500
            ${
              active
                ? "bg-white/20 rotate-0"
                : "group-hover:rotate-6 group-hover:bg-white/20"
            }
          `}
        >
          <Icon size={20} strokeWidth={1.6} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-pink-light)]">
          <span className="h-px w-6 bg-[var(--brand-pink-light)]" />
          Industry
        </div>

        <h3 className="max-w-[330px] text-[27px] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
          {sector.title}
        </h3>

        <p
          className={`
            mt-3 max-w-[480px] text-sm leading-6 text-white/75
            transition-all duration-500
            ${
              active
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            }
          `}
        >
          {sector.description}
        </p>

        {/* POINTS */}
        <div
          className={`
            mt-4 flex flex-wrap gap-2
            transition-all duration-500
            ${
              active
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            }
          `}
        >
          {sector.points.map((point) => (
            <span
              key={point}
              className="
                rounded-full border border-white/15
                bg-white/10 px-3 py-1.5
                text-[10px] font-medium text-white/85
                backdrop-blur-md
              "
            >
              {point}
            </span>
          ))}
        </div>

        {/* ARROW */}
        <div
          className={`
            absolute bottom-7 right-7
            flex h-11 w-11 items-center justify-center
            rounded-full border border-white/20
            bg-white/10 text-white backdrop-blur-xl
            transition-all duration-500
            ${
              active
                ? "translate-x-0 opacity-100"
                : "translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            }
          `}
        >
          <ArrowUpRight size={18} strokeWidth={1.8} />
        </div>
      </div>

      {/* ACTIVE LINE */}
      <div
        className={`
          absolute bottom-0 left-0 h-[3px]
          bg-[var(--gradient-brand)]
          transition-all duration-700
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </button>
  );
}

export default function Sectors() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const next =
      (index + sectors.length) % sectors.length;

    setActiveIndex(next);

    const rail = railRef.current;

    if (!rail) return;

    const card = rail.children[next] as HTMLElement;

    if (!card) return;

    const left =
      card.offsetLeft -
      (rail.clientWidth - card.clientWidth) / 2;

    rail.scrollTo({
      left,
      behavior: "smooth",
    });
  };

  const previous = () => {
    goTo(activeIndex - 1);
  };

  const next = () => {
    goTo(activeIndex + 1);
  };

  return (
    <section
      id="industries"
      className="
        relative overflow-hidden
        bg-[var(--background)]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* BACKGROUND LIGHTS */}

      <div
        className="
          pointer-events-none absolute
          -left-40 top-10
          h-[420px] w-[420px]
          rounded-full
          bg-[var(--brand-pink-soft)]
          opacity-35 blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 bottom-0
          h-[480px] w-[480px]
          rounded-full
          bg-[var(--brand-blue-soft)]
          opacity-40 blur-[130px]
        "
      />

      <div className="container-premium relative z-10">
        {/* HEADER */}

        <div className="mb-10 lg:mb-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              {/* EYEBROW */}

              <div
                className="
                  inline-flex items-center gap-2.5
                  text-[11px] font-semibold
                  uppercase tracking-[0.2em]
                  text-[var(--brand-pink)]
                "
              >
                <span className="h-0.5 w-7 rounded-full bg-[var(--brand-pink)]" />
                Sectors We Serve
              </div>

              {/* HEADING */}

              <h2
                className="
                  mt-4 max-w-2xl
                  text-3xl font-semibold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[var(--text-primary)]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Technology shaped around
                <br />
                <span className="text-brand-gradient">
                  every industry.
                </span>
              </h2>
            </div>

            {/* DESCRIPTION */}

            <div className="max-w-md lg:pb-1">
              <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                From emerging startups to established enterprises,
                we create digital experiences around the unique needs
                of every industry we serve.
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP / MOBILE CAROUSEL */}

        <div
          ref={railRef}
          className="
            flex gap-5
            overflow-x-auto
            scroll-smooth
            pb-5
            snap-x snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {sectors.map((sector, index) => (
            <div
              key={sector.number}
              className="
                w-[82vw] shrink-0 snap-center
                sm:w-[55vw]
                lg:w-[calc((100%-40px)/3)]
                lg:snap-none
              "
            >
              <SectorCard
                sector={sector}
                active={activeIndex === index}
                onClick={() => goTo(index)}
              />
            </div>
          ))}
        </div>

        {/* CONTROLS */}

        <div
          className="
            mt-6 flex flex-col gap-5
            border-t border-[var(--border)]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* PROGRESS */}

          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold tabular-nums text-[var(--text-primary)]">
              {sectors[activeIndex].number}
            </span>

            <div className="h-[2px] w-24 overflow-hidden rounded-full bg-[var(--border)] sm:w-32">
              <div
                className="
                  h-full rounded-full
                  bg-[var(--gradient-brand)]
                  transition-all duration-500
                "
                style={{
                  width: `${((activeIndex + 1) / sectors.length) * 100}%`,
                }}
              />
            </div>

            <span className="text-xs font-medium text-[var(--text-secondary)]">
              {String(sectors.length).padStart(2, "0")}
            </span>

            <span className="hidden text-xs text-[var(--text-secondary)] sm:block">
              Industries
            </span>
          </div>

          {/* ARROWS */}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous sector"
              className="
                group flex h-12 w-12 items-center justify-center
                rounded-full border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--text-primary)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[var(--brand-pink)]
                hover:text-[var(--brand-pink)]
                active:scale-95
              "
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next sector"
              className="
                group flex h-12 w-12 items-center justify-center
                rounded-full
                bg-[var(--brand-blue)]
                text-white
                shadow-[var(--shadow-md)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--brand-pink)]
                active:scale-95
              "
            >
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* BOTTOM LINE */}

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full bg-[var(--surface-pink)]
                text-[var(--brand-pink)]
              "
            >
              <Code2 size={15} strokeWidth={1.8} />
            </div>

            <span className="text-sm text-[var(--text-secondary)]">
              Technology solutions built for your industry.
            </span>
          </div>

          <a
            href="#contact"
            className="
              group inline-flex items-center gap-2
              text-sm font-semibold
              text-[var(--brand-blue)]
              transition-all duration-300
              hover:gap-3
              hover:text-[var(--brand-pink)]
            "
          >
            Discuss your industry

            <ArrowUpRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}