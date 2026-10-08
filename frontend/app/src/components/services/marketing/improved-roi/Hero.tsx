"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Target,
} from "lucide-react";

const trustPoints = [
  {
    icon: BarChart3,
    text: "Performance & ROI analysis",
  },
  {
    icon: Target,
    text: "Data-driven optimization",
  },
  {
    icon: TrendingUp,
    text: "Improved business outcomes",
  },
];

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pb-24">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="section-eyebrow mb-5">
              Improve ROI Services
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.7rem]">
              Make every technology investment{" "}
              <span className="text-brand-gradient">
                deliver more value.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              We help businesses measure, optimize, and improve the return
              they get from their technology, marketing, and digital
              initiatives. By combining performance analysis, data, and
              practical optimization, we help turn digital investments into
              measurable business results.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-brand">
                Get a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href="/portfolio" className="btn-outline-brand">
                View Our Portfolio
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:max-w-2xl">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-2.5"
                  >
                    <div className="mt-0.5 shrink-0 text-[var(--brand-pink)]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <span className="text-sm leading-6 text-[var(--text-secondary)]">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:translate-x-8">
            {/* Main Image */}
            <div className="image-hover relative min-h-[430px] overflow-hidden border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-lg)] sm:min-h-[500px] lg:min-h-[590px]">
              <Image
                src="/ImprovedROI(1).avif"
                alt="Improve ROI Services"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="glass rounded-[var(--radius-md)] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                        ROI Optimization
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                        Measure. Optimize. Improve.
                      </h3>

                      <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        Turning digital performance into business value.
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-pink-soft)] text-[var(--brand-pink)] sm:flex">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Floating Card */}
            <div className="glass absolute -right-3 -top-5 hidden w-52 rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-md)] sm:block lg:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                  <BarChart3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Performance
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    ROI Analysis
                  </p>
                </div>
              </div>
            </div>

            {/* Left Floating Card */}
            <div className="glass absolute -left-4 top-1/3 hidden w-56 rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-md)] md:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
                  <Target className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Business Focus
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Value Optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Metric */}
            <div className="absolute -bottom-5 right-4 hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:block lg:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                  <TrendingUp className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Digital Investments
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Better Business Returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="brand-line relative z-10" />
    </section>
  );
}