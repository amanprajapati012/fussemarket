"use client";

import ResourceManager from "@/app/src/admin/components/ResourceManager";

export default function AdminTestimonialsPage() {
  return (
    <ResourceManager
      resource="testimonials"
      listKey="testimonials"
      title="Testimonials"
      columns={[
        { key: "clientName", label: "Client" },
        { key: "company", label: "Company" },
      ]}
      emptyDefaults={{ clientName: "", company: "", message: "", photo: "", rating: 5 }}
      fields={[
        { name: "clientName", label: "Client Name" },
        { name: "company", label: "Company" },
        { name: "message", label: "Testimonial Message", type: "textarea" },
        { name: "photo", label: "Photo URL (optional)" },
        { name: "rating", label: "Rating (1-5)", type: "number" },
      ]}
    />
  );
}
