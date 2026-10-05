"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute right-[6%] top-[15%] h-40 w-40 opacity-40" />

        <div className="absolute left-[43%] top-[18%] h-24 w-24 rounded-full border border-[var(--border)] opacity-50" />

        <div className="absolute bottom-[10%] left-[48%] h-16 w-16 rounded-full border border-[var(--border)] opacity-40" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-10 pb-16 md:pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6 lg:pb-24">
          {/* LEFT CONTENT */}
          <div className="animate-reveal relative z-20 max-w-2xl">
            {/* Eyebrow */}
            <div className="section-eyebrow mb-6">
              Custom Software Development
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[var(--text-primary)]">
              Software that fits{" "}
              <span className="text-brand-gradient">
                your business.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
              Have a process that still depends on spreadsheets, scattered
              tools, or too much manual work? We turn it into a custom
              software solution built around how your team actually operates.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/contact"
                className="btn-brand group"
              >
                Discuss Your Project

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
                Built around your workflow
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[var(--brand-pink)]"
                />
                Web & business applications
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[var(--brand-pink)]"
                />
                Ready for future growth
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[760px] lg:ml-auto lg:translate-x-8">
            {/* Main Glow */}
            <div className="pink-glow pointer-events-none absolute left-[10%] top-[15%] h-[65%] w-[65%] rounded-full opacity-60" />

            {/* Main Visual Area */}
            <div className="relative aspect-square">
              {/* Outer Rings */}
              <div className="absolute inset-[3%] rounded-full border border-[var(--border)] opacity-70" />

              <div className="absolute inset-[9%] rounded-full border border-[var(--border)] opacity-60" />

              <div className="absolute inset-[15%] rounded-full border border-[var(--border)] opacity-40" />

              {/* TOP RIGHT BADGE */}
              <div className="animate-floating glass absolute right-[0%] top-[5%] z-30 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[var(--shadow-md)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-blue)]">
                  <Code2
                    size={18}
                    className="text-[var(--brand-blue)]"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-[var(--text-muted)]">
                    Built around
                  </p>

                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Your business
                  </p>
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className="glass absolute inset-[10%] overflow-hidden rounded-[var(--radius-xl)] p-2 shadow-[var(--shadow-lg)]">
                <div className="image-hover relative h-full w-full overflow-hidden rounded-[calc(var(--radius-xl)-8px)]">
                  <Image
                    src="/custom-software.jpg"
                    alt="Custom software development"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 680px"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/75 via-[var(--text-primary)]/5 to-transparent" />

                  {/* Image Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-dark rounded-2xl p-5">
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <p className="text-xs font-medium text-white/60">
                            Custom solution
                          </p>

                          <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                            From idea to a working product
                          </p>
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <Code2
                            size={20}
                            className="text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LEFT FLOATING CARD */}
              <div
                className="animate-floating glass absolute bottom-[12%] left-[-2%] z-30 w-[200px] rounded-2xl p-4 shadow-[var(--shadow-md)]"
                style={{ animationDelay: "1s" }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-blue)]">
                    <Layers3
                      size={18}
                      className="text-[var(--brand-blue)]"
                    />
                  </div>

                  <span className="rounded-full bg-[var(--surface-pink)] px-2.5 py-1 text-[10px] font-semibold text-[var(--brand-pink)]">
                    CUSTOM
                  </span>
                </div>

                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Your process
                </p>

                <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                  Designed around the way your business operates.
                </p>
              </div>

              {/* BOTTOM RIGHT CARD */}
              <div
                className="animate-floating glass absolute bottom-[3%] right-[0%] z-30 rounded-2xl px-4 py-3 shadow-[var(--shadow-md)]"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-pink)]">
                    <CheckCircle2
                      size={17}
                      className="text-[var(--brand-pink)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Development
                    </p>

                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Built to evolve
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Nodes */}
              <div className="absolute left-[12%] top-[17%] h-3 w-3 rounded-full bg-[var(--brand-pink)] shadow-[0_0_0_6px_var(--surface-pink)]" />

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