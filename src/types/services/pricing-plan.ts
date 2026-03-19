export interface PricingPlan {
  id: string;

  name: string;
  description: string;
  price: number;
  customPrice: boolean;

  benefits: string[];

  callToActionText: string;

  highlighted: boolean;

  createdAt: string;
  createdBy: string;
}
