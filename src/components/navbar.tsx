import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-border border-b shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link className="flex items-center gap-2" to="/">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-purple">
            <LineChart className="h-4 w-4 text-white" />
          </div>

          <span className="font-bold text-black text-lg tracking-tight dark:text-white">
            LedgeX
          </span>
        </Link>

        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
