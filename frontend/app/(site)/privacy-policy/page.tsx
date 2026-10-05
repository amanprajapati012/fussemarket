import type { Metadata } from "next";
import SimplePage from "@/app/src/components/ui/SimplePage";

export const metadata: Metadata = { title: "Privacy Policy | Your Company" };

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy Policy"
      description="Replace this placeholder with your actual privacy policy content."
    />
  );
}
