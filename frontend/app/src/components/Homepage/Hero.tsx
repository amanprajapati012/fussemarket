"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero-background relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Pink Glow */}
        <div
          className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background: "rgba(196, 109, 141, 0.12)",
          }}
        />

        {/* Blue Glow */}
        <div
          className="absolute -right-32 top-10 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            background: "rgba(78, 97, 124, 0.12)",
          }}
        />

        {/* Center Glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(196,109,141,0.08), rgba(78,97,124,0.08))",
          }}
        />

        {/* Grid */}
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      {/* ================================================= */}
      {/* HERO CONTENT */}
      {/* ================================================= */}

      <div className="container-premium relative z-10 flex min-h-[calc(100vh-80px)] items-center">
        <div className="grid w-full items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-3xl">
            {/* Small Badge */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e5e8ee] bg-white/75 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{
                    background: "var(--brand-pink)",
                  }}
                />

                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{
                    background: "var(--brand-pink)",
                  }}
                />
              </span>

              <span className="text-sm font-medium text-[#596477]">
                Building Digital Experiences That Matter
              </span>

              <Sparkles
                size={14}
                style={{
                  color: "var(--brand-pink)",
                }}
              />
            </div>

            {/* Main Heading */}

            <h1 className="text-[clamp(3rem,6vw,6.3rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#172033]">
              Technology
              <br />

              <span className="text-brand-gradient">
                That Moves
              </span>

              <br />

              Business Forward.
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#596477] sm:text-lg sm:leading-8">
              We design and build modern digital solutions that connect
              people, technology and business. From powerful software to
              scalable digital experiences, we turn ideas into meaningful
              products.
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-brand group"
              >
                Start a Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="btn-outline-brand"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Points */}

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#596477]">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--brand-pink)",
                  }}
                />

                Strategy First
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--brand-blue)",
                  }}
                />

                Scalable Technology
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--brand-pink)",
                  }}
                />

                Long-Term Partnership
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}

          <HeroVisual />
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM SCROLL INDICATOR */}
      {/* ================================================= */}

      <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-[#8791a1]">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Scroll
          </span>

          <div className="h-9 w-px overflow-hidden bg-[#dfe3e9]">
            <div
              className="h-1/2 w-full animate-pulse"
              style={{
                background: "var(--brand-pink)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}