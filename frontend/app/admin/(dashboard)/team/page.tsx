"use client";

import ResourceManager from "@/app/src/admin/components/ResourceManager";

export default function AdminTeamPage() {
  return (
    <ResourceManager
      resource="team"
      listKey="members"
      title="Team Members"
      columns={[
        { key: "name", label: "Name" },
        { key: "designation", label: "Designation" },
      ]}
      emptyDefaults={{ name: "", designation: "", photo: "", linkedin: "" }}
      fields={[
        { name: "name", label: "Full Name" },
        { name: "designation", label: "Designation", placeholder: "Founder & CEO" },
        { name: "photo", label: "Photo URL" },
        { name: "linkedin", label: "LinkedIn URL" },
      ]}
    />
  );
}
