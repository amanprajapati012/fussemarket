import type { Metadata } from "next";
import SimplePage from "@/app/src/components/ui/SimplePage";

export const metadata: Metadata = { title: "Portfolio | Your Company" };

export default function PortfolioPage() {
  return (
    <SimplePage
      eyebrow="Portfolio"
      title="Our Recent Work"
      description="A showcase of projects delivered for clients across industries — add your case studies here."
    />
  );
}
