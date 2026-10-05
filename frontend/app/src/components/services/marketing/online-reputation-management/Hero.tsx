"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  MessageSquare,
  Search,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  "Online reputation monitoring",
  "Review & feedback management",
  "Brand presence improvement",
];

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:gap-14 md:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
          {/* Content */}
          <div className="animate-reveal max-w-2xl">
            <span className="section-eyebrow">
              Online Reputation Management
            </span>

            <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.6rem]">
              Manage your online reputation with{" "}
              <span className="text-brand-gradient">
                clarity and consistency.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
              We help businesses monitor their online presence, respond to
              customer feedback, manage reviews, and address reputation
              concerns across relevant digital platforms.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-brand">
                Get a Consultation
                <ArrowRight size={17} />
              </Link>

              <Link href="/portfolio" className="btn-outline-brand">
                View Our Portfolio
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[var(--brand-pink)]"
                  />

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-reveal lg:translate-x-8">
            <div className="relative mx-auto w-full max-w-[680px]">
              {/* Main Image */}
              <div className="image-hover relative min-h-[430px] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lg)] sm:min-h-[500px] lg:min-h-[600px]">
                <Image
                  src="/online reputation(1).avif"
                  alt="Online Reputation Management"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="glass rounded-[var(--radius-md)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                          Reputation Management
                        </p>

                        <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                          Monitor. Respond. Improve.
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                        <ShieldCheck size={21} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Status Card */}
              <div className="glass absolute -right-3 -top-5 hidden w-[205px] rounded-2xl p-4 shadow-[var(--shadow-md)] sm:block lg:-right-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                    <Search size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Online Monitoring
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Brand mentions
                    </p>
                  </div>
                </div>
              </div>

              {/* Left Floating Card */}
              <div className="glass absolute -left-3 top-1/3 hidden w-[210px] rounded-2xl p-4 shadow-[var(--shadow-md)] md:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <MessageSquare size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Customer Feedback
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Reviews & responses
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Metric Card */}
              <div className="glass absolute -bottom-5 -right-3 hidden w-[230px] rounded-2xl p-4 shadow-[var(--shadow-md)] sm:block lg:-right-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Reputation Insights
                    </p>

                    <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                      Track & improve
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                    <BarChart3 size={19} />
                  </div>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--surface-blue)]">
                  <div className="h-full w-[76%] rounded-full bg-[var(--gradient-brand)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}