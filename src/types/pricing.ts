export interface PricingFeature {
  name: string;
  tooltip?: string;
  exclusive?: boolean;
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  popular?: boolean;
  features: PricingFeature[];
}