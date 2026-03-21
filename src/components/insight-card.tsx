import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface InsightCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  backgroundColor: string;
}

export function InsightCard({
  icon: Icon,
  label,
  value,
  color,
  backgroundColor,
}: InsightCardProps) {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3 rounded-xl border border-white/4 bg-white/4 px-4 py-3 backdrop-blur-sm"
      initial={{ opacity: 0, x: -20 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      <div
        className={`h-9 w-9 rounded-lg ${backgroundColor} flex items-center justify-center`}
      >
        <Icon className={`h-4 w-4 ${color}`} />
      </div>

      <div className="flex-1">
        <p className="text-slate-400 text-sm">{label}</p>
      </div>

      <span className={`font-mono-data font-semibold text-lg ${color}`}>
        {value}
      </span>
    </motion.div>
  );
}
