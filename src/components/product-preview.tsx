import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { productKPIs } from "@/constants/_components/product-preview";
import { transactions } from "@/constants/_public/transactions";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ProductPreview() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="relative mt-20 w-full"
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      transition={{ delay: 0.9, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="absolute -inset-4 rounded-2xl bg-linear-to-b from-primary-purple/6 via-transparent to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-xl border border-border bg-white shadow-foreground/4 shadow-xl dark:border-muted-foreground/30 dark:bg-primary-dark">
        <div className="flex items-center gap-2 border-border bg-muted/40 px-4 py-3 dark:bg-muted-foreground/30">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-destructive/50 dark:bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-primary-yellow/50 dark:bg-primary-yellow" />
            <div className="h-3 w-3 rounded-full bg-primary-green/50 dark:bg-primary-green" />
          </div>

          <span className="ml-2 font-mono text-muted-foreground text-xs dark:text-secondary-muted-foreground">
            ledgex.app/dashboard
          </span>

          <div className="ml-auto flex items-center gap-2">
            <Badge className="border-primary-green/20 bg-primary-green/10 px-2 py-0.5 text-[10px] text-primary-green">
              <span className="pulse-indicator mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary-green" />
              AI Engine Active
            </Badge>
          </div>
        </div>

        <div className="space-y-5 p-6">
          <div className="grid grid-cols-3 gap-4">
            {productKPIs.map((item, i) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-border bg-white p-4 text-left dark:border-muted-foreground/30 dark:bg-third-dark"
                initial={{ opacity: 0, y: 16 }}
                key={item.label}
                transition={{ delay: 1.2 + i * 0.12, duration: 0.4 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground text-xs dark:text-secondary-muted-foreground">
                    {item.label}
                  </span>
                  <item.icon className="h-3.5 w-3.5 text-muted-foreground/60 dark:text-secondary-muted-foreground" />
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-bold font-mono-data text-black text-xl tabular-nums dark:text-white">
                    {item.value}
                  </span>
                  <span
                    className={`font-medium text-xs ${item.positive ? "text-primary-green" : "text-primary-yellow"}`}
                  >
                    {item.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-border dark:border-muted-foreground/30">
            <div className="grid grid-cols-[1fr_140px_130px_90px] gap-0 border-border border-b bg-muted/30 px-4 py-2.5 font-medium text-muted-foreground text-xs dark:border-muted-foreground/30 dark:bg-third-dark dark:text-secondary-muted-foreground">
              <span>Description</span>
              <span>AI Category</span>
              <span className="text-right">Amount</span>
              <span className="text-center">Risk</span>
            </div>

            {transactions.map((transaction, i) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className={`grid grid-cols-[1fr_140px_130px_90px] items-center gap-0 border-border border-b px-4 py-3 text-sm transition-colors last:border-b-0 hover:bg-muted/20 dark:border-muted-foreground/30 dark:hover:bg-third-dark/30 ${
                  transaction.risk === "Critical" ? "bg-destructive/3" : ""
                }`}
                initial={{ opacity: 0, x: -12 }}
                key={transaction.description}
                transition={{ delay: 1.5 + i * 0.08, duration: 0.4 }}
              >
                <span className="text-left font-medium text-black dark:text-white">
                  {transaction.description}
                </span>

                <span className="flex items-center gap-1.5">
                  <span
                    className={`rounded-full border px-2 py-0.5 text-xs ${transaction.intelligenceTag ? "ai-shimmer border-primary-purple/20 bg-primary-purple/8 text-primary-purple" : "border-border bg-muted text-muted-foreground dark:border-muted-foreground/30 dark:bg-third-dark dark:text-secondary-muted-foreground"}`}
                  >
                    {transaction.category}
                  </span>
                </span>

                <span className="text-right font-mono-data text-black tabular-nums dark:text-white">
                  {transaction.amount}
                </span>

                <span className="flex justify-center">
                  <span
                    className={`rounded-full px-2 py-0.5 font-medium text-[11px] ${
                      transaction.risk === "Critical"
                        ? "bg-destructive/10 text-destructive"
                        : // biome-ignore lint/style/noNestedTernary: required by different risk levels
                          transaction.risk === "Anomaly"
                          ? "bg-primary-yellow/1- text-primary-yellow"
                          : "bg-primary-green/10 text-primary-green"
                    }`}
                  >
                    {transaction.risk}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="anomaly-pulse gradient-ai-insight flex items-start gap-3 rounded-lg border p-4"
            initial={{ opacity: 0, y: 12 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-purple/10">
              <AlertTriangle className="h-4 w-4 text-primary-purple" />
            </div>

            <div className="text-left">
              <p className="font-semibold text-black text-sm dark:text-white">
                Anomaly Detected - Duplicate Subscription
              </p>

              <p className="mt-0.5 text-muted-foreground text-xs dark:text-secondary-muted-foreground">
                LedgeX AI identified a $890/mo duplicate SaaS license across two
                departments. Estimated annual savings: $10.680.
              </p>
            </div>

            <Button
              className="h-7 shrink-0 border-primary-purple/20 text-primary-purple text-xs hover:bg-primary-purple/8"
              size="sm"
              variant="outline"
            >
              Review
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-primary-light to-transparent dark:from-primary-dark" />
    </motion.div>
  );
}
