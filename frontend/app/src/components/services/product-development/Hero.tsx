"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  Rocket,
  Smartphone,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[var(--brand-pink)]/50" />

        <div className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)]/50" />

        <div className="absolute right-[12%] top-[18%] h-2 w-2 rounded-full bg-[var(--brand-blue)]/40" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:pb-24">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-2xl animate-reveal">
            {/* Eyebrow */}
            <div className="section-eyebrow">
              Product Development
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Turn your idea into a
              <span className="text-brand-gradient">
                {" "}
                product people use.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
              From product strategy and user experience to development and
              launch, we build digital products that are clear to use,
              reliable to run, and ready to grow with your business.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Link href="/contact" className="btn-brand group">
                Build Your Product

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                "Product strategy",
                "Web & mobile products",
                "Built to scale",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[var(--brand-pink)]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[720px] lg:translate-x-8">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-10 top-8 h-80 w-80 rounded-full bg-[var(--brand-blue)]/15 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-8 -left-12 h-72 w-72 rounded-full bg-[var(--brand-pink)]/15 blur-3xl" />

            {/* Decorative Rings */}
            <div className="pointer-events-none absolute -right-5 top-2 hidden h-28 w-28 rounded-full border border-[var(--brand-blue)]/15 lg:block" />

            <div className="pointer-events-none absolute -right-9 -top-[10px] hidden h-36 w-36 rounded-full border border-[var(--brand-pink)]/10 lg:block" />

            {/* Main Image Frame */}
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-lg)]">
              <div className="image-hover relative aspect-[1.08/1] overflow-hidden rounded-[calc(var(--radius-xl)-8px)] bg-[var(--surface-soft)]">
                <Image
                  src="/product-development.jpg"
                  alt="Product Development"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/65 via-transparent to-transparent" />

                {/* Bottom Image Information */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass-dark rounded-2xl p-4 text-white backdrop-blur-xl md:p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Rocket size={19} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                          Product Journey
                        </p>

                        <p className="mt-1 text-sm font-semibold md:text-base">
                          Idea → Build → Launch → Scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TOP FLOATING CARD */}
            <div className="animate-floating absolute -left-5 top-10 hidden w-[190px] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-[var(--shadow-md)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Layers3 size={20} />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Product
                  </p>

                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Strategy first
                  </p>
                </div>
              </div>
            </div>

            {/* LEFT BOTTOM CARD */}
            <div className="absolute -bottom-7 -left-3 hidden w-[205px] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-[var(--shadow-md)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Smartphone size={20} />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Experience
                  </p>

                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Web & Mobile
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT BOTTOM CARD */}
            <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 px-5 py-4 shadow-[var(--shadow-md)] backdrop-blur-xl] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Code2 size={18} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Development
                  </p>

                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Built to evolve
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Nodes */}
            <div className="absolute -right-2 bottom-[24%] hidden h-3 w-3 rounded-full bg-[var(--brand-pink)] shadow-[0_0_0_7px_var(--brand-pink-soft)] lg:block" />

            <div className="absolute right-[15%] top-[-12px] hidden h-2.5 w-2.5 rounded-full bg-[var(--brand-blue)] shadow-[0_0_0_6px_var(--brand-blue-soft)] lg:block" />
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