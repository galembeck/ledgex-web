import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { howItWorksSteps } from "@/constants/_public/how-it-works";
import { fadeUp } from "@/lib/framer-variants";

export function HowItWorksSection() {
  return (
    <section
      className="bg-muted/30 py-28 dark:bg-secondary-dark"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          keyword="How it Works"
          title="From Connected to Optimized"
        />

        <div className="relative">
          <div className="absolute top-1/2 right-[12%] left-[12%] hidden h-px -translate-y-1/2 bg-border lg:block dark:bg-third-dark" />

          <AnimatedSection className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <motion.div
                className="relative text-center"
                key={step.title}
                variants={fadeUp}
              >
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
                    <step.icon className="h-7 w-7 text-primary-purple" />
                  </motion.div>

                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border border-primary-purple/20 bg-primary-purple/8 font-bold text-[11px] text-primary-purple">
                    {step.step}
                  </span>
                </div>

                <h3 className="mb-2 font-semibold text-base text-black dark:text-white">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed dark:text-secondary-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
