import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp } from "@/lib/framer-variants";

interface TestimonialCardProps {
  company: string;
  name: string;
  quote: string;
  review: number;
  role: string;
}

export function TestimonialCard({
  review,
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-white p-6 dark:border-muted-foreground/30 dark:bg-third-dark"
      variants={fadeUp}
      whileHover={{
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
    >
      <div className="mb-4 flex gap-0.5">
        {[...new Array(5)].map((_, i) => (
          <Star
            className={
              review > i
                ? "fill-primary-yellow text-primary-yellow"
                : "text-primary-yellow"
            }
            // biome-ignore lint/suspicious/noArrayIndexKey: not ideal but the review score is static and won't change, so it's safe to use the index as key here
            key={i}
          />
        ))}
      </div>

      <p className="mb-6 text-[15px] text-black leading-relaxed dark:text-white">
        {quote}
      </p>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-purple/8">
          <span className="font-semibold text-primary-purple text-sm">
            {name[0]}
          </span>
        </div>

        <div>
          <p className="font-semibold text-black text-sm dark:text-white">
            {name}
          </p>

          <p className="text-muted-foreground text-xs dark:text-secondary-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
