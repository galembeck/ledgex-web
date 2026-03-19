import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/lib/framer-variants";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface PricingPlanCardProps {
  name: string;
  price: number;
  customPrice?: boolean;
  description: string;
  benefits: string[];
  callToActionText: string;
  highlighted?: boolean;
}

export function PricingPlanCard({
  name,
  price,
  customPrice,
  description,
  benefits,
  callToActionText,
  highlighted,
}: PricingPlanCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`flex flex-col rounded-xl border p-6 ${
        highlighted
          ? "relative border-primary-purple/40 bg-white shadow-lg shadow-primary-purple/6 dark:bg-third-dark"
          : "border-border bg-white dark:border-muted-foreground/30 dark:bg-third-dark"
      }`}
      variants={fadeUp}
      whileHover={{
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="px-3 py-1 text-xs shadow-sm">Most Popular</Badge>
        </div>
      )}

      <h3 className="font-semibold text-base text-black dark:text-white">
        {name}
      </h3>

      <div className="mt-3 flex items-baseline gap-1">
        {customPrice === false ? (
          <>
            <span className="font-bold text-4xl text-black tabular-nums dark:text-white">
              ${price}
            </span>
            <span className="text-muted-foreground text-sm dark:text-secondary-muted-foreground">
              /month
            </span>
          </>
        ) : (
          <span className="font-bold text-4xl text-black tabular-nums dark:text-white">
            Custom
          </span>
        )}
      </div>

      <p className="mt-2 text-muted-foreground text-sm dark:text-secondary-muted-foreground">
        {description}
      </p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {benefits.map((benefit, i) => (
          <li
            className="flex items-start gap-2 text-muted-foreground text-sm dark:text-secondary-muted-foreground"
            // biome-ignore lint/suspicious/noArrayIndexKey: this list is static and won't change, so using the index as a key is acceptable here.
            key={i}
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-green" />
            {benefit}
          </li>
        ))}
      </ul>

      <Button
        className={`mt-8 flex w-full cursor-pointer ${highlighted ? "" : "bg-accent text-foreground hover:bg-accent/80"}`}
        onClick={() => navigate({ to: "/" })}
        variant={highlighted ? "default" : "outline"}
      >
        {callToActionText}
      </Button>
    </motion.div>
  );
}
