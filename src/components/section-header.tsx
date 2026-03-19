import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";
import { AnimatedSection } from "./animated-section";

interface SectionHeaderProps {
  description?: string;
  keyword: string;
  title: string;
}

export function SectionHeader({
  keyword,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className="mb-20 text-center">
      <motion.p
        className="mb-3 font-semibold text-primary-purple text-xs uppercase tracking-[0.2em]"
        variants={fadeUp}
      >
        {keyword}
      </motion.p>

      <motion.h2
        className="font-extrabold text-4xl text-black tracking-tight md:text-5xl dark:text-white"
        variants={fadeUp}
      >
        {title}
      </motion.h2>

      <motion.p
        className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground dark:text-secondary-muted-foreground"
        variants={fadeUp}
      >
        {description}
      </motion.p>
    </AnimatedSection>
  );
}
