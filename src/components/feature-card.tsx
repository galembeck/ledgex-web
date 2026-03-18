import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/framer-variants";

interface FeatureCardProps {
  description: string;
  icon: LucideIcon;
  title: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary-purple/20 hover:shadow-foreground/3 hover:shadow-md dark:border-muted-foreground/30 dark:bg-third-dark"
      variants={fadeUp}
      whileHover={{
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-purple/8 transition-colors group-hover:bg-primary-purple/12">
        <Icon className="h-5 w-5 text-primary-purple" />
      </div>

      <h3 className="mb-1.5 font-semibold text-base text-black dark:text-white">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed dark:text-secondary-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
