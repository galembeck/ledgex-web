import { AnimatedSection } from "@/components/animated-section";
import { PricingPlanCard } from "@/components/pricing-plan-card";
import { PricingPlanCardSkeleton } from "@/components/pricing-plan-card-skeleton";
import { SectionHeader } from "@/components/section-header";
import { usePricingPlan } from "@/hooks/services/use-pricing-plan";

export function PricingSection() {
  const { pricingPlans, isLoading, pricingPlansError } = usePricingPlan();

  return (
    <section className="py-14 md:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          description="Start with a 14-day free trial. No credit card required."
          keyword="Pricing"
          title="Simple, Transparent Pricing"
        />

        <AnimatedSection className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {isLoading &&
            new Array(3).fill(0).map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: this is a static array used for skeleton loading, so using index as key is acceptable here.
              <PricingPlanCardSkeleton key={index} />
            ))}

          {pricingPlansError && (
            <div className="col-span-full rounded-lg bg-red-100 p-4 text-center text-red-700 text-sm">
              Failed to load pricing plans. Please try again later.
            </div>
          )}

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
