import { ShieldCheck, Sparkles, Layers, Heart } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const values = [
  { icon: ShieldCheck, title: "Integrity First", desc: "Full transparency and honesty in every engagement." },
  { icon: Sparkles, title: "Excellence Strategy", desc: "We pursue excellence in every solution we deliver." },
  { icon: Layers, title: "Collective Wisdom", desc: "Our strength comes from diverse, collaborative thinking." },
  { icon: Heart, title: "Client First", desc: "Your success is our success, always." },
];

export default function MissionVision() {
  return (
    <section className="py-24">
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="premium-card p-10">
            <span className="section-eyebrow">Our Mission</span>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
              To Enable Confident Transformation
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              We exist to eliminate the friction between great ideas and their
              execution — giving startups and enterprises the technical depth
              and strategic clarity to transform boldly.
            </p>
          </div>

          <div className="premium-card p-10">
            <span className="section-eyebrow">Our Vision</span>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
              Digital Confidence for Every Organisation
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              A future where digital transformation is a natural evolution —
              where organisations adapt and grow in an environment shaped by
              trust and technology.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Who We Are"
            title="The Values That Guide Our Work"
            align="center"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="premium-card p-7 text-center">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <value.icon size={20} />
              </div>
              <h4 className="mt-4 text-sm font-semibold text-[var(--text-primary)]">
                {value.title}
              </h4>
              <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
