import TestimonialsCarousel from "./TestimonialsCarousel";
import SectionHeading from "../ui/SectionHeading";
import { getTestimonials } from "../../lib/api";
import { defaultTestimonials } from "../../data/testimonials";

export default async function Testimonials() {
  const testimonials = (await getTestimonials()) ?? defaultTestimonials;

  return (
    <section className="dark-section py-24">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Partners Say"
          align="center"
          light
        />

        <div className="mt-14">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
