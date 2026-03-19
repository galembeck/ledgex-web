import { Link } from "@tanstack/react-router";
import { LineChart } from "lucide-react";
import { footerItems } from "@/constants/_components/footer";

export function Footer() {
  return (
    <footer className="border-muted-foreground/30 border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link className="flex items-center gap-2" to="/">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-purple">
                <LineChart className="h-5 w-5 text-white" />
              </div>

              <span className="font-semibold text-black text-xl dark:text-white">
                LedgeX
              </span>
            </Link>

            <p className="mt-4 text-muted-foreground text-sm dark:text-secondary-muted-foreground">
              AI-powered financial intelligence for modern finance teams.
            </p>
          </div>

          {footerItems.map((item) => (
            <div key={item.title}>
              <h4 className="mb-4 font-semibold text-black text-sm dark:text-white">
                {item.title}
              </h4>

              <ul className="space-y-2.5">
                {item.links.map((link) => (
                  <li key={link.item}>
                    <Link
                      className="font-normal text-muted-foreground text-sm dark:text-secondary-muted-foreground"
                      hash={link.hash}
                      to="/"
                    >
                      {link.item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-muted-foreground/30 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-xs dark:text-secondary-muted-foreground">
            &copy; {new Date().getFullYear()} LedgeX Inc. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              className="text-muted-foreground text-xs transition-colors duration-200 hover:text-black dark:text-secondary-muted-foreground dark:hover:text-white"
              href="/"
            >
              Twitter
            </a>

            <a
              className="text-muted-foreground text-xs transition-colors duration-200 hover:text-black dark:text-secondary-muted-foreground dark:hover:text-white"
              href="/"
            >
              LinkedIn
            </a>

            <a
              className="text-muted-foreground text-xs transition-colors duration-200 hover:text-black dark:text-secondary-muted-foreground dark:hover:text-white"
              href="/"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
