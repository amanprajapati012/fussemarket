"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

const trustPoints = [
  "Data-driven marketing strategies",
  "SEO, paid media & content",
  "Measurable business growth",
];

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-10 pb-16 md:gap-12 md:pb-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-2 lg:pb-24">

          {/* Left Content */}
          <div className="max-w-xl lg:pr-4">
            <span className="section-eyebrow">
              Digital Marketing
            </span>

            <h1 className="mt-5 text-[2rem] font-medium leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.7rem] lg:text-[3.05rem]">
              Data-driven marketing that turns your{" "}
              <span className="text-brand-gradient">
                online presence into growth.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
              We deliver integrated digital marketing strategies that increase
              your visibility, attract qualified prospects, and turn attention
              into customers. From SEO and paid media to content and analytics,
              every campaign is focused on measurable business outcomes.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
            <div className="mt-9 space-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-pink)]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Small Metrics */}
            <div className="mt-9 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
              <MiniMetric
                icon={Search}
                label="SEO"
                value="Visibility"
              />

              <MiniMetric
                icon={Target}
                label="Paid Media"
                value="Targeted Reach"
              />

              <MiniMetric
                icon={BarChart3}
                label="Analytics"
                value="Measured Growth"
              />
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[820px] lg:translate-x-8">

            {/* Ambient Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-pink-soft)] opacity-70 blur-3xl" />

            <div className="relative">

              {/* Decorative Circle */}
              <div className="pointer-events-none absolute -right-8 top-1/2 h-[78%] w-[78%] -translate-y-1/2 rounded-full border border-[var(--border)] opacity-60" />

              {/* Main Image */}
              <div className="image-hover relative z-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-2.5 shadow-[var(--shadow-lg)] sm:p-3">
                <div className="relative overflow-hidden rounded-[calc(var(--radius-xl)-8px)] bg-[var(--surface-soft)]">

                  <img
                    src="/digital-marketing.jpg"
                    alt="Digital marketing strategy and analytics"
                    className="h-auto max-h-[650px] min-h-[430px] w-full object-cover object-center sm:min-h-[500px] lg:min-h-[600px]"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-[var(--shadow-md)] backdrop-blur-md sm:p-5">
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                            Growth Marketing
                          </p>

                          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                            Reach. Engage. Convert. Grow.
                          </p>
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top SEO Card */}
              <div className="absolute -right-3 top-8 z-20 hidden w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <Search className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[var(--text-muted)]">
                      Organic Growth
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Search visibility
                    </p>
                  </div>
                </div>
              </div>

              {/* Left Target Card */}
              <div className="absolute -left-6 top-[40%] z-20 hidden w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                    <Target className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[var(--text-muted)]">
                      Paid Media
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Right audience
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Analytics Card */}
              <div className="absolute -bottom-5 right-6 z-20 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:right-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <BarChart3 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[var(--text-muted)]">
                      Analytics
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Measure what matters
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Status */}
              <div className="absolute -top-4 left-10 z-20 hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 shadow-[var(--shadow-sm)] sm:flex">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />

                <span className="text-xs font-semibold text-[var(--text-secondary)]">
                  Performance-driven campaigns
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function MiniMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Search;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2.5">
      <Icon className="h-4 w-4 text-[var(--brand-pink)]" />

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
          {label}
        </p>

        <p className="text-xs font-semibold text-[var(--text-primary)]">
          {value}
        </p>
      </div>
    </div>
  );
}