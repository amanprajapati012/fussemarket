import Hero from "@/app/src/components/Homepage/Hero";
import About from "@/app/src/components/Homepage/About";
import Services from "@/app/src/components/Homepage/Services";
import Industries from "@/app/src/components/Homepage/Industries";
import Clients from "@/app/src/components/Homepage/Clients";
import Team from "@/app/src/components/Homepage/Team";
import Testimonials from "@/app/src/components/Homepage/Testimonials";
import MissionVision from "@/app/src/components/Homepage/MissionVision";
import CTA from "@/app/src/components/Homepage/CTA";
import Sectors from "@/app/src/components/Homepage/Industries";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Sectors />
      <Clients />
      <Team />
      <Testimonials />
      <MissionVision />
      <CTA />
    </>
  );
}
