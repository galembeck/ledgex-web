import { AnimatedSection } from "@/components/animated-section";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/section-header";
import { features } from "@/constants/_public/features";

export function FeaturesSection() {
  return (
    <section className="py-14 md:py-28" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          description="Everything you need to understand, optimize, and control your company's financial health."
          keyword="Capabilities"
          title="Your CFO's New Best Friend"
        />

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              description={feature.description}
              icon={feature.icon}
              key={feature.title}
              title={feature.title}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
