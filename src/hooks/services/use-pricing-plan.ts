import { useQuery } from "@tanstack/react-query";
import { pricingPlanModule } from "@/api/http/routes/pricing-plan";
import type { PricingPlan } from "@/types/services/pricing-plan";

export function usePricingPlan(pricingPlanId?: string) {
  const {
    data: pricingPlans,
    isLoading,
    error: pricingPlansError,
  } = useQuery({
    queryKey: ["pricing-plans", "list"],
    queryFn: async () => {
      return await pricingPlanModule.list();
    },
  });

  const {
    data: pricingPlan,
    isLoading: isPricingPlanLoading,
    error,
  } = useQuery<PricingPlan>({
    queryKey: ["pricing-plan", "details", pricingPlanId],
    queryFn: async () => {
      if (!pricingPlanId) {
        throw new Error("Pricing plan ID is not provided!");
      }

      const result = await pricingPlanModule.getById(pricingPlanId);

      if (!result?.id) {
        throw new Error("Pricing plan not found!");
      }

      return result;
    },
    enabled: !!pricingPlanId,
    retry: false,
  });

  return {
    pricingPlans,
    isLoading,
    pricingPlansError,

    pricingPlan,
    isPricingPlanLoading,
    error,
  };
}
