"use client";

import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { TestimonialItem } from "../../data/testimonials";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: TestimonialItem[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const active = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Quote size={40} className="mx-auto text-[var(--brand-pink-light)]" />

      <p className="mt-6 text-lg leading-8 text-white/85 sm:text-xl">
        &ldquo;{active.message}&rdquo;
      </p>

      <div className="mt-7 flex flex-col items-center gap-1">
        <p className="text-sm font-semibold text-white">{active.clientName}</p>
        <p className="text-xs text-white/50">{active.company}</p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--brand-pink)] hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t._id}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[var(--brand-pink-light)]" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--brand-pink)] hover:text-white"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
