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
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      id="intro"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 h-150 w-150 rounded-full bg-primary-light/4 blur-[120px] dark:bg-primary-dark/4" />
        <div className="absolute right-1/4 bottom-1/4 h-125 w-125 rounded-full bg-primary-green/3 blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--black) / 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Badge className="mb-8 flex items-center gap-2 border border-primary-purple/20 bg-primary-purple/8 p-4 font-medium text-primary-purple text-sm transition-colors hover:bg-primary-purple/12">
            <Sparkles className="h-3.5 w-3.5" />
            AI Engine Active - Anomaly detection in real-time
          </Badge>
        </motion.div>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="font-extrabold text-5xl text-black leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem] dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Financial Intelligence
          <br />
          <span className="bg-linear-to-r from-primary-purple via-primary-purple to-primary-green bg-clip-text text-transparent">
            Powered by AI
          </span>
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl dark:text-secondary-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          LedgeX gives your finance team superpowers. Detect anomalies, optimize
          unit economics, and eliminate wasteful spend — all from a single
          console.
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button
            className="h-12 cursor-pointer gap-2 px-8 text-base shadow-md shadow-primary-purple/20"
            onClick={() => navigate({ to: "/" })}
            size="lg"
          >
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            className="h-12 cursor-pointer gap-2 border-border px-8 text-base text-muted-foreground transition-colors duration-200 hover:text-black dark:text-secondary-muted-foreground dark:hover:text-white"
            onClick={() => navigate({ to: "/", hash: "how-it-works" })}
            size="lg"
            variant="outline"
          >
            See How It Works <ChevronDown className="h-4 w-4" />
          </Button>
        </motion.div>

        <ProductPreview />
      </motion.div>
    </section>
  );
}
