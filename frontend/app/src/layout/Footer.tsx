
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const branches = [
 
  {
    city: "Lucknow",
    address: "Ruchi Khand 2, Near Priyamm Plaza",
  },
  {
    city: "Mohali",
    address: "Punjab, India",
  },
  {
    city: "Greater Noida",
    address: "Uttar Pradesh, India",
  },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "Web Development",
    href: "/services/web-development",
  },
  {
    name: "App Development",
    href: "/services/app-development",
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
  },
  {
    name: "Software Solutions",
    href: "/services/software-solutions",
  },
];

export default function Footer() {
  return (
    <footer className="dark-section relative overflow-hidden">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Pink glow */}
        <div
          className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full blur-3xl opacity-20"
          style={{
            background: "var(--brand-pink)",
          }}
        />

        {/* Blue glow */}
        <div
          className="absolute -right-52 top-20 h-[600px] w-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "var(--brand-blue)",
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute bottom-[-300px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl opacity-10"
          style={{
            background: "var(--brand-pink)",
          }}
        />

        {/* Dot pattern */}
        <div className="dot-grid absolute inset-0 opacity-[0.08]" />

        {/* Soft vertical line */}
        <div
          className="absolute left-[8%] top-0 hidden h-full w-px opacity-10 lg:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--brand-pink), transparent)",
          }}
        />

        <div
          className="absolute right-[8%] top-0 hidden h-full w-px opacity-10 lg:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--brand-blue), transparent)",
          }}
        />
      </div>

      <div className="container-premium relative z-10">
        {/* =====================================================
            TOP CTA
        ====================================================== */}

        <div className="border-b border-white/10 py-14 md:py-20">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.045] px-6 py-10 backdrop-blur-xl md:px-10 md:py-14 lg:px-14">
            {/* CTA glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl opacity-20"
              style={{
                background: "var(--brand-pink)",
              }}
            />

            <div
              className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full blur-3xl opacity-20"
              style={{
                background: "var(--brand-blue)",
              }}
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: "var(--brand-pink)",
                      boxShadow: "0 0 18px var(--brand-pink)",
                    }}
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Let&apos;s Build Something
                  </span>
                </div>

                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Have an idea?
                  <br />
                  <span className="text-brand-gradient">
                    Let&apos;s make it real.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                  From websites and mobile applications to complete digital
                  solutions, we create experiences designed to help your
                  business move forward.
                </p>
              </div>

              <Link
                href="/contact"
                className="group btn-brand w-fit shrink-0"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* ===================================================
              BRAND
          ==================================================== */}

          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div
                className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] shadow-[var(--shadow-lg)]"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: "var(--gradient-brand)",
                  }}
                />

                <Image
                  src="/logo.png"
                  alt="Fusse Market"
                  width={48}
                  height={48}
                  className="relative h-10 w-10 object-contain"
                  priority
                />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  Fusse Market
                </h2>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                  Technology & Digital Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Building modern digital experiences and technology solutions
              that help businesses grow, connect and move forward.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-2">
              <Link
                href="#"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xs font-bold text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-pink)] hover:bg-[var(--brand-pink)] hover:text-white"
              >
                IG
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-bold text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white"
              >
                f
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xs font-bold text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white"
              >
                in
              </Link>

              <Link
                href="#"
                aria-label="X"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xs font-bold text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-pink)] hover:bg-[var(--brand-pink)] hover:text-white"
              >
                X
              </Link>
            </div>
          </div>

          {/* ===================================================
              QUICK LINKS
          ==================================================== */}

          <div className="lg:col-span-2">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Navigation
            </p>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span
                      className="h-1 w-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: "var(--brand-pink)",
                      }}
                    />

                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================
              SERVICES
          ==================================================== */}

          <div className="lg:col-span-3">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              What We Do
            </p>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span
                      className="h-1 w-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: "var(--brand-pink)",
                      }}
                    />

                    {service.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================
              CONTACT
          ==================================================== */}

          <div className="lg:col-span-3">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Get In Touch
            </p>

            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:fusemarket.fm@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--brand-pink)]"
                  style={{
                    background: "var(--surface-pink)",
                  }}
                >
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                   fusemarket.fm@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+91 8418818469"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--brand-blue)]"
                  style={{
                    background: "var(--surface-blue)",
                  }}
                >
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                    +91 8418818469
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRANCHES
        ====================================================== */}

      {/* =====================================================
    BRANCHES
====================================================== */}
<div className="border-t border-white/10 py-12">
  <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="section-eyebrow">
        Our Branches
      </p>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
        Find us across India.
      </h3>
    </div>

    <p className="max-w-md text-sm leading-6 text-white/40 sm:text-right">
      Our growing branch network helps us stay connected with clients
      and deliver technology solutions closer to you.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
    {branches.map((branch, index) => (
      <div
        key={branch.city}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]"
      >
        {/* Number */}
        <span className="absolute right-4 top-4 text-[10px] font-semibold tracking-[0.15em] text-white/20">
          0{index + 1}
        </span>

        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
            style={{
              background: "var(--surface-pink)",
              color: "var(--brand-pink)",
            }}
          >
            <MapPin size={17} />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              {branch.city}
            </h4>

            <p className="mt-1 text-xs leading-5 text-white/40">
              {branch.address}
            </p>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div
          className="mt-5 h-px w-0 transition-all duration-500 group-hover:w-full"
          style={{
            background: "var(--gradient-brand)",
          }}
        />
      </div>
    ))}
  </div>
</div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs text-white/35">
                © {new Date().getFullYear()} Fusse Market. All rights reserved.
              </p>

              <p className="mt-1 text-[10px] text-white/20">
                Technology • Design • Digital Innovation
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/privacy-policy"
                className="text-xs text-white/35 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-white/35 transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-[var(--brand-pink-light)]"
              >
                Contact Us
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

