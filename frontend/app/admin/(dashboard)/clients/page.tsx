"use client";

import ResourceManager from "@/app/src/admin/components/ResourceManager";

export default function AdminClientsPage() {
  return (
    <ResourceManager
      resource="clients"
      listKey="clients"
      title="Clients / Logos"
      columns={[
        { key: "name", label: "Name" },
        { key: "logo", label: "Logo URL" },
      ]}
      emptyDefaults={{ name: "", logo: "", website: "" }}
      fields={[
        { name: "name", label: "Client Name" },
        { name: "logo", label: "Logo Image URL" },
        { name: "website", label: "Website (optional)" },
      ]}
    />
  );
}
