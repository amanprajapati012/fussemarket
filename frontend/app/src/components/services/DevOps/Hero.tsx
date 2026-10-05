"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  "CI/CD pipeline automation",
  "Cloud & infrastructure automation",
  "DevSecOps & continuous security",
];

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-14 pb-16 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:pb-24">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              DevOps Services
            </span>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Ship faster. Fail less.{" "}
              <span className="text-brand-gradient">
                Scale confidently.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
              We implement and manage end-to-end DevOps practices, toolchains,
              and culture that compress your software delivery lifecycle,
              improve system reliability, and reduce operational overhead.
              From CI/CD pipelines to full DevSecOps transformation, we make
              DevOps work for your team.
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

            {/* Trust points */}
            <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-pink)]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-[700px] lg:translate-x-8">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-pink-soft)] opacity-60 blur-3xl" />

            <div className="relative">
              {/* Main image */}
              <div className="image-hover relative z-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-lg)] sm:p-4">
                <div className="relative overflow-hidden rounded-[calc(var(--radius-xl)-8px)] bg-[var(--surface-soft)]">
                  <img
                    src="/Devopsimage(1).avif"
                    alt="DevOps engineering and automation"
                    className="h-auto max-h-[570px] w-full object-contain"
                  />

                  {/* Image bottom information */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-[var(--shadow-md)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-pink)]">
                          DevOps Pipeline
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                          Build. Deploy. Monitor. Improve.
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)] sm:flex">
                        <Activity className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top right floating card */}
              <div className="absolute -right-3 top-10 z-20 hidden w-52 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <GitBranch className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">
                      CI/CD
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Faster deployments
                    </p>
                  </div>
                </div>
              </div>

              {/* Left floating card */}
              <div className="absolute -left-5 top-[42%] z-20 hidden w-52 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                    <ServerCog className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">
                      Infrastructure
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Automated & scalable
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom right status */}
              <div className="absolute -bottom-5 right-5 z-20 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">
                      DevSecOps
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                      Security built in
                    </p>
                  </div>
                </div>
              </div>

              {/* Small top status */}
              <div className="absolute -top-4 left-8 z-20 hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 shadow-[var(--shadow-sm)] sm:flex">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
                <span className="text-xs font-semibold text-[var(--text-secondary)]">
                  Delivery pipeline active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}