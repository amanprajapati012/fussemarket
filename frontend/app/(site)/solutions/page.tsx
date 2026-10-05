import type { Metadata } from "next";
import SimplePage from "@/app/src/components/ui/SimplePage";

export const metadata: Metadata = { title: "Solutions | Your Company" };

export default function SolutionsPage() {
  return (
    <SimplePage
      eyebrow="Solutions"
      title="Platform Implementation & Managed Services"
      description="CRM, ERP, e-commerce and data platforms — implemented, integrated and supported end to end."
    />
  );
}
