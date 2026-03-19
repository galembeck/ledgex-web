import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/constants/_public/testimonials";

export function TestimonialsSection() {
  return (
    <section
      className="bg-muted/30 py-28 dark:bg-secondary-dark"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          keyword="Loved by finance teams"
          title="Don't Take Our Word For It"
        />

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              company={item.company}
              key={item.name}
              name={item.name}
              quote={item.quote}
              review={item.review}
              role={item.role}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
