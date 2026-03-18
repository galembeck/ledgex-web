import { Shield, Sparkles, TrendingDown } from "lucide-react";

export const productKPIs = [
  {
    label: "Total Burn Rate",
    value: "$284,320",
    change: "-8.2%",
    positive: true,
    icon: TrendingDown,
  },
  {
    label: "AI Savings Detected",
    value: "$42,890",
    change: "+23.4%",
    positive: true,
    icon: Sparkles,
  },
  {
    label: "Risk Score",
    value: "Low",
    change: "3 flags",
    positive: false,
    icon: Shield,
  },
];
