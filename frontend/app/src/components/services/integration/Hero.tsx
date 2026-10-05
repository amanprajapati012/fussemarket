"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  Network,
  Workflow,
} from "lucide-react";

const trustPoints = [
  "Enterprise application integration",
  "Automated data & workflows",
  "Connected technology ecosystem",
];

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-14 pb-16 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:pb-24">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              Enterprise Integration
            </span>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Eliminate data silos.{" "}
              <span className="text-brand-gradient">
                Connect everything.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)] md:text-base md:leading-8">
              We design and implement robust enterprise integration solutions
              that connect your applications, data sources, and platforms into
              a seamless, automated ecosystem. Stop manual data re-entry,
              eliminate information silos, and make your technology investments
              work together intelligently.
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

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[680px] lg:translate-x-8">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-10 rounded-full bg-[var(--brand-pink-soft)] opacity-60 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--brand-blue-soft)] opacity-70 blur-3xl" />

            {/* Main integration visual */}
            <div className="glass relative overflow-hidden rounded-[var(--radius-xl)] p-5 shadow-[var(--shadow-lg)] sm:p-7">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-pink)]">
                    Integration Hub
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                    Connected Technology Ecosystem
                  </h2>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
                  <span className="text-xs font-semibold text-[var(--text-secondary)]">
                    Active
                  </span>
                </div>
              </div>

              {/* Architecture */}
              <div className="relative mt-7 min-h-[390px]">
                {/* Connection lines */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-[22%] top-[31%] h-px w-[24%] bg-[var(--border-dark)]" />
                  <div className="absolute left-[54%] top-[31%] h-px w-[24%] bg-[var(--border-dark)]" />

                  <div className="absolute left-[22%] top-[65%] h-px w-[24%] bg-[var(--border-dark)]" />
                  <div className="absolute left-[54%] top-[65%] h-px w-[24%] bg-[var(--border-dark)]" />

                  <div className="absolute left-1/2 top-[31%] h-[34%] w-px -translate-x-1/2 bg-[var(--border-dark)]" />
                </div>

                {/* Source systems */}
                <div className="absolute left-0 top-[15%] w-[27%]">
                  <IntegrationNode
                    icon={Database}
                    title="Data Sources"
                    subtitle="Databases & APIs"
                  />
                </div>

                <div className="absolute right-0 top-[15%] w-[27%]">
                  <IntegrationNode
                    icon={Layers3}
                    title="Applications"
                    subtitle="Business Systems"
                  />
                </div>

                {/* Center hub */}
                <div className="absolute left-1/2 top-1/2 z-10 w-[43%] -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 text-center shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-brand)]">
                      <Network className="h-6 w-6" />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[var(--brand-pink)]">
                      Integration Layer
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                      Intelligent Connectivity
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                      APIs, workflows, data exchange & automation
                    </p>
                  </div>
                </div>

                {/* Bottom systems */}
                <div className="absolute bottom-[7%] left-0 w-[27%]">
                  <IntegrationNode
                    icon={Workflow}
                    title="Workflows"
                    subtitle="Automated Processes"
                  />
                </div>

                <div className="absolute bottom-[7%] right-0 w-[27%]">
                  <IntegrationNode
                    icon={GitBranch}
                    title="Platforms"
                    subtitle="Cloud & Enterprise"
                  />
                </div>

                {/* Floating status */}
                <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 shadow-[var(--shadow-md)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-pink)]" />
                  <span className="whitespace-nowrap text-xs font-semibold text-[var(--text-primary)]">
                    Data flowing. Systems connected.
                  </span>
                </div>
              </div>
            </div>

            {/* Floating card - top right */}
            <div className="absolute -right-3 top-10 hidden w-48 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)]">
                  <Workflow className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">
                    Automation
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Less manual work
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card - bottom left */}
            <div className="absolute -left-4 bottom-12 hidden w-52 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-md)] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-pink)] text-[var(--brand-pink)]">
                  <Network className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">
                    Connectivity
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    Systems working together
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

type IntegrationNodeProps = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
};

function IntegrationNode({
  icon: Icon,
  title,
  subtitle,
}: IntegrationNodeProps) {
  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-pink)] hover:shadow-[var(--shadow-md)] sm:p-4">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:bg-[var(--surface-pink)] group-hover:text-[var(--brand-pink)]">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <p className="mt-2 text-center text-[11px] font-semibold text-[var(--text-primary)] sm:text-xs">
        {title}
      </p>

      <p className="mt-1 hidden text-center text-[10px] leading-4 text-[var(--text-muted)] sm:block">
        {subtitle}
      </p>
    </div>
  );
}