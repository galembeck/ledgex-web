import { useNavigate } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import { ProductPreview } from "@/components/product-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function IntroSection() {
  const navigate = useNavigate();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-20 pb-12 md:pt-32"
      id="intro"
      ref={ref}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-75 w-75 -translate-x-1/2 rounded-full bg-primary-light/10 blur-[80px] md:h-150 md:w-150 md:blur-[120px] dark:bg-primary-dark/5" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-primary-green/5 blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.2] md:opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--black) / 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6"
        style={{ y, opacity }}
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Badge className="mb-6 flex items-center gap-2 border border-primary-purple/20 bg-primary-purple/8 px-3 py-1.5 font-medium text-primary-purple text-xs transition-colors hover:bg-primary-purple/12 md:mb-8 md:p-4 md:text-sm">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">
              AI Engine Active - Real-time detection
            </span>
          </Badge>
        </motion.div>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="break-tight font-extrabold text-4xl text-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Financial Intelligence
          <br />
          <span className="mt-2 block bg-linear-to-r from-primary-purple via-primary-purple to-primary-green bg-clip-text text-transparent">
            Powered by AI
          </span>
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-6 max-w-70 text-muted-foreground text-sm leading-relaxed sm:max-w-xl sm:text-base md:max-w-2xl md:text-xl dark:text-secondary-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          LedgeX gives your finance team superpowers. Detect anomalies, optimize
          unit economics, and eliminate wasteful spend.
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:px-0 md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button
            className="h-12 w-full cursor-pointer gap-2 px-8 text-base shadow-md shadow-primary-purple/20 sm:w-auto"
            onClick={() => navigate({ to: "/" })}
          >
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            className="h-12 w-full cursor-pointer gap-2 border-border px-8 text-base text-muted-foreground transition-colors duration-200 hover:text-black sm:w-auto dark:text-secondary-muted-foreground dark:hover:text-white"
            onClick={() => navigate({ to: "/", hash: "how-it-works" })}
            variant="outline"
          >
            See How It Works <ChevronDown className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="w-full max-w-[100vw] overflow-hidden">
          <ProductPreview />
        </div>
      </motion.div>
    </section>
  );
}
