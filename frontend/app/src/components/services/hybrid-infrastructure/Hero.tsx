"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  const trustPoints = [
    "Cloud & on-premise integration",
    "Secure hybrid architecture",
    "Flexible infrastructure",
  ];

  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-14 pb-16 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:pb-24">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl animate-reveal">
            <div className="section-eyebrow mb-6">
              Hybrid Infrastructure
            </div>

            <h1 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-[3.45rem]">
              Connect your infrastructure.
              <span className="text-brand-gradient"> Keep your business moving.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
              Build a reliable hybrid infrastructure that brings cloud and
              on-premise environments together. We design secure, flexible,
              and scalable systems that give your business the right balance
              of performance, control, and agility.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-brand group"
              >
                Get a Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="btn-outline-brand"
              >
                View Our Portfolio
              </Link>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[var(--brand-pink)]"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[680px] lg:translate-x-8 animate-reveal">
            {/* Background glow */}
            <div className="blue-glow pointer-events-none absolute inset-8 rounded-full opacity-60" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[var(--brand-blue-light)]/20" />
            <div className="pointer-events-none absolute -right-1 -top-1 h-20 w-20 rounded-full border border-[var(--brand-pink-light)]/30" />

            {/* Main image */}
            <div className="image-hover relative z-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lg)]">
              <Image
                src="/hybrid-infrastructure.png"
                alt="Hybrid Infrastructure"
                width={900}
                height={700}
                priority
                className="h-auto w-full object-contain"
              />

              {/* Image bottom information */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[var(--shadow-md)] backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                      Hybrid Infrastructure
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                      Cloud + On-Premise. One connected environment.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] sm:flex">
                    <Network size={19} />
                  </div>
                </div>
              </div>
            </div>

            {/* TOP RIGHT CARD */}
            <div className="glass absolute -right-3 top-8 z-20 hidden w-[190px] rounded-2xl p-4 sm:block md:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Cloud size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Cloud Connected
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
                    Flexible infrastructure
                  </p>
                </div>
              </div>
            </div>

            {/* LEFT FLOATING CARD */}
            <div className="glass absolute -left-4 top-[34%] z-20 hidden w-[210px] rounded-2xl p-4 sm:block md:-left-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Secure by Design
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[var(--text-muted)]">
                    Protected workloads, networks and access.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM RIGHT CARD */}
            <div className="glass absolute -bottom-5 right-4 z-20 hidden w-[210px] rounded-2xl p-4 sm:block md:right-0">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Database size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Connected Systems
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[var(--text-muted)]">
                    Data and workloads working together.
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL STATUS INDICATOR */}
            <div className="absolute bottom-6 left-4 z-20 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-[var(--shadow-sm)] sm:bottom-8 sm:left-8">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)] animate-soft-pulse" />
              <span className="text-[11px] font-medium text-[var(--text-secondary)]">
                Infrastructure Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom brand line */}
      <div className="brand-line relative z-10" />
    </section>
  );
}