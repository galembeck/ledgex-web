import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, LineChart } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { scaleIn } from "@/lib/framer-variants";

export function CallToActionSection() {
  const navigate = useNavigate();

  return (
    <section className="py-14 md:py-28" id="call-to-action">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedSection className="text-center">
          <motion.div className="relative" variants={scaleIn}>
            <div className="absolute -inset-8 rounded-3xl bg-white blur-2xl dark:bg-third-dark" />

            <div className="relative rounded-2xl border border-primary-purple/20 bg-white p-12 shadow-sm md:p-16 dark:bg-third-dark">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-purple/8">
                <LineChart className="h-6 w-6 text-primary-purple" />
              </div>

              <h2 className="mb-4 font-bold text-3xl text-black tracking-tight md:text-5xl dark:text-white">
                Stop Guessing. Start Knowing.
              </h2>

              <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground dark:text-secondary-muted-foreground">
                Join 340+ finance teams using LedgeX to detect waste, optimize
                spend, and make smarter financial decisions.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  className="h-12 cursor-pointer gap-2 px-8 text-base shadow-md shadow-primary-purple/20"
                  onClick={() => navigate({ to: "/" })}
                >
                  Start Free - 14 Days <ArrowUpRight className="h-4 w-4" />
                </Button>

                <Button
                  className="h-12 border-border px-8 text-base text-muted-foreground hover:text-black dark:border-muted-foreground/30 dark:text-secondary-muted-foreground dark:hover:text-white"
                  variant="outline"
                >
                  Talk to Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
