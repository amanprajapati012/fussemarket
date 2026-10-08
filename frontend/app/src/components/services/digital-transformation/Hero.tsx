import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-background relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="container-premium relative z-10">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 pb-16 md:pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-24">
          {/* Left Content */}
          <div className="max-w-2xl animate-reveal">
            <span className="section-eyebrow">
              Digital Transformation
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-[52px]">
              Digital Transformation That Turns Strategic Vision Into
              <span className="text-brand-gradient"> Operating Reality</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
              We partner with organizations to plan and deliver comprehensive
              digital transformation programs that improve how they operate,
              serve customers, and compete. From strategy and technology to
              implementation and change management, we help turn transformation
              plans into practical business outcomes.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-brand">
                Get a Consultation
                <ArrowRight size={18} />
              </Link>

              <Link href="/portfolio" className="btn-outline-brand">
                View Our Portfolio
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-reveal lg:translate-x-6">
            <div className="image-hover relative mx-auto w-full max-w-2xl">
              <Image
                src="/DigitalTransformation(1).avif"
                alt="Digital Transformation Services"
                width={900}
                height={650}
                priority
                className="h-[400px] w-full object-cover sm:h-[480px] lg:h-[570px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}