import { motion } from "framer-motion";
import { logoCloud } from "@/constants/_public/logo-cloud";

export function LogoCloud() {
  return (
    <section
      className="overflow-hidden border-muted-foreground/20 border-y py-14"
      id="logo-cloud"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center font-medium text-muted-foreground text-xs uppercase tracking-[0.2em] dark:text-secondary-muted-foreground">
          Trusted by finance teams at
        </p>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 z-10 w-32 bg-linear-to-r from-primary-light to-transparent dark:from-primary-dark" />
          <div className="absolute top-0 right-0 bottom-0 z-10 w-32 bg-linear-to-r from-primary-light to-transparent dark:from-primary-dark" />

          <motion.div
            animate={{ x: [0, -48 * logoCloud.length] }}
            className="flex items-center gap-16"
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...logoCloud, ...logoCloud, ...logoCloud].map((logo) => (
              <div
                className="flex shrink-0 select-none items-center gap-2.5 text-muted-foreground/30 dark:text-secondary-muted-foreground/30"
                key={logo}
              >
                <div className="h-5 w-5 rounded bg-muted-foreground/10 dark:bg-secondary-muted-foreground/10" />
                <span className="whitespace-nowrap font-semibold text-lg">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
