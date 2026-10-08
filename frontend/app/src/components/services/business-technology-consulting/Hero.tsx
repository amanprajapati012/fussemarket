import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-24">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              Business Technology Consulting
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-[52px] lg:text-[56px]">
              Align your technology with the way your business works.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
              We help businesses make better technology decisions by
              connecting business goals with the right systems, platforms,
              processes, and digital capabilities. From technology planning
              to implementation guidance, we provide practical consulting
              focused on improving how your business operates and grows.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-brand group">
                Get a Consultation
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link href="/portfolio" className="btn-outline-brand group">
                View Our Portfolio
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:translate-x-6">
            <div className="image-hover relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lg)]">
              <div className="relative h-[400px] w-full sm:h-[480px] lg:h-[570px]">
                <Image
                  src="/BusinessTechnologyConsulting(1).avif"
                  alt="Business Technology Consulting"
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