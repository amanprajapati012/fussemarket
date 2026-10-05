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
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[24%] h-2 w-2 rounded-full bg-[var(--brand-pink)]/50" />

        <div className="absolute bottom-[18%] left-[24%] h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)]/50" />

        <div className="absolute right-[14%] top-[16%] h-2 w-2 rounded-full bg-[var(--brand-blue)]/40" />

        <div className="absolute left-[5%] top-1/2 h-px w-20 bg-gradient-to-r from-transparent to-[var(--brand-pink)]/20" />

        <div className="absolute right-[5%] top-1/3 h-px w-24 bg-gradient-to-l from-transparent to-[var(--brand-blue)]/20" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-14 pb-16 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:pb-24">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="section-eyebrow">
              Cloud Strategy & Infrastructure Consulting
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-[4.15rem]">
              Build a cloud foundation
              <span className="text-brand-gradient">
                {" "}
                ready for what&apos;s next.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
              Plan, modernize, and optimize your cloud infrastructure with a
              strategy built around your business. We help organizations
              create secure, scalable, and cost-conscious cloud environments
              that support long-term growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-brand group"
              >
                Get a Consultant

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="btn-outline-brand group"
              >
                View Our Portfolio

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                "Cloud architecture",
                "Infrastructure modernization",
                "Security & cost optimization",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm leading-5 text-[var(--text-secondary)]"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[var(--brand-pink)]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[740px] lg:translate-x-8">
            {/* Glows */}
            <div className="pointer-events-none absolute -right-16 top-0 h-96 w-96 rounded-full bg-[var(--brand-blue)]/15 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-16 -left-12 h-80 w-80 rounded-full bg-[var(--brand-pink)]/15 blur-3xl" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-6 top-0 hidden h-32 w-32 rounded-full border border-[var(--brand-blue)]/15 lg:block" />

            <div className="pointer-events-none absolute -right-12 -top-6 hidden h-44 w-44 rounded-full border border-[var(--brand-pink)]/10 lg:block" />

            {/* Main Image Frame */}
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-lg)]">
              <div className="image-hover relative aspect-[1.08/1] overflow-hidden rounded-[calc(var(--radius-xl)-8px)] bg-[var(--surface-soft)]">
                <Image
                  src="/cloud-strategy-infrastructure-consulting.jpg"
                  alt="Cloud Strategy and Infrastructure Consulting"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/75 via-[var(--text-primary)]/10 to-transparent" />

                {/* Image Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass-dark rounded-2xl p-4 text-white backdrop-blur-xl md:p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Cloud size={21} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                          Cloud Infrastructure
                        </p>

                        <p className="mt-1 text-sm font-semibold md:text-base">
                          Secure. Scalable. Built for growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TOP LEFT CARD */}
            <div className="animate-floating absolute -left-5 top-10 hidden w-[205px] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-[var(--shadow-md)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Network size={20} />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Architecture
                  </p>

                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Connected systems
                  </p>
                </div>
              </div>
            </div>

            {/* LEFT BOTTOM CARD */}
            <div className="absolute -bottom-7 -left-3 hidden w-[215px] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-[var(--shadow-md)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Infrastructure
                  </p>

                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Secure by design
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT BOTTOM CARD */}
            <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 px-5 py-4 shadow-[var(--shadow-md)] backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Database size={18} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Cloud Ready
                  </p>

                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Ready to scale
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Nodes */}
            <div className="absolute -right-2 bottom-[25%] hidden h-3 w-3 rounded-full bg-[var(--brand-pink)] shadow-[0_0_0_7px_var(--brand-pink-soft)] lg:block" />

            <div className="absolute right-[16%] top-[-12px] hidden h-2.5 w-2.5 rounded-full bg-[var(--brand-blue)] shadow-[0_0_0_6px_var(--brand-blue-soft)] lg:block" />
          </div>
        </div>
      </div>

      {/* Bottom Brand Line */}
      <div className="container-premium">
        <div className="brand-line" />
      </div>
    </section>
  );
}