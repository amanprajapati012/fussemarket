"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:gap-16 md:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pb-24">
          
          {/* Left Content */}
          <div className="animate-reveal max-w-2xl">
            <div className="section-eyebrow mb-6">
              Application Support & Management
            </div>

            <h1 className="text-4xl font-medium leading-[1.12] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.4rem]">
              Application Support and Management Services
              <span className="block text-brand-gradient">
                That Keep Your Business Running
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              We provide comprehensive application support and management
              services that help keep your business-critical applications
              stable, secure, and performing consistently. From proactive
              monitoring and issue resolution to maintenance and continuous
              improvements, we help your team stay focused on business growth
              instead of application problems.
            </p>

            {/* CTA Buttons */}
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
          </div>

          {/* Right Image */}
          <div className="relative animate-reveal lg:translate-x-6">
            <div className="image-hover relative mx-auto max-w-3xl">
              <div className="relative min-h-[430px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-lg)] sm:min-h-[500px] lg:min-h-[590px]">
                <Image
                  src="/ApplicationSupport(1).avif"
                  alt="Application Support and Management Services"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}