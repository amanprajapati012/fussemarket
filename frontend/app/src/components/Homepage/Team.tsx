import { Linkedin } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { getTeamMembers } from "../../lib/api";
import { defaultTeam } from "../../data/team";

export default async function Team() {
  const team = (await getTeamMembers()) ?? defaultTeam;

  return (
    <section className="py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="People & Culture"
          title="A Global Team Driving Every Project Forward"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.slice(0, 4).map((member) => (
            <div key={member._id} className="premium-card group overflow-hidden p-0">
              <div className="image-hover relative aspect-[4/5] w-full overflow-hidden bg-[var(--surface-blue)]">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-[var(--brand-blue-light)]">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-black/40 py-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <Linkedin size={16} className="text-white" />
                </div>
              </div>

              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {member.name}
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
