"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Heart,
  Megaphone,
  Users,
} from "lucide-react";

const trustPoints = [
  "Strategic creator selection",
  "Campaign planning & execution",
  "Performance measurement",
];

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-10 pb-16 md:gap-12 md:pb-20 lg:grid-cols-[0.84fr_1.16fr] lg:gap-2 lg:pb-24">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              Influencer Marketing
            </span>

            <h1 className="mt-5 text-[2rem] font-medium leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.7rem] lg:text-[3.05rem]">
              Build brand{" "}
              <span className="text-brand-gradient">
                influence that drives results.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base">
              We help brands identify the right creators, develop effective
              campaign strategies, and manage influencer partnerships from
              planning to execution. Our approach combines audience relevance,
              creative direction, and measurable campaign performance.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-brand group"
              >
                Get a Consultation
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="btn-outline-brand group"
              >
                View Our Portfolio
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-2xl">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[var(--brand-pink)]"
                  />

                  <span className="text-xs leading-5 text-[var(--text-secondary)]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="mt-8 grid max-w-xl grid-cols-3 border-t border-[var(--border)] pt-6">
              <div className="border-r border-[var(--border)] pr-3">
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Creators
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Carefully selected
                </p>
              </div>

              <div className="border-r border-[var(--border)] px-4">
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Campaigns
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Strategically planned
                </p>
              </div>

              <div className="pl-4">
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Results
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Clearly measured
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[820px] lg:translate-x-8">
            <div className="pink-glow absolute -left-10 top-10 h-48 w-48 rounded-full opacity-70 blur-3xl" />

            <div className="blue-glow absolute -right-10 bottom-10 h-56 w-56 rounded-full opacity-60 blur-3xl" />

            {/* Main Image */}
            <div className="image-hover relative z-10 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-lg)]">
              <div className="relative min-h-[430px] overflow-hidden rounded-[calc(var(--radius-xl)-8px)] sm:min-h-[500px] lg:min-h-[600px]">
                <Image
                  src="/influencer-marketing.jpg"
                  alt="Influencer Marketing"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />

                {/* Image Information */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/75 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                        Influencer Campaigns
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                        Strategy, creators & execution
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                      <Heart size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Status */}
            <div className="glass absolute -right-2 top-6 z-20 hidden rounded-2xl px-4 py-3 sm:block lg:-right-8">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-pink)]" />

                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Campaign Management
                  </p>

                  <p className="text-[11px] text-[var(--text-muted)]">
                    Planning & performance
                  </p>
                </div>
              </div>
            </div>

            {/* Creator Card */}
            <div className="glass absolute -left-3 top-1/3 z-20 hidden w-[200px] rounded-2xl p-4 sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Users size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Creator Selection
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-[var(--text-muted)]">
                    Audience & brand relevance
                  </p>
                </div>
              </div>
            </div>

            {/* Campaign Card */}
            <div className="glass absolute -bottom-5 right-2 z-20 hidden w-[205px] rounded-2xl p-4 sm:block lg:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Megaphone size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    Campaign Reach
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-[var(--text-muted)]">
                    Audience engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}