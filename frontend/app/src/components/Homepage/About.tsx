"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Play,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import { useState } from "react";

const aboutPoints = [
  "Performance-driven digital marketing",
  "Modern websites & web applications",
  "SEO, branding & social media growth",
];

const services = [
  "Digital Marketing",
  "SEO",
  "Web Development",
  "Branding",
];

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "rgba(196, 109, 141, 0.09)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background: "rgba(78, 97, 124, 0.08)",
        }}
      />

      <div className="container-premium relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* =====================================================
              LEFT - VIDEO / IMAGE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Visual */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-black shadow-[0_30px_80px_rgba(20,25,40,0.15)]"
            >
              {/* Video */}
              <video
                className="h-[430px] w-full object-cover sm:h-[520px]"
                src="/videos/about-videos.mp4"
                poster="/about-main.png"
                muted
                loop
                playsInline
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
              />

              {/* Dark Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

              {/* Animated Shine */}
              <div className="pointer-events-none absolute -left-[120%] top-0 h-full w-[70%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-1000 group-hover:left-[140%]" />

              {/* Top Badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--brand-pink)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  Digital Growth Partner
                </span>
              </div>

              {/* Play Button */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={(e) => {
                    const video = e.currentTarget
                      .closest(".group")
                      ?.querySelector("video");

                    if (video) {
                      video.play();
                      setIsPlaying(true);
                    }
                  }}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/25"
                  aria-label="Play video"
                >
                  <Play size={22} fill="currentColor" className="ml-1" />
                </button>
              )}

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    FusseMarket
                  </p>

                  <h3 className="mt-1 max-w-sm text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Building digital experiences that move brands forward.
                  </h3>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--brand-blue-dark)] sm:flex">
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </motion.div>

            {/* Small Floating Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -right-4 hidden overflow-hidden rounded-2xl border-4 border-[var(--background)] bg-white shadow-[0_20px_50px_rgba(20,25,40,0.18)] sm:block lg:-right-8"
            >
              <img
                src="/about-small.png"
                alt="FusseMarket work"
                className="h-[145px] w-[220px] object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
                  Creative + Technology
                </p>
              </div>
            </motion.div>

            {/* Floating Number Card */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-16 hidden rounded-2xl border border-white/60 bg-white/85 px-5 py-4 shadow-[0_15px_40px_rgba(20,25,40,0.12)] backdrop-blur-xl sm:block lg:-left-7"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--surface-pink)",
                  }}
                >
                  <Sparkles
                    size={18}
                    style={{
                      color: "var(--brand-pink)",
                    }}
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                    Growth & Impact
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT - CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              About FusseMarket
            </motion.div>

            {/* Heading */}
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl lg:text-[56px]">
              Turning digital ideas into{" "}
              <span className="text-brand-gradient">
                meaningful growth.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              FusseMarket helps brands build a stronger digital presence
              through strategy, creativity and technology. From marketing and
              SEO to websites, web applications and branding, we create
              digital solutions designed around real business goals.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              Our approach is simple — understand the business, create the
              right strategy, execute with precision and continuously improve
              what works.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-3">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-3"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--surface-pink)",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      strokeWidth={2}
                      style={{
                        color: "var(--brand-pink)",
                      }}
                    />
                  </div>

                  <span className="text-sm font-medium text-[var(--text-secondary)] sm:text-base">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href="/services"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-brand group"
              >
                Explore Our Services

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-brand group"
              >
                Let's Work Together

                <MoveUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* Services Glass Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-12 flex flex-wrap gap-2"
            >
              {services.map((service) => (
                <motion.div
                  key={service}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="cursor-default rounded-full border border-[var(--border)] bg-white/60 px-4 py-2.5 text-xs font-medium text-[var(--text-secondary)] shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-md"
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Brand Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 origin-left sm:mt-24"
        >
          <div className="brand-line" />
        </motion.div>
      </div>
    </section>
  );
}