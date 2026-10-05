import SectionHeading from "../ui/SectionHeading";
import { getClients } from "../../lib/api";
import { defaultClients } from "../../data/clients";

export default async function Clients() {
  const clients = (await getClients()) ?? defaultClients;
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-20">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Our Clients"
          title="Partnering With Businesses Across Industries"
          align="center"
        />
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="animate-marquee flex w-max gap-6">
          {marqueeItems.map((client, i) => (
            <div
              key={`${client._id}-${i}`}
              className="tech-card flex h-24 w-48 shrink-0 items-center justify-center"
            >
              {client.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span className="text-sm font-semibold text-[var(--text-muted)]">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
