"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute right-[5%] top-[14%] h-44 w-44 opacity-30" />

        <div className="absolute left-[48%] top-[12%] h-28 w-28 rounded-full border border-[var(--border)] opacity-40" />

        <div className="absolute bottom-[8%] right-[32%] h-20 w-20 rounded-full border border-[var(--border)] opacity-40" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:pb-24">
          {/* LEFT CONTENT */}
          <div className="animate-reveal relative z-20 max-w-2xl">
            {/* Eyebrow */}
            <div className="section-eyebrow mb-6">
              Enterprise Software Development
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[var(--text-primary)]">
              Software that keeps{" "}
              <span className="text-brand-gradient">
                your entire business connected.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
              Bring teams, operations, data, and customers onto one reliable
              digital system. We build enterprise software around the way your
              organization operates, with the flexibility to evolve as it
              grows.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/contact"
                className="btn-brand group"
              >
                Discuss Your Enterprise Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[var(--brand-pink)]"
                />
                Built for complex operations
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[var(--brand-pink)]"
                />
                Secure business systems
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[var(--brand-pink)]"
                />
                Designed for growth
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[780px] lg:ml-auto lg:translate-x-8">
            {/* Background Glow */}
            <div className="blue-glow pointer-events-none absolute left-[12%] top-[15%] h-[65%] w-[70%] rounded-full opacity-60" />

            <div className="relative aspect-square">
              {/* Outer Rings */}
              <div className="absolute inset-[3%] rounded-full border border-[var(--border)] opacity-60" />

              <div className="absolute inset-[9%] rounded-full border border-[var(--border)] opacity-50" />

              {/* TOP RIGHT STATUS CARD */}
              <div className="animate-floating glass absolute right-[-1%] top-[5%] z-30 rounded-2xl px-4 py-3 shadow-[var(--shadow-md)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-blue)]">
                    <ShieldCheck
                      size={18}
                      className="text-[var(--brand-blue)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[var(--text-muted)]">
                      Enterprise ready
                    </p>

                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Secure by design
                    </p>
                  </div>
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className="glass absolute inset-[8%] overflow-hidden rounded-[var(--radius-xl)] p-2 shadow-[var(--shadow-lg)]">
                <div className="image-hover relative h-full w-full overflow-hidden rounded-[calc(var(--radius-xl)-8px)]">
                  <Image
                    src="/enterprise-software-development.jpg"
                    alt="Enterprise software development"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 700px"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/80 via-[var(--text-primary)]/10 to-transparent" />

                  {/* Bottom Information */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-dark rounded-2xl p-5">
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <p className="text-xs font-medium text-white/60">
                            Enterprise platform
                          </p>

                          <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                            One system. Connected operations.
                          </p>
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <Workflow
                            size={20}
                            className="text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LEFT FLOATING ARCHITECTURE CARD */}
              <div
                className="animate-floating glass absolute bottom-[13%] left-[-2%] z-30 w-[210px] rounded-2xl p-4 shadow-[var(--shadow-md)]"
                style={{ animationDelay: "1s" }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-pink)]">
                    <Layers3
                      size={18}
                      className="text-[var(--brand-pink)]"
                    />
                  </div>

                  <span className="rounded-full bg-[var(--surface-blue)] px-2.5 py-1 text-[10px] font-semibold text-[var(--brand-blue)]">
                    ARCHITECTURE
                  </span>
                </div>

                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Connected systems
                </p>

                <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                  Teams, data, and workflows working together.
                </p>
              </div>

              {/* BOTTOM RIGHT DATABASE CARD */}
              <div
                className="animate-floating glass absolute bottom-[3%] right-[0%] z-30 rounded-2xl px-4 py-3 shadow-[var(--shadow-md)]"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-blue)]">
                    <Database
                      size={17}
                      className="text-[var(--brand-blue)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Infrastructure
                    </p>

                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Ready to scale
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Nodes */}
              <div className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-[var(--brand-pink)] shadow-[0_0_0_6px_var(--surface-pink)]" />

              <div className="absolute bottom-[25%] right-[8%] h-3 w-3 rounded-full bg-[var(--brand-blue)] shadow-[0_0_0_6px_var(--surface-blue)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}