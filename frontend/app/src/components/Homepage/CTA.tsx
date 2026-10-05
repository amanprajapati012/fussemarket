import Link from "next/link";
import { PhoneCall, Briefcase, FileText, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: PhoneCall,
    title: "Request a Consultation",
    desc: "Book a quick session to discuss your needs and get personalized guidance.",
    href: "/contact",
  },
  {
    icon: Briefcase,
    title: "View Our Portfolio",
    desc: "Explore our past work to see the quality and range of projects we've delivered.",
    href: "/portfolio",
  },
  {
    icon: FileText,
    title: "View Case Studies",
    desc: "Dive into real examples that show our process, approach, and results.",
    href: "/about#testimonials",
  },
];

export default function CTA() {
  return (
    <section className="hero-background py-24">
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow mx-auto">Ready to Move Forward?</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold tracking-tight text-[var(--text-primary)]">
            From Ideas to <span className="text-brand-gradient">Execution</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
            Build scalable digital solutions with a team that understands your
            business, simplifies complexity, and delivers with consistency.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="premium-card group p-8">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <card.icon size={20} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[var(--text-primary)]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {card.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-pink)] transition-all duration-300 group-hover:gap-2.5">
                Get Started
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
