import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp } from "@/lib/framer-variants";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function Accordion({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionProps) {
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-border bg-white dark:border-muted-foreground/30 dark:bg-third-dark"
      variants={fadeUp}
    >
      <button
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors hover:bg-muted/20 focus:outline-none"
        onClick={onClick}
        type="button"
      >
        <span className="pr-4 font-medium text-black text-sm dark:text-white">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 dark:text-secondary-muted-foreground ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed dark:text-secondary-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
