"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Gauge,
  Code2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function Hero() {
  const trustPoints = [
    {
      icon: Workflow,
      text: "End-to-end test automation",
    },
    {
      icon: Code2,
      text: "UI, API & integration testing",
    },
    {
      icon: Gauge,
      text: "Faster and reliable releases",
    },
  ];

  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:gap-16 md:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pb-24">
          {/* Left Content */}
          <div className="animate-reveal max-w-2xl">
            <div className="section-eyebrow mb-6">
              Automation Testing Services
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.7rem]">
              Test more. Test faster.
              <span className="block text-brand-gradient">
                Release with confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              We design and implement intelligent test automation frameworks
              that give development teams fast, reliable feedback on every
              code change. From UI automation to API testing and performance
              engineering, we build quality infrastructure that helps teams
              deliver software faster and with greater confidence.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-brand">
                Get a Consultation
                <ArrowRight size={18} />
              </Link>

              <Link href="/portfolio" className="btn-outline-brand">
                View Our Portfolio
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 border-l border-[var(--border)] pl-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                      <Icon size={16} />
                    </div>

                    <div className="text-sm font-medium leading-5 text-[var(--text-primary)]">
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-reveal lg:translate-x-6">
            {/* Main Image */}
            <div className="image-hover relative mx-auto max-w-3xl">
              <div className="relative min-h-[430px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-lg)] sm:min-h-[500px] lg:min-h-[590px]">
                <Image
                  src="/automation-bannerimage(1).avif"
                  alt="Automation Testing Services"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[var(--foreground)]/85 p-5 text-white backdrop-blur-xl sm:inset-x-7 sm:bottom-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                        Test Automation
                      </p>

                      <p className="mt-2 text-lg font-semibold">
                        Reliable quality at development speed.
                      </p>

                      <p className="mt-1 text-sm text-white/65">
                        Automate. Validate. Release.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <ShieldCheck size={19} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Floating Card */}
            <div className="glass absolute -right-2 top-8 hidden w-52 rounded-2xl p-4 shadow-[var(--shadow-md)] sm:block lg:-right-8 lg:top-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Code2 size={19} />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Automation
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    UI & API Testing
                  </p>
                </div>
              </div>
            </div>

            {/* Left Floating Card */}
            <div className="glass absolute -left-3 top-1/2 hidden w-56 -translate-y-1/2 rounded-2xl p-4 shadow-[var(--shadow-md)] md:block lg:-left-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Workflow size={19} />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Test Pipeline
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Automated Validation
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
                <CheckCircle2
                  size={15}
                  className="text-[var(--brand-pink)]"
                />
                Continuous feedback
              </div>
            </div>

            {/* Bottom Metric */}
            <div className="absolute -bottom-5 right-4 hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:block lg:-right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Gauge size={20} />
                </div>

                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Release Quality
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Faster feedback cycles
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="pink-glow pointer-events-none absolute -bottom-16 -right-10 -z-10 h-44 w-44 rounded-full opacity-60" />
            <div className="blue-glow pointer-events-none absolute -left-16 top-10 -z-10 h-52 w-52 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}