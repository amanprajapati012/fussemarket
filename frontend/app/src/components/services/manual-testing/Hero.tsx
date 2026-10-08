"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  SearchCheck,
  ShieldCheck,
  Bug,
  Users,
} from "lucide-react";

const trustPoints = [
  {
    icon: SearchCheck,
    text: "Exploratory & functional testing",
  },
  {
    icon: Bug,
    text: "Real-world defect detection",
  },
  {
    icon: Users,
    text: "Human-focused quality assurance",
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
              Manual Testing Services
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.7rem]">
              Find the defects{" "}
              <span className="text-brand-gradient">
                automation can miss.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              Our manual testing teams bring human insight, exploratory
              thinking, and real-world user perspectives to software quality
              assurance. We identify usability issues, edge cases, and
              complex defects that automated tests may not catch.
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
            <div className="image-hover relative min-h-[430px] overflow-hidden border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-lg)] sm:min-h-[500px] lg:min-h-[590px]">
              <Image
                src="/manualtestingbanner(1).avif"
                alt="Manual Testing Services"
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
                        Software Quality
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                        Test like a real user.
                      </h3>

                      <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        Explore. Validate. Find what matters.
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-pink-soft)] text-[var(--brand-pink)] sm:flex">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Floating Card */}
            <div className="glass absolute -right-3 -top-5 hidden w-56 rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-md)] sm:block lg:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                  <SearchCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Testing Approach
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Exploratory Testing
                  </p>
                </div>
              </div>
            </div>

            {/* Left Floating Card */}
            <div className="glass absolute -left-4 top-1/3 hidden w-56 rounded-[var(--radius-md)] p-4 shadow-[var(--shadow-md)] md:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-pink-soft)] text-[var(--brand-pink)]">
                  <Bug className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Quality Check
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Edge Cases Found
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Metric */}
            <div className="absolute -bottom-5 right-4 hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:block lg:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)]">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    User Perspective
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Real-World Validation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-line relative z-10" />
    </section>
  );
}