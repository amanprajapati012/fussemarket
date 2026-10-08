import {
  Headphones,
  LifeBuoy,
  MessageCircle,
  Monitor,
  Phone,
  Search,
  Settings,
  Users,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Customer Service",
    description:
      "Handle customer questions, requests, and general support interactions with clear and professional communication.",
    icon: Headphones,
  },
  {
    title: "Technical Support",
    description:
      "Help customers troubleshoot product, application, account, and technical issues with practical assistance.",
    icon: Wrench,
  },
  {
    title: "Email Support",
    description:
      "Manage customer queries through email with timely responses, clear communication, and proper issue tracking.",
    icon: MessageCircle,
  },
  {
    title: "Chat Support",
    description:
      "Provide real-time assistance through live chat to help customers get quick answers and resolve common issues.",
    icon: Monitor,
  },
  {
    title: "Phone Support",
    description:
      "Provide professional voice support for customers who need direct assistance with questions or complex issues.",
    icon: Phone,
  },
  {
    title: "Help Desk Support",
    description:
      "Manage support requests through a structured help desk process, including ticket handling, prioritisation, and escalation.",
    icon: LifeBuoy,
  },
  {
    title: "Customer Success Support",
    description:
      "Help customers get continued value from your products or services through ongoing assistance and relationship management.",
    icon: Users,
  },
  {
    title: "Issue & Ticket Management",
    description:
      "Track customer issues from initial request through resolution while maintaining clear records and support history.",
    icon: Search,
  },
  {
    title: "Support Process Management",
    description:
      "Help organise support workflows, escalation processes, response standards, and reporting for consistent service delivery.",
    icon: Settings,
  },
];

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-soft)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[42px]">
            Our Customer Support Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="premium-card group p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">
                    CUSTOMER SUPPORT
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]" />
              </article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-6 py-7 text-center shadow-[var(--shadow-sm)] md:px-10">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            Support your customers at every stage of their journey.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            From everyday questions and technical issues to ongoing customer
            success, we help your business provide reliable and consistent
            support across the channels that matter.
          </p>
        </div>
      </div>
    </section>
  );
}