import { Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LineChart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/constants/_components/navbar";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Navbar() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-border border-b bg-white/80 shadow-sm backdrop-blur-xl dark:border-none dark:bg-black/80"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link className="flex items-center gap-2" to="/">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-purple">
            <LineChart className="h-5 w-5 text-white" />
          </div>

          <span className="font-semibold text-black text-xl dark:text-white">
            LedgeX
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              className="font-medium text-muted-foreground text-sm transition-colors duration-200 hover:text-black dark:text-secondary-muted-foreground dark:hover:text-white"
              key={item.name}
              to={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            className="cursor-pointer text-muted-foreground text-sm hover:text-black dark:text-secondary-muted-foreground dark:hover:text-white"
            onClick={() => navigate({ to: "/" })}
            variant="ghost"
          >
            Sign In
          </Button>

          <Button
            className="cursor-pointer gap-2 text-sm shadow-sm"
            onClick={() => navigate({ to: "/" })}
          >
            Get Started
            <ArrowRight className="h-4 w-4 stroke-3" />
          </Button>

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            className="cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            size="icon"
            variant="ghost"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          <ThemeToggle />
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="border-border border-b bg-white/95 backdrop-blur-xl md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="space-y-3 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  className="block py-2 text-muted-foreground text-sm transition-colors duration-200 hover:text-black dark:text-secondary-muted-foreground dark:hover:text-white"
                  key={item.name}
                  to={item.href}
                >
                  {item.name}
                </Link>
              ))}

              <Button
                className="mt-2 flex w-full cursor-pointer flex-row items-center gap-2 font-semibold"
                onClick={() => navigate({ to: "/" })}
              >
                Get Started
                <ArrowRight className="h-4 w-4 stroke-3" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
