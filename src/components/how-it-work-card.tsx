import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/framer-variants";

interface HowItWorkCardProps {
  description: string;
  icon: LucideIcon;
  step: string;
  title: string;
}

export function HowItWorkCard({
  icon: Icon,
  title,
  step,
  description,
}: HowItWorkCardProps) {
  return (
    <motion.div className="relative text-center" variants={fadeUp}>
      <div className="relative z-10 mx-auto mb-6">
        <motion.div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white shadow-sm dark:border-muted-foreground/30 dark:bg-third-dark"
          whileHover={{
            y: -2,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25,
            },
          }}
        >
          <Icon className="h-7 w-7 text-primary-purple" />
        </motion.div>

        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border border-primary-purple/20 bg-primary-purple/8 font-bold text-[11px] text-primary-purple">
          {step}
        </span>
      </div>

      <h3 className="mb-2 font-semibold text-base text-black dark:text-white">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed dark:text-secondary-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
