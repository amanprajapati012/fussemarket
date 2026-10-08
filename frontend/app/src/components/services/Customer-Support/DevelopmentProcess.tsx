import {
  Activity,
  ClipboardCheck,
  FileText,
  Headphones,
  MessageCircle,
  Search,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We understand your products, customers, support requirements, common queries, and the type of customer experience you want to provide.",
    icon: Search,
  },
  {
    number: "02",
    title: "Support Planning",
    description:
      "We define support channels, responsibilities, response expectations, escalation paths, and processes based on your requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Knowledge & Process Setup",
    description:
      "We organise product information, FAQs, support guidelines, workflows, and other resources required by the support team.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Team Onboarding",
    description:
      "Our support team becomes familiar with your products, services, tools, communication standards, and customer support processes.",
    icon: Users,
  },
  {
    number: "05",
    title: "Customer Query Handling",
    description:
      "Customer questions and requests are handled through the agreed channels with clear communication and appropriate assistance.",
    icon: MessageCircle,
  },
  {
    number: "06",
    title: "Issue Resolution",
    description:
      "We investigate customer issues, provide solutions where possible, and escalate technical or complex cases when additional expertise is required.",
    icon: Headphones,
  },
  {
    number: "07",
    title: "Quality Monitoring",
    description:
      "We review support interactions, response quality, resolution effectiveness, and customer feedback to maintain consistent service standards.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    title: "Reporting & Review",
    description:
      "We track support activity, response times, ticket trends, resolution data, and other relevant metrics to understand support performance.",
    icon: Activity,
  },
  {
    number: "09",
    title: "Continuous Improvement",
    description:
      "We use customer feedback, support data, and recurring issues to improve processes, knowledge resources, response quality, and overall customer experience.",
    icon: Settings,
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20 md:py-24 lg:py-28">
      <div className="container-premium">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            Development Process
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[42px]">
            Our Customer Support Process
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            A structured approach that helps us understand your customers,
            establish the right support processes, handle queries effectively,
            and continuously improve the customer experience.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-12 overflow-x-auto pb-7 pt-2 scrollbar-hide">
          <div className="flex w-max snap-x snap-mandatory gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="premium-card group relative w-[320px] shrink-0 snap-start overflow-hidden p-7 sm:w-[350px] md:w-[380px]"
                >
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-wider text-[var(--brand-pink)]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-blue-soft)] text-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="mt-7 h-px w-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--brand-pink-light)]" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-pink)]" />
                    Customer support lifecycle
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-7 text-center md:px-10">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
            Better support starts with a consistent process.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] md:text-base">
            We handle customer interactions with a clear process that helps
            improve response quality, resolve issues effectively, and build
            stronger customer relationships.
          </p>
        </div>
      </div>
    </section>
  );
}