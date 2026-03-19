import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { stats } from "@/constants/_public/stats";
import { fadeUp } from "@/lib/framer-variants";

export function StatsSection() {
  return (
    <section className="py-24" id="stats">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              className="text-center"
              key={stat.label}
              variants={fadeUp}
            >
              <h1 className="mb-2 font-extrabold font-mono-data text-4xl text-black tabular-nums md:text-5xl dark:text-white">
                {stat.value}
              </h1>
              <p className="text-muted-foreground text-sm dark:text-secondary-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
