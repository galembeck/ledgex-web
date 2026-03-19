import { API } from "@/api/connections/ledgex";
import type { PricingPlan } from "@/types/services/pricing-plan";

export const pricingPlanModule = {
  async create(
    data: Omit<PricingPlan, "id" | "createdAt" | "createdBy">,
  ): Promise<PricingPlan> {
    return await API.fetch("/pricingplan", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async list(): Promise<PricingPlan[]> {
    return await API.fetch("/pricingplan", {
      method: "GET",
    });
  },

  async getById(pricingPlanId: string): Promise<PricingPlan> {
    return await API.fetch(`/pricingplan/${pricingPlanId}`, {
      method: "GET",
    });
  },

  async delete(pricingPlanId: string): Promise<void> {
    return await API.fetch(`/pricingplan/${pricingPlanId}`, {
      method: "DELETE",
    });
  },
};
