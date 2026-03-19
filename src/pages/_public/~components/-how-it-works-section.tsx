import { AnimatedSection } from "@/components/animated-section";
import { HowItWorkCard } from "@/components/how-it-work-card";
import { SectionHeader } from "@/components/section-header";
import { howItWorksSteps } from "@/constants/_public/how-it-works";

export function HowItWorksSection() {
  return (
    <section
      className="bg-muted/30 py-14 md:py-28 dark:bg-secondary-dark"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          keyword="How it Works"
          title="From Connected to Optimized"
        />

        <div className="relative">
          <div className="absolute top-1/2 right-[12%] left-[12%] hidden h-px -translate-y-1/2 bg-border lg:block dark:bg-third-dark" />

          <AnimatedSection className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <HowItWorkCard
                description={step.description}
                icon={step.icon}
                key={step.title}
                step={step.step}
                title={step.title}
              />
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
