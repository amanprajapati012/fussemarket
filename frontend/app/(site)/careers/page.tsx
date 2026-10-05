import type { Metadata } from "next";
import SimplePage from "@/app/src/components/ui/SimplePage";

export const metadata: Metadata = { title: "Careers | Your Company" };

export default function CareersPage() {
  return (
    <SimplePage
      eyebrow="Careers"
      title="Join Our Growing Team"
      description="We're always looking for curious, driven people. Send your resume to careers@yourcompany.com."
    />
  );
}
