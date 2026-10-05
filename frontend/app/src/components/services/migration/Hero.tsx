"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Layers3,
  Server,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    text: "Risk-managed migration",
  },
  {
    icon: Database,
    text: "Data integrity & security",
  },
  {
    icon: CheckCircle2,
    text: "Business continuity",
  },
];

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-14 pb-16 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:pb-24">
          {/* Left Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="animate-reveal">
              <span className="section-eyebrow">
                Migration Services
              </span>
            </div>

            <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Seamless, secure, and{" "}
              <span className="text-brand-gradient">
                risk-managed migration.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base">
              We help businesses migrate systems, data, applications, and
              platforms with a structured approach designed to minimize risk,
              protect data integrity, and maintain business continuity
              throughout every migration engagement.
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

            {/* Trust Points */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:max-w-2xl">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="text-xs font-medium leading-5 text-[var(--text-secondary)]">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[700px] lg:translate-x-8">
            {/* Decorative Glows */}
            <div className="pointer-events-none absolute -right-10 top-8 h-64 w-64 rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />

            <div className="pointer-events-none absolute -left-8 bottom-10 h-56 w-56 rounded-full bg-[var(--brand-pink)]/10 blur-3xl" />

            {/* Outer Ring */}
            <div className="pointer-events-none absolute -inset-5 rounded-[42px] border border-[var(--brand-blue)]/10" />

            <div className="relative">
              {/* Main Image */}
              <div className="image-hover relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-lg)]">
                <div className="relative aspect-[1.08/1] overflow-hidden rounded-[30px] bg-[var(--surface-soft)]">
                  <Image
                    src="/cloud-migeration.jpg"
                    alt="Migration Services"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  {/* Image Bottom Information */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-blue)] shadow-[var(--shadow-sm)]">
                          <Layers3 size={20} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                            Migration Services
                          </p>

                          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                            Planned. Secure. Business-ready.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Right Floating Card */}
              <div className="glass absolute -right-3 -top-6 hidden w-52 rounded-2xl p-4 shadow-[var(--shadow-md)] sm:block md:-right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">
                      Migration Approach
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                      Secure by Design
                    </p>
                  </div>
                </div>
              </div>

              {/* Left Floating Card */}
              <div className="glass absolute -left-3 top-24 hidden w-56 rounded-2xl p-4 shadow-[var(--shadow-md)] md:-left-8 md:block">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <Server size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Migration Scope
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-5 text-[var(--text-primary)]">
                      Systems, data & applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Right Status */}
              <div className="absolute -bottom-5 right-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:right-8">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-[var(--brand-pink)]" />

                    <CheckCircle2
                      size={18}
                      className="opacity-20"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      Migration
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                      Business Continuity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Label */}
            <div className="absolute -bottom-14 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 shadow-[var(--shadow-sm)] lg:flex">
              <Database
                size={15}
                className="text-[var(--brand-pink)]"
              />

              <span className="text-xs font-semibold text-[var(--text-secondary)]">
                Systems • Data • Applications • Platforms
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}