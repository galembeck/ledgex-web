import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef(null);

  const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      animate={isInView ? "visible" : "hidden"}
      className={className}
      initial="hidden"
      ref={ref}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}
