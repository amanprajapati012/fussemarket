import type { Metadata } from "next";
import SimplePage from "@/app/src/components/ui/SimplePage";

export const metadata: Metadata = { title: "Terms & Conditions | Your Company" };

export default function TermsPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms & Conditions"
      description="Replace this placeholder with your actual terms and conditions."
    />
  );
}
