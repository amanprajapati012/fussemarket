import type { Metadata } from "next";
import About from "@/app/src/components/Homepage/About";
import Team from "@/app/src/components/Homepage/Team";
import MissionVision from "@/app/src/components/Homepage/MissionVision";
import Testimonials from "@/app/src/components/Homepage/Testimonials";
import CTA from "@/app/src/components/Homepage/CTA";
import PageHero from "@/app/src/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us | Your Company",
  description: "Learn about our story, our team, and the values that drive us.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building Technology With Purpose"
        description="We are a team of engineers, strategists and designers helping businesses turn ambitious ideas into reliable digital products."
      />
      <About />
      <div id="team">
        <Team />
      </div>
      <MissionVision />
      <div id="testimonials">
        <Testimonials />
      </div>
      <CTA />
    </>
  );
}
