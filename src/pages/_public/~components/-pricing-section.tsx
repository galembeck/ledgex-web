import { AnimatedSection } from "@/components/animated-section";
import { PricingPlanCard } from "@/components/pricing-plan-card";
import { SectionHeader } from "@/components/section-header";
import { usePricingPlan } from "@/hooks/services/use-pricing-plan";

export function PricingSection() {
  const { pricingPlans } = usePricingPlan();

  return (
    <section className="py-14 md:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          description="Start with a 14-day free trial. No credit card required."
          keyword="Pricing"
          title="Simple, Transparent Pricing"
        />

        <AnimatedSection className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {pricingPlans?.map((plan) => (
            <PricingPlanCard
              benefits={plan.benefits}
              callToActionText={plan.callToActionText}
              customPrice={plan.customPrice}
              description={plan.description}
              highlighted={plan.highlighted}
              key={plan.id}
              name={plan.name}
              price={plan.price}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
