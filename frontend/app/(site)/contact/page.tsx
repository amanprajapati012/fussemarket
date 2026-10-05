import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/app/src/components/ui/PageHero";
import ContactForm from "@/app/src/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Your Company",
  description: "Get in touch with our team to discuss your next project.",
};

const info = [
  { icon: Phone, label: "Call Us", value: "+91 00000 00000" },
  { icon: Mail, label: "Email Us", value: "info@yourcompany.com" },
  { icon: MapPin, label: "Visit Us", value: "Sector 2, Noida, Uttar Pradesh, India" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat, 9:00 AM - 7:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Something Great Together"
        description="Tell us about your project and we'll get back to you within one business day."
      />

      <section className="py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            {info.map((item) => (
              <div key={item.label} className="premium-card flex items-start gap-4 p-6">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <item.icon size={19} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
