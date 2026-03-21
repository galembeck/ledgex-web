import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { InsightCard } from "@/components/insight-card";
import { Logo } from "@/components/ui/logo";
import { insights } from "@/constants/_auth/insights";
import { fadeUp } from "@/lib/framer-variants";
import { SignInForm } from "./~components/-sign-in-form";

export const Route = createFileRoute("/_auth/sign-in/")({
  component: SignInPage,
});

function SignInPage() {
  return (
    <main className="flex min-h-screen bg-primary-light dark:bg-primary-dark">
      <div className="relative hidden overflow-hidden bg-slate-900 lg:flex lg:w-[52%]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-125 w-125 rounded-full bg-primary-purple/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-100 w-100 rounded-full bg-emerald-500/8 blur-[100px]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="justify-between! relative z-10 flex w-full flex-col p-12">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo className="text-white" />
          </motion.div>

          <div className="mt-4 flex flex-1 flex-col justify-center">
            <motion.p
              animate="visible"
              className="mb-4 font-medium text-primary-purple text-sm uppercase tracking-wide"
              custom={0}
              initial="hidden"
              variants={fadeUp}
            >
              AI-Powered Financial Intelligence
            </motion.p>

            <motion.h1
              animate="visible"
              className="mb-4 font-bold text-4xl text-white leading-[1.1] tracking-tight"
              custom={1}
              initial="hidden"
              variants={fadeUp}
            >
              Every financial decision,
              <span className="text-primary-purple"> amplified.</span>
            </motion.h1>

            <motion.p
              animate="visible"
              className="mb-10 text-base text-slate-400 leading-relaxed"
              custom={2}
              initial="hidden"
              variants={fadeUp}
            >
              LedgeX identifies hidden patterns in your spendng, detects
              anomalies in real time, and delivers insights that turn data into
              competitive advantage.
            </motion.p>

            <motion.div
              animate="visible"
              className="space-y-3"
              custom={3}
              initial="hidden"
              variants={fadeUp}
            >
              {insights.map((insight) => (
                <InsightCard
                  backgroundColor={insight.bg}
                  color={insight.color}
                  icon={insight.icon}
                  key={insight.label}
                  label={insight.label}
                  value={insight.value}
                />
              ))}
            </motion.div>
          </div>

          <motion.p
            animate={{ opacity: 1 }}
            className="mt-4 text-slate-500 text-xs"
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            &copy; {new Date().getFullYear()} LedgeX. All rights reserved.
          </motion.p>
        </div>
      </div>

      <SignInForm />
    </main>
  );
}
