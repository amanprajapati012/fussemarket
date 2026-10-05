import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/app/src/components/ui/PageHero";
import IconMap from "@/app/src/components/ui/IconMap";
import CTA from "@/app/src/components/Homepage/CTA";
import { getServices } from "@/app/src/lib/api";
import { defaultServices } from "@/app/src/data/services";

export const metadata: Metadata = {
  title: "Services | Your Company",
  description: "Explore our full range of software, cloud, marketing and support services.",
};

export default async function ServicesPage() {
  const services = (await getServices()) ?? defaultServices;

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything You Need, Under One Roof"
        description="From first line of code to long-term support — explore how we can help your business grow."
      />

      <section className="py-24">
        <div className="container-premium space-y-6">
          {services.map((service, i) => (
            <div
              key={service._id}
              id={service.slug}
              className="premium-card grid gap-8 p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <IconMap name={service.icon} size={28} />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--brand-pink)]">
                  {service.category} · {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  {service.shortDescription}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {service.features?.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]"
                    >
                      <Check size={13} className="text-[var(--brand-pink)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/contact" className="btn-outline-brand shrink-0 justify-self-start text-sm lg:justify-self-end">
                Discuss This
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
