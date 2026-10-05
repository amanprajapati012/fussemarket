"use client";

import ResourceManager from "@/app/src/admin/components/ResourceManager";

export default function AdminServicesPage() {
  return (
    <ResourceManager
      resource="services"
      listKey="services"
      title="Services"
      columns={[
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        { key: "slug", label: "Slug" },
      ]}
      emptyDefaults={{
        title: "",
        slug: "",
        category: "General",
        shortDescription: "",
        icon: "Code2",
        features: "",
      }}
      fields={[
        { name: "title", label: "Title", placeholder: "Custom Software Development" },
        { name: "slug", label: "Slug (URL-friendly, unique)", placeholder: "custom-software-development" },
        { name: "category", label: "Category", placeholder: "Software & Product" },
        { name: "shortDescription", label: "Short Description", type: "textarea" },
        { name: "icon", label: "Icon (Code2, Smartphone, Cloud, TrendingUp, ShieldCheck, Headset, Database, Globe, Layers)" },
        { name: "features", label: "Features (comma separated)" },
      ]}
    />
  );
}
