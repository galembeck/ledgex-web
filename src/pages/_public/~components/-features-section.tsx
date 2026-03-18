import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { FeatureCard } from "@/components/feature-card";
import { features } from "@/constants/_public/features";
import { fadeUp } from "@/lib/framer-variants";

export function FeaturesSection() {
  return (
    <section className="py-28" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-20 text-center">
          <motion.p
            className="mb-3 font-semibold text-primary-purple text-xs uppercase tracking-[0.2em]"
            variants={fadeUp}
          >
            Capabilities
          </motion.p>

          <motion.h2
            className="font-extrabold text-4xl text-black tracking-tight md:text-5xl dark:text-white"
            variants={fadeUp}
          >
            Your CFO's New Best Friend
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground dark:text-secondary-muted-foreground"
            variants={fadeUp}
          >
            Everything you need to understand, optimize, and control your
            company's financial health.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              description={feature.description}
              icon={feature.icon}
              key={feature.title}
              title={feature.title}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
